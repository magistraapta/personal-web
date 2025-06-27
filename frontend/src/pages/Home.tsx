import Navbar from "../components/Navbar"
const Home = () => {
  return (
    <div className="p-6">
      {/* Navbar */}
        <Navbar />

        {/* Main Component */}
        <div className="mt-5">
          <h1>
              Hello this is my home page
          </h1>
        </div>
        
    </div>
  )
}

export default Home