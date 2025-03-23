
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedImage from './AnimatedImage';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
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
    <section 
      ref={sectionRef}
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-samsung-lightGray/50 to-white/50 -z-10" />
      
      {/* Circular light effect */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-samsung-lightBlue/10 blur-3xl -z-10 animate-pulse-soft" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span 
              className={`inline-block py-1 px-3 bg-samsung-blue/10 text-samsung-blue rounded-full text-sm font-medium mb-6 transition-all duration-700 delay-[100ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Next Generation Technology
            </span>
            
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight text-samsung-black mb-6 transition-all duration-700 delay-[200ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Innovation at <br />Your Fingertips
            </h1>
            
            <p 
              className={`text-lg text-samsung-gray max-w-xl mb-8 transition-all duration-700 delay-[300ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Experience the future today with cutting-edge technology that transforms the way you live, work, and play. Discover what's possible.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <a 
                href="#products" 
                className="px-8 py-4 bg-samsung-blue text-white font-medium rounded-full hover:bg-samsung-blue/90 transition-all duration-200 text-center flex items-center justify-center gap-2 group"
              >
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              
              <a 
                href="#features" 
                className="px-8 py-4 border border-samsung-blue/30 text-samsung-blue font-medium rounded-full hover:bg-samsung-blue/5 transition-all duration-200 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 perspective-1000">
            <div 
              className={`preserve-3d transition-all duration-700 delay-[200ms] ${isVisible ? 'opacity-100 translate-y-0 rotate-y-0' : 'opacity-0 translate-y-8 rotate-y-12'}`}
            >
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
                alt="Samsung smartphone with innovative features" 
                className="rounded-3xl shadow-2xl"
                aspectRatio="video"
                priority={true}
                animation="none"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 shadow-lg max-w-xs animate-float">
                <h3 className="text-samsung-black font-semibold mb-2">Ultra HD Display</h3>
                <p className="text-samsung-gray text-sm">Experience true-to-life colors and incredible detail with our cutting-edge display technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
