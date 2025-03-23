
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

  useEffect(() => {
    if (!imgRef.current) return;
    
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
    
    observer.observe(imgRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle preloaded images
  useEffect(() => {
    if (!imgRef.current) return;
    if (imgRef.current.complete) setIsLoaded(true);
  }, []);

  // Determine aspect ratio class
  const aspectRatioClass = {
    auto: "aspect-auto",
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]"
  }[aspectRatio];

  // Determine animation class - removed animation for first load to avoid flickering
  const animationClass = isInView ? {
    fade: "animate-fade-in",
    zoom: "scale-95 animate-zoom-in",
    slide: "translate-y-4 animate-slide-up",
    none: ""
  }[animation] : "";

  return (
    <div 
      className={cn(
        "relative overflow-hidden will-change-transform",
        aspectRatioClass,
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse-soft",
          isLoaded ? "opacity-0" : "opacity-100",
          "transition-opacity duration-300"
        )}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        style={{ 
          animationDelay: `${delay}ms`,
          animationPlayState: isInView ? "running" : "paused" 
        }}
        className={cn(
          "w-full h-full object-cover backface-hidden",
          isLoaded ? "opacity-100" : "opacity-0", 
          animationClass,
          "transition-opacity duration-300"
        )}
      />
    </div>
  );
};

export default AnimatedImage;
