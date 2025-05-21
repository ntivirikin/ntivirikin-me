import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <div className="flex flex-col bg-jet min-h-screen">
      {/* Header here, includes Navbar */}

      {/* Home page, later Projects, Blog */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Footer component*/}
      <Footer />
    </div>
  )
}

export default App
