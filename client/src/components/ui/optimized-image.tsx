import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  placeholder?: boolean;
  fallback?: string;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  aspectRatio,
  placeholder = true,
  fallback,
  onClick,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1 
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const containerStyle = {
    ...(aspectRatio && { aspectRatio }),
    ...(width && height && { width: `${width}px`, height: `${height}px` })
  };

  if (hasError && fallback) {
    return (
      <img
        src={fallback}
        alt={alt}
        className={className}
        style={containerStyle}
        width={width}
        height={height}
      />
    );
  }

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={containerStyle}
      onClick={onClick}
    >
      {/* Placeholder durante carregamento */}
      {placeholder && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={containerStyle}
        />
      )}
      
      {/* Imagem real */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`
            transition-opacity duration-300 
            ${isLoaded ? 'opacity-100' : 'opacity-0'} 
            ${className}
          `}
          style={containerStyle}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
}