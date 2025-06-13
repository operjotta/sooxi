import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import menuIcon from '../assets/menu.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-red-600">
              Sooxi
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/restaurantes" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Restaurantes
              </Link>
              <Link 
                to="/quem-somos" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Quem Somos
              </Link>
              <Link 
                to="/catalogo" 
                className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Catálogo
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/restaurantes" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Restaurantes
              </Link>
              <Link 
                to="/quem-somos" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Quem Somos
              </Link>
              <Link 
                to="/catalogo" 
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Catálogo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

