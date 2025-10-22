import { TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Configurações agressivas para NUNCA permitir pause
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('x5-playsinline', '');
    video.setAttribute('x5-video-player-type', 'h5');
    video.setAttribute('x5-video-player-fullscreen', 'false');
    video.muted = true;
    video.loop = true;
    video.defaultMuted = true;
    video.autoplay = true;

    // Função AGRESSIVA para forçar o play
    const forcePlay = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            await playPromise;
          }
        }
      } catch (error) {
        // Tenta novamente em 100ms se falhar
        setTimeout(forcePlay, 100);
      }
    };

    // VIGILANTE PERMANENTE: Verifica a cada 500ms se o vídeo está tocando
    const watchdog = setInterval(() => {
      if (video.paused || video.ended) {
        video.currentTime = video.currentTime > 0 ? video.currentTime : 0;
        forcePlay();
      }
    }, 500);

    // Inicia o vídeo imediatamente
    forcePlay();

    // BLOQUEIA qualquer tentativa de pause
    const preventPause = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      forcePlay();
      return false;
    };

    // Garante loop manual caso o atributo loop falhe
    const handleEnded = () => {
      video.currentTime = 0;
      forcePlay();
    };

    // Retoma quando a aba/janela fica visível novamente
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        forcePlay();
      }
    };

    // Retoma em QUALQUER interação
    const handleInteraction = () => {
      forcePlay();
    };

    // Intersection Observer para forçar play quando visível
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          forcePlay();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(video);

    // Event listeners MÚLTIPLOS para garantir que NUNCA pause
    video.addEventListener('pause', preventPause, true);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('suspend', forcePlay);
    video.addEventListener('abort', forcePlay);
    video.addEventListener('emptied', forcePlay);
    video.addEventListener('stalled', forcePlay);
    video.addEventListener('waiting', forcePlay);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('touchend', handleInteraction);
    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    window.addEventListener('focus', handleInteraction);
    window.addEventListener('blur', forcePlay);

    // Cleanup
    return () => {
      clearInterval(watchdog);
      observer.disconnect();
      video.removeEventListener('pause', preventPause, true);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('suspend', forcePlay);
      video.removeEventListener('abort', forcePlay);
      video.removeEventListener('emptied', forcePlay);
      video.removeEventListener('stalled', forcePlay);
      video.removeEventListener('waiting', forcePlay);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('touchend', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('focus', handleInteraction);
      window.removeEventListener('blur', forcePlay);
    };
  }, []);

  return (
    <section id="home" className="hero-video-bg min-h-screen flex items-center justify-center hero-section-container relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
        data-testid="hero-background-video"
        poster="https://res.cloudinary.com/dnnf92lm4/image/upload/v1759087403/5406015-poster.jpg"
      >
        <source 
          src="https://res.cloudinary.com/dnnf92lm4/video/upload/v1759087403/5406015-uhd_3840_2160_25fps_bzurqu.mp4" 
          type="video/mp4" 
        />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-medgrowth-cyan to-medgrowth-dark"></div>
      </video>
      
      <div className="hero-background-overlay"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight hero-title-entrance text-white" data-testid="hero-title">
          <span className="text-medgrowth-cyan hero-title-part-1">MedGrowth:</span> <span className="hero-title-part-2">Sua Jornada para o<br /></span>
          <span className="text-medgrowth-cyan hero-title-part-3">Sucesso </span><span className="hero-gradient-wrapper hero-title-part-4">
            <span className="hero-gradient-fallback" aria-hidden="true">Digital</span>
            <span className="gradient-text-bright">Digital</span>
          </span> <span className="hero-title-part-5">Começa Aqui</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed font-medium hero-subtitle-entrance" data-testid="hero-subtitle">
          Cansado de pacotes prontos? Nós criamos estratégias personalizadas para você focar no que realmente importa: <strong className="text-medgrowth-cyan">seus pacientes</strong>.
        </p>

        <div className="hero-cta-entrance">
          <a
            href="https://wa.me/5511933719086?text=Olá,%20gostaria%20da%20minha%20análise%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold hover:scale-105 transition-all duration-300"
            data-testid="hero-cta-button"
          >
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
            <span className="whitespace-nowrap">Quero Minha Análise Gratuita</span>
          </a>
        </div>
      </div>
    </section>
  );
}
