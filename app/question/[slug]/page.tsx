import { notFound } from 'next/navigation'
import { getProjectBySlug, getRelatedProjects, getPreviousAndNextProjects } from '@/lib/data/projects'
import ProjectPageClient from './ProjectPageClient'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = getProjectBySlug(resolvedParams.slug)
  
  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(resolvedParams.slug, project.category)
  const { previous, next } = getPreviousAndNextProjects(resolvedParams.slug)

  return (
    <ProjectPageClient 
      project={project}
      relatedProjects={relatedProjects}
      previous={previous}
      next={next}
    />
  )
}