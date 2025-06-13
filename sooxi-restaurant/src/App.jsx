import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import About from './pages/About';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurantes" element={<Restaurants />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/catalogo" element={<Catalog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

