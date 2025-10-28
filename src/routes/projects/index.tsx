import { createFileRoute } from '@tanstack/react-router'
import ProjectCard from '@/components/project/ProjectCard'
import { projectsDummy } from '@/data/ProjectDummy'

export const Route = createFileRoute('/projects/')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-4 sm:py-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projectsDummy.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </div>
  )
}

