'use client'

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Edit, Trash2, Upload, X } from 'lucide-react'

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
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    fetchProjects()
  }, [])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
    }
  }

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('order_index', { ascending: true })
    
    if (data) {
      setProjects(data)
    }
    setLoading(false)
  }

  const uploadFile = async (file: File, folder: string) => {
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
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    // 썸네일 업로드
    const thumbnailFile = formData.get('thumbnail') as File
    let thumbnailUrl = editingProject?.thumbnail || ''
    if (thumbnailFile && thumbnailFile.size > 0) {
      thumbnailUrl = await uploadFile(thumbnailFile, 'thumbnails') || ''
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
      videos: editingProject?.videos || []
    }
    
    if (editingProject) {
      await supabase
        .from('projects')
        .update(projectData)
        .eq('id', editingProject.id)
    } else {
      await supabase
        .from('projects')
        .insert([projectData])
    }
    
    setShowForm(false)
    setEditingProject(null)
    fetchProjects()
  }

  const deleteProject = async (id: string) => {
    if (!confirm('정말로 삭제하시겠습니까?')) return
    
    await supabase
      .from('projects')
      .delete()
      .eq('id', id)
    
    fetchProjects()
  }

  if (loading) return <div>로딩 중...</div>

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
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
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
                  }}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

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
                    defaultValue={editingProject?.category}
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
                      src={editingProject.thumbnail} 
                      alt="Current thumbnail" 
                      className="mt-2 h-32 object-cover rounded"
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