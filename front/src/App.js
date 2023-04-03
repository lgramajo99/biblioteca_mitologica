import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import Home from './components/Home';
import Nav from './components/nav/Nav';

function App() {
  return (<>

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
