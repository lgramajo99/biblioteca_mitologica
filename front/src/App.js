import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Cards from './components/cards/Cards';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';


function App() {
  return (<>
    <h1> Pagina App</h1>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' caseSensitive element={<Admin />} />
      <Route path='/cards' caseSensitive element={<Cards />} />

    </Routes>
    <Footer />
  </>);
}

export default App;
