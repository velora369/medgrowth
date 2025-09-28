import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Aguarda a animação de saída
    }, 2000); // Preloader fica visível por 2 segundos

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="preloader-exit">
        <div className="preloader-content">
          <div className="preloader-logo">
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo-principal-sem-fundo.webp" 
              alt="MedGrowth Logo" 
              className="preloader-logo-image"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preloader-container">
      <div className="preloader-background"></div>
      <div className="preloader-content">
        <div className="preloader-logo">
          <img 
            src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo-principal-sem-fundo.webp" 
            alt="MedGrowth Logo" 
            className="preloader-logo-image"
          />
        </div>
        <div className="preloader-loading-bar">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}