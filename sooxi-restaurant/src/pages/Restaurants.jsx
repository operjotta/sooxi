import { MapPin, Clock, Phone, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Sooxi Manhattan',
      address: '123 Broadway, Manhattan, NY 10001',
      phone: '(555) 123-4567',
      hours: 'Seg-Dom: 11:00 - 23:00',
      rating: 4.9,
      reviews: 1250,
      image: '/api/placeholder/400/300',
      features: ['Delivery', 'Takeout', 'Reservas', 'Wi-Fi'],
      description: 'Nossa unidade principal no coração de Manhattan, com ambiente elegante e vista para a cidade.'
    },
    {
      id: 2,
      name: 'Sooxi Brooklyn',
      address: '456 Atlantic Ave, Brooklyn, NY 11217',
      phone: '(555) 234-5678',
      hours: 'Seg-Dom: 12:00 - 22:30',
      rating: 4.8,
      reviews: 980,
      image: '/api/placeholder/400/300',
      features: ['Delivery', 'Takeout', 'Estacionamento', 'Wi-Fi'],
      description: 'Ambiente acolhedor em Brooklyn, perfeito para jantares em família e encontros casuais.'
    },
    {
      id: 3,
      name: 'Sooxi Queens',
      address: '789 Northern Blvd, Queens, NY 11372',
      phone: '(555) 345-6789',
      hours: 'Seg-Dom: 11:30 - 22:00',
      rating: 4.7,
      reviews: 756,
      image: '/api/placeholder/400/300',
      features: ['Delivery', 'Takeout', 'Drive-thru', 'Wi-Fi'],
      description: 'Nossa mais nova unidade em Queens, com conceito moderno e atendimento rápido.'
    },
    {
      id: 4,
      name: 'Sooxi Upper East Side',
      address: '321 Lexington Ave, Upper East Side, NY 10016',
      phone: '(555) 456-7890',
      hours: 'Seg-Dom: 11:00 - 23:30',
      rating: 4.9,
      reviews: 1100,
      image: '/api/placeholder/400/300',
      features: ['Delivery', 'Takeout', 'Reservas', 'Valet'],
      description: 'Localização premium no Upper East Side, ideal para ocasiões especiais e eventos.'
    },
    {
      id: 5,
      name: 'Sooxi SoHo',
      address: '654 Spring St, SoHo, NY 10012',
      phone: '(555) 567-8901',
      hours: 'Seg-Dom: 12:00 - 24:00',
      rating: 4.8,
      reviews: 890,
      image: '/api/placeholder/400/300',
      features: ['Delivery', 'Takeout', 'Bar', 'Wi-Fi'],
      description: 'Ambiente trendy no SoHo, com bar de saquê e atmosfera vibrante para a vida noturna.'
    },
    {
      id: 6,
      name: 'Sooxi Financial District',
      address: '987 Wall St, Financial District, NY 10005',
      phone: '(555) 678-9012',
      hours: 'Seg-Sex: 11:00 - 22:00, Sáb-Dom: 12:00 - 23:00',
      rating: 4.6,
      reviews: 654,
      image: '/api/placeholder/400/300',
      features: ['Delivery', 'Takeout', 'Almoço Executivo', 'Wi-Fi'],
      description: 'Perfeito para almoços executivos no Financial District, com menu especial para profissionais.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Restaurantes
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Encontre a unidade Sooxi mais próxima de você em Nova York. 
            Cada restaurante oferece a mesma qualidade excepcional e sabores autênticos.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário Geral</h3>
            <p className="text-gray-600">Segunda a Domingo</p>
            <p className="text-red-600 font-semibold">11:00 - 23:00</p>
            <p className="text-sm text-gray-500 mt-2">*Horários podem variar por unidade</p>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🍣</div>
                    <p className="text-gray-600">Foto em breve</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{restaurant.name}</h3>
                    <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                      <Star className="text-yellow-400 fill-current mr-1" size={16} />
                      <span className="text-sm font-semibold text-gray-900">{restaurant.rating}</span>
                      <span className="text-sm text-gray-600 ml-1">({restaurant.reviews})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{restaurant.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="text-red-600 mr-3" size={18} />
                      <span>{restaurant.address}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="text-red-600 mr-3" size={18} />
                      <span>{restaurant.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="text-red-600 mr-3" size={18} />
                      <span>{restaurant.hours}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Serviços Disponíveis:</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                      Ver no Mapa
                    </Button>
                    <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-50">
                      Ligar Agora
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Informações Gerais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Phone className="text-red-600 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Central de Atendimento</h3>
              <p className="text-gray-600">(555) 000-SOOXI</p>
              <p className="text-sm text-gray-500 mt-2">24h para delivery</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Clock className="text-red-600 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário Padrão</h3>
              <p className="text-gray-600">11:00 - 23:00</p>
              <p className="text-sm text-gray-500 mt-2">Todos os dias</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <MapPin className="text-red-600 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cobertura</h3>
              <p className="text-gray-600">Nova York</p>
              <p className="text-sm text-gray-500 mt-2">6 unidades</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Delivery e Takeout
            </h3>
            <p className="text-gray-600 mb-6">
              Todas as nossas unidades oferecem serviços de delivery e takeout. 
              Faça seu pedido online ou por telefone e desfrute do autêntico sabor japonês 
              no conforto da sua casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Pedir Online
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Ver Cardápio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;

