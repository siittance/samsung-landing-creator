
import { useState, useRef, useEffect } from 'react';

const specs = [
  {
    category: "Дисплей",
    items: [
      { name: "Технология", value: "Dynamic AMOLED 2X" },
      { name: "Размер", value: "6.8 дюймов" },
      { name: "Разрешение", value: "3200 x 1440 пикселей" },
      { name: "Частота обновления", value: "120Гц адаптивная" },
      { name: "Защита", value: "Corning® Gorilla® Glass Victus®" }
    ]
  },
  {
    category: "Производительность",
    items: [
      { name: "Процессор", value: "4нм восьмиядерный процессор" },
      { name: "ОЗУ", value: "12ГБ LPDDR5" },
      { name: "Хранилище", value: "256ГБ / 512ГБ / 1ТБ" },
      { name: "ОС", value: "Android 13" },
      { name: "GPU", value: "Adreno 740" }
    ]
  },
  {
    category: "Камера",
    items: [
      { name: "Основная камера", value: "108МП, f/1.8, OIS" },
      { name: "Сверхширокоугольная", value: "12МП, f/2.2, угол 120°" },
      { name: "Телефото", value: "10МП, 3x оптический зум, OIS" },
      { name: "Фронтальная камера", value: "40МП, f/2.2, автофокус" },
      { name: "Видео", value: "8K@24fps, 4K@60fps, HDR10+" }
    ]
  },
  {
    category: "Батарея",
    items: [
      { name: "Ёмкость", value: "5000мАч" },
      { name: "Быстрая зарядка", value: "45Вт проводная, 15Вт беспроводная" },
      { name: "Обратная зарядка", value: "4.5Вт" },
      { name: "Технология", value: "Интеллектуальное управление батареей" },
      { name: "Время работы", value: "До 24 часов" }
    ]
  }
];

const SpecsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="specs" className="section-padding bg-samsung-black text-white relative overflow-hidden">
      {/* Accent background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-samsung-blue/10 to-transparent opacity-50" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-samsung-blue/10 blur-3xl" />
        <div className="absolute top-32 -right-32 w-64 h-64 rounded-full bg-samsung-blue/10 blur-3xl" />
      </div>

      <div ref={sectionRef} className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Технические детали
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Точные инженерные характеристики
          </h2>
          <p className="text-gray-300 text-lg">
            Изучите продвинутые характеристики, которые используются в наших флагманских продуктах.
          </p>
        </div>

        <div className="glass-dark rounded-3xl p-6 md:p-10 backdrop-blur-md max-w-4xl mx-auto">
          {/* Category selector */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {specs.map((spec, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === index 
                    ? 'bg-samsung-blue text-white' 
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {spec.category}
              </button>
            ))}
          </div>

          {/* Specs table */}
          <div className="overflow-hidden">
            <div 
              className={`transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="space-y-4">
                {specs[activeCategory].items.map((item, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b border-white/10 last:border-0"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      animation: isVisible ? `fade-in 0.5s ease-out forwards ${index * 50}ms` : 'none'
                    }}
                  >
                    <div className="font-medium text-white/70">{item.name}</div>
                    <div className="font-display text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
