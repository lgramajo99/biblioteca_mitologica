import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ArticlePost from './components/admin/ArticlePost'
import Directory from './pages/Directory'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Directory /> */}
      <ArticlePost />
      <Footer />
    </div>
  )
}

export default App
