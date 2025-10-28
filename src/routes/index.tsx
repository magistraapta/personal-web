import { createFileRoute} from '@tanstack/react-router'
import Title from '../components/Title'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-4">
          <Title />
      </div>
    </div>
  )
}
