import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

export default function HeroSection() {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Sequência de animações com timing otimizado para impacto
    const timer1 = setTimeout(() => setShowTitle(true), 300);
    const timer2 = setTimeout(() => setShowSubtitle(true), 1200);
    const timer3 = setTimeout(() => setShowCTA(true), 2000);
    const timer4 = setTimeout(() => setTypingComplete(true), 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section id="home" className="hero-video-bg min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Título com efeito de digitação e entrada dinâmica */}
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            showTitle ? 'hero-title-entrance' : 'opacity-0 transform translate-y-10 scale-95'
          }`}
          data-testid="hero-title"
        >
          <span className="text-medgrowth-dark typing-effect" style={{ '--chars': '11' } as any}>
            MedGrowth:
          </span>{' '}
          <span className="inline-block">
            <span className="hero-word-reveal" style={{ '--delay': '0.5s' } as any}>Sua</span>{' '}
            <span className="hero-word-reveal" style={{ '--delay': '0.7s' } as any}>Jornada</span>{' '}
            <span className="hero-word-reveal" style={{ '--delay': '0.9s' } as any}>para</span>{' '}
            <span className="hero-word-reveal" style={{ '--delay': '1.1s' } as any}>o</span>
          </span>
          <br />
          <span className={`text-medgrowth-cyan bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark bg-clip-text text-transparent hero-gradient-reveal ${
            typingComplete ? 'animate-gradient-reveal' : ''
          }`}>
            Sucesso Digital
          </span>{' '}
          <span className="hero-word-reveal" style={{ '--delay': '1.5s' } as any}>Começa Aqui</span>
        </h1>

        {/* Subtitle com efeito de slide-up melhorado */}
        <p 
          className={`text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium transition-all duration-800 ${
            showSubtitle ? 'hero-subtitle-entrance' : 'opacity-0 transform translate-y-8 blur-sm'
          }`}
          data-testid="hero-subtitle"
        >
          <span className="subtitle-word" style={{ '--word-delay': '0s' } as any}>Cansado</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.1s' } as any}>de</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.2s' } as any}>pacotes</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.3s' } as any}>prontos?</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.4s' } as any}>Nós</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.5s' } as any}>criamos</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.6s' } as any}>estratégias</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.7s' } as any}>personalizadas</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.8s' } as any}>para</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '0.9s' } as any}>você</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '1.0s' } as any}>focar</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '1.1s' } as any}>no</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '1.2s' } as any}>que</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '1.3s' } as any}>realmente</span>{' '}
          <span className="subtitle-word" style={{ '--word-delay': '1.4s' } as any}>importa:</span>{' '}
          <strong className="text-medgrowth-dark subtitle-word highlight-word" style={{ '--word-delay': '1.5s' } as any}>
            seus pacientes
          </strong>.
        </p>

        {/* CTA Button com animação de montagem */}
        <div className={`transition-all duration-1000 ${
          showCTA ? 'hero-cta-entrance' : 'opacity-0 transform translate-y-12 scale-90'
        }`}>
          <a
            href="https://wa.me/5561996301406"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-10 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-on-hover hero-cta-button"
            data-testid="hero-cta-button"
          >
            <TrendingUp className="w-6 h-6 hero-icon-entrance" />
            <span className="hero-button-text">Quero Minha Análise Gratuita</span>
          </a>
        </div>
      </div>
    </section>
  );
}
