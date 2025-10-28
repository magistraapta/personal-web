import { createFileRoute} from '@tanstack/react-router'
import { getArticles } from '@/utils/getArticle'
import { ArticleCard } from '@/components/article/ArticleCard'

export const Route = createFileRoute('/articles/')({
  component: ArticlesListComponent,
  loader: () => getArticles()
})

function ArticlesListComponent() {
    const articles = Route.useLoaderData()
    return (
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Available Articles</h1>
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