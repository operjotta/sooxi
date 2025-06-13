import { Users, Award, Heart, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

// Import assets
import aboutBg1 from '../assets/about_bg1.png';
import aboutBg2 from '../assets/about_bg2.png';
import japaneseSushi from '../assets/japanese_sushi.png';
import japaneseDrinks from '../assets/japanese_drinks.png';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Paixão pela Tradição',
      description: 'Cada prato é preparado com amor e respeito às técnicas milenares japonesas, preservando sabores autênticos.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas ingredientes da mais alta qualidade, muitos importados diretamente do Japão.'
    },
    {
      icon: Users,
      title: 'Experiência Familiar',
      description: 'Criamos um ambiente acolhedor onde famílias e amigos podem compartilhar momentos especiais.'
    },
    {
      icon: Clock,
      title: 'Tradição Centenária',
      description: 'Nossas receitas são baseadas em técnicas que passam de geração em geração há mais de 100 anos.'
    }
  ];

  const timeline = [
    {
      year: '2000',
      title: 'Fundação',
      description: 'Abertura do primeiro restaurante Sooxi em Manhattan, trazendo a autêntica culinária japonesa para Nova York.'
    },
    {
      year: '2005',
      title: 'Expansão',
      description: 'Inauguração da segunda unidade em Brooklyn, consolidando nossa presença na cidade.'
    },
    {
      year: '2010',
      title: 'Reconhecimento',
      description: 'Recebemos o prêmio de "Melhor Restaurante Japonês" do New York Food Awards.'
    },
    {
      year: '2015',
      title: 'Crescimento',
      description: 'Abertura de mais três unidades em Queens, Upper East Side e SoHo.'
    },
    {
      year: '2020',
      title: 'Inovação',
      description: 'Lançamento do serviço de delivery premium e implementação de tecnologias sustentáveis.'
    },
    {
      year: '2024',
      title: 'Presente',
      description: 'Seis unidades em operação, servindo mais de 100.000 clientes satisfeitos anualmente.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg1})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nossa História
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Mais de duas décadas levando a autêntica tradição japonesa 
            para o coração de Nova York
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Origem do Sooxi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Tudo começou em 2000, quando o Chef Hiroshi Tanaka decidiu trazer 
                sua paixão pela culinária japonesa tradicional para Nova York. 
                Nascido em Tóquio e treinado pelos mestres sushimen mais respeitados do Japão, 
                Hiroshi sonhava em compartilhar os sabores autênticos de sua terra natal 
                com o mundo ocidental.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                O nome "Sooxi" deriva da palavra japonesa "Sushi" combinada com "Oishi" 
                (delicioso), representando nossa missão de servir o sushi mais saboroso 
                e autêntico fora do Japão. Cada prato é uma homenagem às técnicas 
                milenares e aos ingredientes de qualidade excepcional.
              </p>
              <p className="text-lg text-gray-600">
                Hoje, com seis unidades espalhadas por Nova York, continuamos fiéis 
                à nossa filosofia original: respeitar a tradição, valorizar a qualidade 
                e proporcionar experiências gastronômicas inesquecíveis.
              </p>
            </div>
            <div className="relative">
              <img 
                src={japaneseSushi} 
                alt="Sushi Tradicional" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold">24+</h3>
                <p className="text-red-100">Anos de Tradição</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa paixão pela culinária japonesa 
              e nosso compromisso com a excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sushi Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={japaneseDrinks} 
                alt="Cultura Japonesa" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900">Ingredientes Importados</h3>
                <p className="text-gray-600">Direto do Japão</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Arte do Sushi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                O sushi é muito mais que uma refeição - é uma forma de arte que 
                combina técnica, estética e filosofia. Originário do século VIII, 
                o sushi evoluiu de um método de preservação de peixe para uma das 
                culinárias mais refinadas do mundo.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossos chefs passam anos aperfeiçoando suas habilidades, aprendendo 
                não apenas as técnicas de corte e preparação, mas também a arte da 
                apresentação e o equilíbrio perfeito de sabores. Cada peça de sushi 
                é moldada à mão com precisão milimétrica.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                No Sooxi, honramos essa tradição milenar, utilizando apenas os 
                ingredientes mais frescos e seguindo rigorosamente os métodos 
                tradicionais japoneses de preparação.
              </p>
              <Link to="/catalogo">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Conheça Nosso Cardápio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600">
              Marcos importantes na história do Sooxi
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.year.slice(-2)}
                  </div>
                  <div className="ml-8 bg-white rounded-2xl p-6 shadow-lg flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${aboutBg2})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Venha experimentar a autêntica culinária japonesa e descubra 
            por que somos a escolha de milhares de nova-iorquinos há mais de duas décadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/restaurantes">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                Encontrar Restaurante
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

export default About;

