
import { useState, useRef, useEffect } from 'react';

const specs = [
  {
    category: "Display",
    items: [
      { name: "Technology", value: "Dynamic AMOLED 2X" },
      { name: "Size", value: "6.8 inches" },
      { name: "Resolution", value: "3200 x 1440 pixels" },
      { name: "Refresh Rate", value: "120Hz adaptive" },
      { name: "Protection", value: "Corning® Gorilla® Glass Victus®" }
    ]
  },
  {
    category: "Performance",
    items: [
      { name: "Processor", value: "4nm Octa-core Processor" },
      { name: "RAM", value: "12GB LPDDR5" },
      { name: "Storage", value: "256GB / 512GB / 1TB" },
      { name: "OS", value: "Android 13" },
      { name: "GPU", value: "Adreno 740" }
    ]
  },
  {
    category: "Camera",
    items: [
      { name: "Main Camera", value: "108MP, f/1.8, OIS" },
      { name: "Ultra Wide", value: "12MP, f/2.2, 120° FOV" },
      { name: "Telephoto", value: "10MP, 3x optical zoom, OIS" },
      { name: "Front Camera", value: "40MP, f/2.2, autofocus" },
      { name: "Video", value: "8K@24fps, 4K@60fps, HDR10+" }
    ]
  },
  {
    category: "Battery",
    items: [
      { name: "Capacity", value: "5000mAh" },
      { name: "Fast Charging", value: "45W wired, 15W wireless" },
      { name: "Reverse Charging", value: "4.5W" },
      { name: "Technology", value: "Intelligent Battery Management" },
      { name: "Battery Life", value: "Up to 24 hours" }
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
            Technical Details
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Precision Engineering Specifications
          </h2>
          <p className="text-gray-300 text-lg">
            Explore the advanced specifications that power our flagship products.
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
