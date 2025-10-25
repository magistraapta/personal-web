import { createFileRoute, Link } from '@tanstack/react-router'
import { getArticles } from '@/utils/getArticle'
import { ArticleCard } from '@/components/ArticleCard'

export const Route = createFileRoute('/articles/')({
  component: ArticlesListComponent,
  loader: () => getArticles()
})

function ArticlesListComponent() {
    const articles = Route.useLoaderData()
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Available Articles</h1>
            <div>
                {
                    articles.map((article) => (
                        <ArticleCard key={article.title} title={article.title} slug={article.slug} />
                    ))
                }
            </div>
        </div>
    )
}       