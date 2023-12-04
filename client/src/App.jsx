import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Directory from './pages/Directory'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar />
      <Home />

      <Directory />
      <Footer />
    </div>
  )
}

export default App
