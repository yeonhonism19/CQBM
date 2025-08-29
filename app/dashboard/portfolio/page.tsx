'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Edit, Trash2, Upload, X } from 'lucide-react'

// 이 페이지는 동적 렌더링을 사용합니다 (관리자 페이지이므로)
export const dynamic = 'force-dynamic'

interface Project {
  id: string
  slug: string
  title: string
  client: string
  category: string
  question: string
  thumbnail: string
  video_thumbnail?: string
  images: string[]
  videos: string[]
  featured: boolean
  order_index: number
}

export default function PortfolioManager() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    initializeAndFetch()
  }, [])
  
  const initializeAndFetch = async () => {
    try {
      const supabase = createClient()
      
      // 인증 확인
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      
      if (authError || !user) {
        console.error('인증 오류:', authError)
        router.push('/login')
        return
      }
      
      // 프로젝트 가져오기
      await fetchProjects(supabase)
    } catch (error) {
      console.error('초기화 오류:', error)
      setError('시스템 오류가 발생했습니다.')
      setLoading(false)
    }
  }

  const fetchProjects = async (supabaseClient?: any) => {
    try {
      const supabase = supabaseClient || createClient()
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true })
      
      if (error) {
        console.error('프로젝트 로드 오류:', error)
        setError('프로젝트를 불러올 수 없습니다.')
      } else if (data) {
        setProjects(data)
      }
    } catch (error) {
      console.error('프로젝트 로드 오류:', error)
      setError('프로젝트를 불러올 수 없습니다.')
    } finally {
      setLoading(false)
    }
  }

  const uploadFile = async (file: File, folder: string): Promise<string | null> => {
    try {
      const supabase = createClient()
      const fileExt = file.name.split('.').pop()
      const fileName = `${folder}/${Date.now()}.${fileExt}`
      
      const { data, error } = await supabase.storage
        .from('portfolio')
        .upload(fileName, file)
      
      if (error) {
        console.error('Upload error:', error)
        return null
      }
      
      const { data: { publicUrl } } = supabase.storage
        .from('portfolio')
        .getPublicUrl(fileName)
      
      return publicUrl
    } catch (error) {
      console.error('파일 업로드 오류:', error)
      return null
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    
    try {
      const supabase = createClient()
      const formData = new FormData(e.currentTarget)
      
      // 썸네일 업로드
      const thumbnailFile = formData.get('thumbnail') as File
      let thumbnailUrl = editingProject?.thumbnail || ''
      
      if (thumbnailFile && thumbnailFile.size > 0) {
        const uploadedUrl = await uploadFile(thumbnailFile, 'thumbnails')
        if (uploadedUrl) {
          thumbnailUrl = uploadedUrl
        }
      }
      
      // 프로젝트 데이터
      const projectData = {
        slug: formData.get('slug') as string,
        title: formData.get('title') as string,
        client: formData.get('client') as string,
        category: formData.get('category') as string,
        question: formData.get('question') as string,
        thumbnail: thumbnailUrl,
        featured: formData.get('featured') === 'on',
        images: editingProject?.images || [],
        videos: editingProject?.videos || [],
        order_index: editingProject?.order_index || projects.length
      }
      
      if (editingProject) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', editingProject.id)
        
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([projectData])
        
        if (error) throw error
      }
      
      setShowForm(false)
      setEditingProject(null)
      await fetchProjects()
    } catch (error) {
      console.error('저장 오류:', error)
      setError('프로젝트 저장 중 오류가 발생했습니다.')
    }
  }

  const deleteProject = async (id: string) => {
    if (!confirm('정말로 삭제하시겠습니까?')) return
    
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      
      await fetchProjects()
    } catch (error) {
      console.error('삭제 오류:', error)
      setError('프로젝트 삭제 중 오류가 발생했습니다.')
    }
  }

  const getImageUrl = (url: string | null | undefined): string => {
    if (!url) return '/images/placeholder.svg'
    
    // 상대 경로인 경우
    if (url.startsWith('/')) return url
    
    // 절대 URL인지 확인
    try {
      new URL(url)
      return url
    } catch {
      // URL이 아닌 경우 기본 이미지 반환
      return '/images/placeholder.svg'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600 mb-2">오류 발생</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            새로고침
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">포트폴리오 관리</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700"
          >
            <Plus className="w-5 h-5" />
            새 프로젝트 추가
          </button>
        </div>

        {/* 프로젝트 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={getImageUrl(project.thumbnail)}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.svg'
                }}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-gray-600">{project.client}</p>
                <p className="text-sm text-gray-500 mt-2">{project.category}</p>
                {project.featured && (
                  <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded mt-2">
                    Featured
                  </span>
                )}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => {
                      setEditingProject(project)
                      setShowForm(true)
                    }}
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="bg-red-100 text-red-600 p-2 rounded hover:bg-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 프로젝트가 없을 때 */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">아직 등록된 프로젝트가 없습니다.</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            >
              첫 프로젝트 추가하기
            </button>
          </div>
        )}

        {/* 프로젝트 폼 모달 */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {editingProject ? '프로젝트 수정' : '새 프로젝트 추가'}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setEditingProject(null)
                    setError(null)
                  }}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Slug (URL)</label>
                  <input
                    type="text"
                    name="slug"
                    defaultValue={editingProject?.slug}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="예: startup-branding"
                    pattern="[a-z0-9-]+"
                    title="소문자, 숫자, 하이픈만 사용 가능합니다"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">프로젝트 제목</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={editingProject?.title}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">클라이언트</label>
                  <input
                    type="text"
                    name="client"
                    defaultValue={editingProject?.client}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">카테고리</label>
                  <select
                    name="category"
                    defaultValue={editingProject?.category || '브랜딩'}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    <option value="브랜딩">브랜딩</option>
                    <option value="마케팅">마케팅</option>
                    <option value="웹 개발">웹 개발</option>
                    <option value="앱 개발">앱 개발</option>
                    <option value="UX/UI">UX/UI</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">질문</label>
                  <textarea
                    name="question"
                    defaultValue={editingProject?.question}
                    className="w-full px-3 py-2 border rounded-lg"
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">썸네일 이미지</label>
                  <input
                    type="file"
                    name="thumbnail"
                    accept="image/*"
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  {editingProject?.thumbnail && (
                    <img 
                      src={getImageUrl(editingProject.thumbnail)} 
                      alt="Current thumbnail" 
                      className="mt-2 h-32 object-cover rounded"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/placeholder.svg'
                      }}
                    />
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="featured"
                      defaultChecked={editingProject?.featured}
                    />
                    <span className="text-sm font-medium">Featured 프로젝트로 표시</span>
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                  >
                    {editingProject ? '수정하기' : '추가하기'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false)
                      setEditingProject(null)
                      setError(null)
                    }}
                    className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400"
                  >
                    취소
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}