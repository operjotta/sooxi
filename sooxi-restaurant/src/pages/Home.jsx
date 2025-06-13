import { ArrowRight, Star, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

// Import assets
import sushi1 from '../assets/sushi-1.png';
import sushi2 from '../assets/sushi-2.png';
import sushi3 from '../assets/sushi-3.png';
import sushi4 from '../assets/sushi-4.png';
import sushi5 from '../assets/sushi-5.png';
import sushi6 from '../assets/sushi-6.png';
import popularBg from '../assets/popular_bg.png';
import subscribeBg from '../assets/subscribe_bg.png';
import aboutBg1 from '../assets/about_bg1.png';
import aboutBg2 from '../assets/about_bg2.png';
import japaneseSushi from '../assets/japanese_sushi.png';
import japaneseDrinks from '../assets/japanese_drinks.png';
import userIcon from '../assets/user.png';
import starIcon from '../assets/star.svg';
import arrowRight from '../assets/arrow-right.svg';
import playCircle from '../assets/play-circle.svg';

const Home = () => {
  const featuredSushi = [
    { id: 1, name: 'Salmão Premium', price: 'R$ 28', image: sushi1, rating: 4.9 },
    { id: 2, name: 'Atum Especial', price: 'R$ 32', image: sushi2, rating: 4.8 },
    { id: 3, name: 'Combo Tradicional', price: 'R$ 45', image: sushi3, rating: 4.9 },
    { id: 4, name: 'Sushi Vegano', price: 'R$ 22', image: sushi4, rating: 4.7 },
    { id: 5, name: 'Temaki Especial', price: 'R$ 18', image: sushi5, rating: 4.8 },
    { id: 6, name: 'Combo Executivo', price: 'R$ 38', image: sushi6, rating: 4.9 },
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      comment: 'O melhor sushi de Nova York! Ingredientes frescos e sabor autêntico.',
      rating: 5
    },
    {
      name: 'João Santos',
      comment: 'Ambiente incrível e atendimento excepcional. Recomendo!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      comment: 'Tradição japonesa em cada prato. Uma experiência única!',
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Autêntico Sushi
            <span className="text-red-600 block">Japonês</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Descubra os sabores tradicionais do Japão em Nova York. 
            Ingredientes frescos, técnicas milenares e uma experiência gastronômica inesquecível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                Ver Cardápio
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/restaurantes">
              <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg">
                Encontrar Restaurante
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating Sushi Images */}
        <div className="absolute top-20 left-10 animate-bounce">
          <img src={sushi1} alt="Sushi" className="w-16 h-16 md:w-24 md:h-24 opacity-80" />
        </div>
        <div className="absolute top-32 right-16 animate-bounce delay-300">
          <img src={sushi2} alt="Sushi" className="w-20 h-20 md:w-28 md:h-28 opacity-80" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-700">
          <img src={sushi3} alt="Sushi" className="w-18 h-18 md:w-26 md:h-26 opacity-80" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pratos em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça nossos pratos mais populares, preparados com ingredientes selecionados 
              e técnicas tradicionais japonesas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSushi.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="ml-1 text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">{item.price}</span>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Pedir Agora
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalogo">
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Ver Cardápio Completo
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tradição Japonesa em Nova York
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Há mais de 20 anos, trazemos a autêntica culinária japonesa para Nova York. 
                Nossos chefs especializados utilizam técnicas milenares e ingredientes 
                importados diretamente do Japão para criar uma experiência gastronômica única.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Cada prato é uma obra de arte, preparado com precisão e paixão, 
                respeitando as tradições culinárias que passam de geração em geração.
              </p>
              <Link to="/quem-somos">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Conheça Nossa História
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={japaneseSushi} 
                alt="Sushi Tradicional" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center">
                  <div className="bg-red-600 rounded-full p-2 mr-3">
                    <Star className="text-white fill-current" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">+2000 avaliações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Experiências reais de quem já provou nossa culinária
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-center">
                  <img 
                    src={userIcon} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Cliente Sooxi</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${subscribeBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para uma Experiência Única?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Visite um de nossos restaurantes em Nova York e descubra por que somos 
            referência em culinária japonesa autêntica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/restaurantes">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                Encontrar Restaurante
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/catalogo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                Ver Cardápio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

