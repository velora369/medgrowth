import { TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-video-bg min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight fade-in-up" data-testid="hero-title">
          <span className="text-medgrowth-dark">MedGrowth:</span> Sua Jornada para o<br />
          <span className="text-medgrowth-cyan bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark bg-clip-text text-transparent">Sucesso Digital</span> Começa Aqui
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed fade-in-up-delay-1 font-medium" data-testid="hero-subtitle">
          Cansado de pacotes prontos? Nós criamos estratégias personalizadas para você focar no que realmente importa: <strong className="text-medgrowth-dark">seus pacientes</strong>.
        </p>

        <div className="fade-in-up-delay-2">
          <a
            href="https://wa.me/5561996301406"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-on-hover"
            data-testid="hero-cta-button"
          >
            <TrendingUp className="w-6 h-6" />
            <span>Quero Minha Análise Gratuita</span>
          </a>
        </div>
      </div>
    </section>
  );
}
