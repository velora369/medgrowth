import { TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-video-bg min-h-screen flex items-center justify-center hero-section-container relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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

        
      </div>
    </section>
  );
}
