
import { useRef, useState, useEffect } from 'react';
import AnimatedImage from './AnimatedImage';
import { Check } from 'lucide-react';

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      id: 0,
      title: "Инновационный дизайн",
      description: "Элегантная, современная эстетика в сочетании с эргономичными принципами дизайна для продуктов, которые выглядят так же хорошо, как и работают.",
      benefits: [
        "Премиальные материалы и мастерство",
        "Дизайн, ориентированный на пользователя",
        "Отмеченный наградами промышленный дизайн",
        "Экологичные производственные практики"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 1,
      title: "Превосходная производительность",
      description: "Передовые процессоры и компоненты обеспечивают исключительную скорость и надежность для всех ваших цифровых потребностей.",
      benefits: [
        "Современная вычислительная мощность",
        "Продвинутое управление температурой",
        "Оптимизированная энергоэффективность",
        "Производительность с ИИ-улучшениями"
      ],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    },
    {
      id: 2,
      title: "Интеграция экосистемы",
      description: "Бесшовное соединение между устройствами создает единый опыт во всей вашей цифровой среде.",
      benefits: [
        "Синхронизация между устройствами",
        "Функции универсального управления",
        "Автоматическое обнаружение устройств",
        "Общий доступ к контенту и настройкам"
      ],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const activeFeature = features[activeTab];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-64 w-[30rem] h-[30rem] rounded-full bg-samsung-blue/5 -z-10" />
        <div className="absolute bottom-1/4 -right-64 w-[40rem] h-[40rem] rounded-full bg-samsung-lightBlue/5 -z-10" />
      </div>

      <div ref={sectionRef} className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-samsung-blue/10 text-samsung-blue rounded-full text-sm font-medium mb-4">
            Почему выбирают нас
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-samsung-black mb-6">
            Передовые функции для современной жизни
          </h2>
          <p className="text-samsung-gray text-lg">
            Наши технологии созданы для улучшения вашего повседневного опыта с помощью продуманных инноваций.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              {/* Feature Tabs */}
              <div className="flex flex-col space-y-4 mb-8">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(index)}
                    className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-samsung-blue text-white' 
                        : 'bg-gray-50 text-samsung-darkGray hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">{feature.title}</span>
                  </button>
                ))}
              </div>
              
              {/* Feature Content */}
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h3 className="text-2xl font-display font-bold text-samsung-black mb-4">
                  {activeFeature.title}
                </h3>
                <p className="text-samsung-gray mb-6">
                  {activeFeature.description}
                </p>
                
                <ul className="space-y-3">
                  {activeFeature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-samsung-blue/10 flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-samsung-blue" />
                      </span>
                      <span className="text-samsung-darkGray">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative perspective-1000">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-700 backface-hidden ${
                    activeTab === index 
                      ? 'opacity-100 translate-z-0 rotate-y-0' 
                      : 'opacity-0 -translate-z-10 rotate-y-12 pointer-events-none'
                  }`}
                >
                  <AnimatedImage
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-3xl shadow-xl"
                    aspectRatio="video"
                    animation="none"
                  />
                </div>
              ))}
              
              {/* Static display for first load before JS runs */}
              <div className="relative lg:hidden">
                <AnimatedImage
                  src={features[0].image}
                  alt={features[0].title}
                  className="rounded-3xl shadow-xl"
                  aspectRatio="video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
