import { Link } from '@tanstack/react-router'

export function ArticleCard({ title, slug }: { title: string, slug: string }) {
  return (
    <div className='py-3 sm:py-4'>
        <Link to="/articles/$slug" params={{ slug: slug }}>
            <div className='flex gap-x-2 gap-y-2 items-center'>
                <p className='text-lg sm:text-xl'>📄</p> 
                <h1 className='hover:underline text-xl sm:text-2xl font-bold leading-tight'>{title}</h1>
            </div>
        </Link>
      
    </div>
  )
}
export default ArticleCard