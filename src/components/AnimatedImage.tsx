
import { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "auto" | "square" | "video" | "portrait";
  priority?: boolean;
  animation?: "fade" | "zoom" | "slide" | "none";
  delay?: number;
}

const AnimatedImage = ({
  src,
  alt,
  className,
  aspectRatio = "auto",
  priority = false,
  animation = "fade",
  delay = 0
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer для проверки, находится ли изображение в поле зрения
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.1
      }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Предзагрузка изображения для предотвращения мигания
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    
    // Проверка, если изображение уже в кэше
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
    
    return () => {
      img.onload = null;
    };
  }, [src]);

  // Определение класса соотношения сторон
  const aspectRatioClass = {
    auto: "aspect-auto",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]"
  }[aspectRatio];

  // Определение класса анимации - применяется только когда изображение в поле зрения
  const animationClass = isInView && isLoaded ? {
    fade: "animate-fade-in",
    zoom: "scale-[0.98] animate-zoom-in",
    slide: "translate-y-4 animate-slide-up",
    none: ""
  }[animation] : "opacity-0";

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-xl will-change-transform",
        aspectRatioClass,
        className
      )}
    >
      {/* Улучшенный скелетон-загрузчик */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200",
          isLoaded ? "opacity-0" : "opacity-100",
          "transition-opacity duration-500 ease-in-out"
        )}
      >
        <div className="absolute inset-0 bg-shimmer animate-[shimmer_2s_infinite]" />
      </div>
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        style={{ 
          animationDelay: `${delay}ms`,
        }}
        className={cn(
          "w-full h-full object-cover backface-hidden",
          animationClass,
          "transition-all duration-700 ease-out"
        )}
      />
      
      {/* Добавление элегантного оверлея при наведении */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default AnimatedImage;
