import { useState } from 'react';
import { Star, ShoppingCart, Filter, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

// Import sushi images
import sushi1 from '../assets/sushi-1.png';
import sushi2 from '../assets/sushi-2.png';
import sushi3 from '../assets/sushi-3.png';
import sushi4 from '../assets/sushi-4.png';
import sushi5 from '../assets/sushi-5.png';
import sushi6 from '../assets/sushi-6.png';
import sushi7 from '../assets/sushi-7.png';
import sushi8 from '../assets/sushi-8.png';
import sushi9 from '../assets/sushi-9.png';
import sushi10 from '../assets/sushi-10.png';
import sushi11 from '../assets/sushi-11.png';
import sushi12 from '../assets/sushi-12.png';
import japaneseDrinks from '../assets/japanese_drinks.png';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'todos', name: 'Todos', count: 24 },
    { id: 'sushi', name: 'Sushi', count: 12 },
    { id: 'sashimi', name: 'Sashimi', count: 8 },
    { id: 'temaki', name: 'Temaki', count: 6 },
    { id: 'combos', name: 'Combos', count: 4 },
    { id: 'bebidas', name: 'Bebidas', count: 8 }
  ];

  const products = [
    {
      id: 1,
      name: 'Sushi de Salmão',
      category: 'sushi',
      price: 28.00,
      originalPrice: 32.00,
      image: sushi1,
      rating: 4.9,
      reviews: 156,
      description: 'Sushi tradicional com salmão fresco e arroz temperado',
      isPopular: true,
      isNew: false
    },
    {
      id: 2,
      name: 'Sushi de Atum',
      category: 'sushi',
      price: 32.00,
      image: sushi2,
      rating: 4.8,
      reviews: 142,
      description: 'Atum vermelho de qualidade premium sobre arroz sushi',
      isPopular: true,
      isNew: false
    },
    {
      id: 3,
      name: 'Combo Tradicional',
      category: 'combos',
      price: 45.00,
      originalPrice: 52.00,
      image: sushi3,
      rating: 4.9,
      reviews: 203,
      description: '8 peças variadas de sushi e 4 sashimis',
      isPopular: true,
      isNew: false
    },
    {
      id: 4,
      name: 'Sushi Vegano',
      category: 'sushi',
      price: 22.00,
      image: sushi4,
      rating: 4.7,
      reviews: 89,
      description: 'Opção vegana com vegetais frescos e tofu',
      isPopular: false,
      isNew: true
    },
    {
      id: 5,
      name: 'Temaki de Salmão',
      category: 'temaki',
      price: 18.00,
      image: sushi5,
      rating: 4.8,
      reviews: 167,
      description: 'Cone de alga nori com salmão e vegetais',
      isPopular: false,
      isNew: false
    },
    {
      id: 6,
      name: 'Combo Executivo',
      category: 'combos',
      price: 38.00,
      originalPrice: 42.00,
      image: sushi6,
      rating: 4.9,
      reviews: 234,
      description: '6 peças de sushi, 3 sashimis e missoshiru',
      isPopular: true,
      isNew: false
    },
    {
      id: 7,
      name: 'Sashimi de Salmão',
      category: 'sashimi',
      price: 35.00,
      image: sushi7,
      rating: 4.8,
      reviews: 178,
      description: '6 fatias de salmão fresco sem arroz',
      isPopular: false,
      isNew: false
    },
    {
      id: 8,
      name: 'Sushi de Camarão',
      category: 'sushi',
      price: 26.00,
      image: sushi8,
      rating: 4.7,
      reviews: 134,
      description: 'Camarão cozido sobre arroz temperado',
      isPopular: false,
      isNew: false
    },
    {
      id: 9,
      name: 'Temaki Especial',
      category: 'temaki',
      price: 24.00,
      image: sushi9,
      rating: 4.8,
      reviews: 156,
      description: 'Temaki premium com ingredientes selecionados',
      isPopular: false,
      isNew: true
    },
    {
      id: 10,
      name: 'Sashimi Misto',
      category: 'sashimi',
      price: 42.00,
      image: sushi10,
      rating: 4.9,
      reviews: 189,
      description: 'Variedade de peixes frescos em fatias',
      isPopular: true,
      isNew: false
    },
    {
      id: 11,
      name: 'Combo Premium',
      category: 'combos',
      price: 65.00,
      originalPrice: 75.00,
      image: sushi11,
      rating: 4.9,
      reviews: 267,
      description: '12 peças de sushi premium e 6 sashimis',
      isPopular: true,
      isNew: false
    },
    {
      id: 12,
      name: 'Sushi de Polvo',
      category: 'sushi',
      price: 30.00,
      image: sushi12,
      rating: 4.6,
      reviews: 98,
      description: 'Polvo cozido tradicionalmente sobre arroz',
      isPopular: false,
      isNew: true
    }
  ];

  const drinks = [
    {
      id: 13,
      name: 'Saquê Premium',
      category: 'bebidas',
      price: 45.00,
      image: japaneseDrinks,
      rating: 4.8,
      reviews: 123,
      description: 'Saquê japonês tradicional premium',
      isPopular: true,
      isNew: false
    },
    {
      id: 14,
      name: 'Chá Verde',
      category: 'bebidas',
      price: 8.00,
      image: japaneseDrinks,
      rating: 4.7,
      reviews: 89,
      description: 'Chá verde japonês tradicional',
      isPopular: false,
      isNew: false
    }
  ];

  const allProducts = [...products, ...drinks];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso Cardápio
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Descubra nossa seleção de pratos autênticos japoneses, 
            preparados com ingredientes frescos e técnicas tradicionais.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar pratos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Filter className="mr-2" size={20} />
                Categorias
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-sm ${
                        selectedCategory === category.id ? 'text-red-200' : 'text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Cart Summary */}
              {cart.length > 0 && (
                <div className="mt-8 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <ShoppingCart className="mr-2" size={18} />
                    Carrinho ({cart.length})
                  </h4>
                  <p className="text-red-600 font-bold text-lg">
                    Total: R$ {getCartTotal().toFixed(2)}
                  </p>
                  <Button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white">
                    Finalizar Pedido
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content - Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'todos' ? 'Todos os Pratos' : 
                 categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isPopular && (
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </span>
                      )}
                      {product.isNew && (
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Novo
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="ml-1 text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-gray-500 mr-2">({product.reviews} avaliações)</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-red-600">
                          R$ {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <Button 
                        onClick={() => addToCart(product)}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Adicionar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Nenhum produto encontrado para "{searchTerm}" na categoria selecionada.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pronto para Fazer Seu Pedido?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Escolha entre delivery, takeout ou visite uma de nossas unidades 
            para desfrutar da experiência completa Sooxi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Pedir Delivery
            </Button>
            <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg">
              Encontrar Restaurante
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;

