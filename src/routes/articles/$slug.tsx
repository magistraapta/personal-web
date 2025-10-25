import MarkdownRenderer from '@/components/Markdown'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/$slug')({
  component: ArticlePage,
})


function ArticlePage() {
    const {slug} = Route.useParams()
    const markdownPath = `/src/markdown/${slug}.md`
    return (
        <MarkdownRenderer filePath={markdownPath} />
    )
}
