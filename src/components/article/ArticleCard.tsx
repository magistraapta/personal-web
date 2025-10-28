import { Link } from '@tanstack/react-router'

export function ArticleCard({ title, slug }: { title: string, slug: string }) {
  return (
    <div className='py-4 '>
        <Link to="/articles/$slug" params={{ slug: slug }}>
            <div className='flex gap-y-2 items-center'>
                <p>📄</p> 
                <h1 className='hover:underline text-2xl font-bold'>{title}</h1>
            </div>
        </Link>
      
    </div>
  )
}
export default ArticleCard