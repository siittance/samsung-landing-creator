
import { useRef } from 'react';
import AnimatedImage from './AnimatedImage';
import { Smartphone, Monitor, Tv } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Серия Galaxy S",
    description: "Наши флагманские смартфоны с передовыми технологиями и премиальным дизайном.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    icon: Smartphone,
    features: ["Динамический AMOLED 2X", "Профессиональная камера", "Батарея на весь день", "Подключение 5G"]
  },
  {
    id: 2,
    title: "Умные мониторы",
    description: "Объедините свой мир с интеллектуальными дисплеями, созданными для продуктивности и развлечений.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    icon: Monitor,
    features: ["Разрешение 4K UHD", "Платформа Smart TV", "Адаптивное изображение", "Подключение USB-C"]
  },
  {
    id: 3,
    title: "Neo QLED телевизоры",
    description: "Революционный опыт просмотра с технологией Quantum Matrix и процессором Neo Quantum.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    icon: Tv,
    features: ["Quantum HDR", "Антибликовое покрытие", "Объемный звук", "Игровой хаб"]
  }
];

const ProductSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="products" className="section-padding bg-samsung-lightGray/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-samsung-blue/10 text-samsung-blue rounded-full text-sm font-medium mb-4">
            Наш ассортимент продуктов
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-samsung-black mb-6">
            Передовые технологические продукты
          </h2>
          <p className="text-samsung-gray text-lg">
            Откройте для себя наш инновационный ассортимент продуктов, созданных для улучшения каждого аспекта вашей цифровой жизни.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <AnimatedImage
                  src={product.image}
                  alt={product.title}
                  aspectRatio="auto"
                  animation="zoom"
                  delay={index * 100}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-samsung-blue/10 text-samsung-blue rounded-lg mb-4">
                  <product.icon size={24} />
                </div>
                
                <h3 className="text-xl font-display font-bold text-samsung-black mb-3 group-hover:text-samsung-blue transition-colors duration-200">
                  {product.title}
                </h3>
                
                <p className="text-samsung-gray mb-5">
                  {product.description}
                </p>
                
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-samsung-darkGray">
                      <span className="w-1.5 h-1.5 rounded-full bg-samsung-blue flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
