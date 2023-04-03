import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/pages/Admin';
import Cards from './components/pages/cards/Cards';
import Footer from './components/common/footer/Footer';
import Home from './components/pages/Home';
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
