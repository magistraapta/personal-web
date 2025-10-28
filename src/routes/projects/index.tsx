import { createFileRoute } from '@tanstack/react-router'
import ProjectCard from '@/components/project/ProjectCard'
import { projectsDummy } from '@/data/ProjectDummy'

export const Route = createFileRoute('/projects/')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  return (
    <div>
      <h1 className="text-3xl font-bold py-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsDummy.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </div>
  )
}

