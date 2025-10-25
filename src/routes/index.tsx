import { createFileRoute, Link } from '@tanstack/react-router'
import Title from '../components/Title'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center p-8">
        <Title />
        
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Available Articles</h2>
          
        </div>
      </div>
    </div>
  )
}
