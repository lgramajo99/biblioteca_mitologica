import './App.css'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ArticlePost from './components/admin/ArticlePost'
import Directory from './pages/Directory'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/article" element={<ArticlePost />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App
