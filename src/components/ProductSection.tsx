
import { useRef } from 'react';
import AnimatedImage from './AnimatedImage';
import { Smartphone, Monitor, Tv } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Galaxy S Series",
    description: "Our flagship smartphones with cutting-edge technology and premium design.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    icon: Smartphone,
    features: ["Dynamic AMOLED 2X", "Pro-grade Camera", "All-day Battery", "5G Connectivity"]
  },
  {
    id: 2,
    title: "Smart Monitors",
    description: "Connect your world with intelligent displays designed for productivity and entertainment.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    icon: Monitor,
    features: ["4K UHD Resolution", "Smart TV Platform", "Adaptive Picture", "USB-C Connectivity"]
  },
  {
    id: 3,
    title: "Neo QLED TVs",
    description: "Revolutionary viewing experience with Quantum Matrix Technology and Neo Quantum Processor.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    icon: Tv,
    features: ["Quantum HDR", "Anti-Reflection", "Object Tracking Sound", "Gaming Hub"]
  }
];

const ProductSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="products" className="section-padding bg-samsung-lightGray/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-samsung-blue/10 text-samsung-blue rounded-full text-sm font-medium mb-4">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-samsung-black mb-6">
            Cutting-edge Technology Products
          </h2>
          <p className="text-samsung-gray text-lg">
            Discover our innovative product lineup designed to enhance every aspect of your digital life.
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
