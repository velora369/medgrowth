import { TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Configurações para garantir loop contínuo
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.muted = true;
    video.loop = true;

    // Função para forçar o play
    const playVideo = async () => {
      try {
        video.muted = true; // Garante que está muted antes de dar play
        await video.play();
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    };

    // Inicia o vídeo
    playVideo();

    // Garante loop manual caso o atributo loop falhe
    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    // Retoma o vídeo se pausar (exceto se for manualmente pausado)
    const handlePause = () => {
      // Pequeno delay para evitar conflito com o evento ended
      setTimeout(() => {
        if (video.paused && !video.ended && document.visibilityState === 'visible') {
          playVideo();
        }
      }, 100);
    };

    // Retoma quando a aba/janela fica visível novamente
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        playVideo();
      }
    };

    // Retoma em eventos de toque/click (necessário em alguns mobiles)
    const handleInteraction = () => {
      if (video.paused) {
        playVideo();
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('pause', handlePause);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
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
