import { Facebook, Instagram, Twitter } from 'lucide-react';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Sooxi</h3>
            <p className="text-gray-300 mb-4">
              Autêntico restaurante de sushi japonês com múltiplas localizações em Nova York. 
              Oferecemos a melhor experiência culinária japonesa com ingredientes frescos e 
              técnicas tradicionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="/restaurantes" className="text-gray-300 hover:text-red-600 transition-colors">Restaurantes</a></li>
              <li><a href="/quem-somos" className="text-gray-300 hover:text-red-600 transition-colors">Quem Somos</a></li>
              <li><a href="/catalogo" className="text-gray-300 hover:text-red-600 transition-colors">Catálogo</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 (555) 123-4567</p>
              <p>✉️ contato@sooxi.com</p>
              <p>📍 Nova York, NY</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Sooxi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

