import { Routes, Route, useLocation } from 'react-router-dom';
import ArticleContainer from './pages/ArticleContainer';
import Biblioteca from './pages/Biblioteca';
import Calendar from './components/dashboard/pages/Calendar';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ListCategories from './components/dashboard/pages/ListCategories';
import ListPost from './components/dashboard/pages/ListPost';
import PostEditor from './components/dashboard/pages/PostEditor';
import RoutesIndex from './routes';

function App() {

  return (
    <main className='bg-gray-100 dark:bg-darkAcenture dark:text-darkTxt'>
      <RoutesIndex />
    </main>
  );
}

export default App;