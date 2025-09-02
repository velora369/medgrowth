import { TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-video-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-medgrowth-cyan rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-medgrowth-dark rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-medgrowth-cyan rounded-full opacity-50 animate-pulse delay-700"></div>
        <div className="absolute bottom-60 right-10 w-2 h-2 bg-medgrowth-dark rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-8 border border-white/20" data-testid="hero-badge">
          <Sparkles className="w-4 h-4 text-medgrowth-cyan" />
          <span className="text-sm font-medium text-medgrowth-dark">Marketing Digital Especializado</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight" data-testid="hero-title">
          <span className="text-medgrowth-dark relative">
            MedGrowth:
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark opacity-60 rounded-full transform scale-x-0 animate-pulse"></div>
          </span>
          <br className="hidden md:block" />
          <span className="text-gray-800"> Sua Jornada para o</span>
          <br />
          <span className="text-medgrowth-cyan relative inline-block">
            Sucesso Digital
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-medgrowth-cyan opacity-60 rounded-full"></div>
          </span>
          <span className="text-gray-800"> Começa Aqui</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium" data-testid="hero-subtitle">
          Cansado de pacotes prontos? Nós criamos estratégias personalizadas para você focar no que realmente importa: <strong className="text-medgrowth-dark">seus pacientes</strong>.
        </p>

        {/* CTA Button with enhanced design */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://wa.me/5561996301406"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg border border-white/20"
            data-testid="hero-cta-button"
          >
            <TrendingUp className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>Solicite Sua Análise Gratuita</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          {/* Secondary CTA */}
          <button
            onClick={() => document.querySelector("#casos-sucesso")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center space-x-2 text-medgrowth-dark hover:text-medgrowth-cyan transition-colors duration-300 font-medium"
            data-testid="hero-secondary-cta"
          >
            <span>Ver Cases de Sucesso</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex items-center justify-center space-x-8 opacity-70">
          <div className="text-sm text-gray-600 font-medium">+50 Médicos Atendidos</div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="text-sm text-gray-600 font-medium">+300% ROI Médio</div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="text-sm text-gray-600 font-medium">Resultados em 30 dias</div>
        </div>
      </div>
    </section>
  );
}
