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
    }, 3000); // Preloader fica visível por 3 segundos

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="preloader-exit">
        <div className="preloader-content">
          <div className="preloader-logo">
            <h1 className="preloader-title">MedGrowth</h1>
            <p className="preloader-subtitle">Crescer Juntos</p>
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
          <h1 className="preloader-title">MedGrowth</h1>
          <p className="preloader-subtitle">Crescer Juntos</p>
        </div>
        <div className="preloader-animation">
          <div className="pulse-circle pulse-1"></div>
          <div className="pulse-circle pulse-2"></div>
          <div className="pulse-circle pulse-3"></div>
        </div>
      </div>
    </div>
  );
}