import './App.css'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ArticlePost from './components/admin/ArticlePost'
import Directory from './pages/Directory'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage';
import ArticleContainer from './pages/ArticleContainer';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/admin/Dashboard';
import Login from './components/admin/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/article" element={<ArticlePost />} />
        <Route path='/articulo-prueba' element={<ArticleContainer />} />
        <Route path='/biblioteca' element={<Biblioteca />} />
        <Route path='/administracion' element={<Dashboard />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App
