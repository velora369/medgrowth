import { TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-video-bg min-h-screen flex items-center justify-center hero-section-container">
      <div className="hero-background-overlay"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight hero-title-entrance" data-testid="hero-title">
          <span className="text-medgrowth-dark hero-title-part-1">MedGrowth:</span> <span className="hero-title-part-2">Sua Jornada para o<br /></span>
          <span className="text-medgrowth-dark hero-title-part-3">Sucesso </span><span className="gradient-text hero-title-part-4">Digital</span> <span className="hero-title-part-5">Começa Aqui</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium hero-subtitle-entrance" data-testid="hero-subtitle">
          Cansado de pacotes prontos? Nós criamos estratégias personalizadas para você focar no que realmente importa: <strong className="text-medgrowth-dark">seus pacientes</strong>.
        </p>

        <div className="hero-cta-entrance">
          <a
            href="https://wa.me/5561996301406"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-on-hover"
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
