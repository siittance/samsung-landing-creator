
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

  // Используем Intersection Observer для определения видимости
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
        rootMargin: '200px',  // Начинаем загрузку заранее
        threshold: 0.1
      }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Улучшенная предзагрузка изображения
  useEffect(() => {
    if (!isInView) return; // Начинаем загрузку только когда элемент в зоне видимости
    
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
  }, [src, isInView]);

  // Определение класса соотношения сторон
  const aspectRatioClass = {
    auto: "aspect-auto",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]"
  }[aspectRatio];

  // Определение класса анимации - применяется только когда изображение в поле зрения и загружено
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
      {/* Улучшенный скелетон-загрузчик с анимацией */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
          isLoaded ? "opacity-0" : "opacity-100",
          "transition-opacity duration-700 ease-in-out"
        )}
      >
        <div className="absolute inset-0 bg-shimmer animate-[shimmer_2s_infinite]" />
      </div>
      
      {/* Добавление элегантного оверлея при наведении */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        style={{ 
          animationDelay: `${delay}ms`,
          transform: isLoaded ? 'none' : 'scale(1.05)',
        }}
        className={cn(
          "w-full h-full object-cover backface-hidden",
          animationClass,
          "transition-all duration-1000 ease-out"
        )}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Добавление декоративного элемента на углу изображения */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Декоративный индикатор в углу для премиум-ощущения */}
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-samsung-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-xl" />
    </div>
  );
};

export default AnimatedImage;
