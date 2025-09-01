import { Play, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-video-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-medgrowth-cyan/10 to-medgrowth-dark/5 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <Play className="w-16 h-16 mb-4 mx-auto opacity-20" />
            <p className="text-sm">Video Background Placeholder</p>
            <p className="text-xs">Medical + Digital Elements</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
          <span className="text-medgrowth-dark">MedGrowth:</span> Sua Jornada para o<br />
          <span className="text-medgrowth-cyan">Sucesso Digital</span> Começa Aqui
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
          Cansado de pacotes prontos? Nós criamos estratégias personalizadas para você focar no que realmente importa: <strong>seus pacientes</strong>.
        </p>

        <a
          href="https://wa.me/5561996301406"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-medgrowth-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all cta-button shadow-lg"
          data-testid="hero-cta-button"
        >
          <TrendingUp className="w-5 h-5" />
          <span>Solicite Sua Análise Gratuita</span>
        </a>
      </div>
    </section>
  );
}
