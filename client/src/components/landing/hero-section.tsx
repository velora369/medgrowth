import { heroStats } from "@/lib/landing-data";
import { MgButton } from "./buttons";
import { Reveal } from "./ui";

export default function LandingHero() {
  return (
    <section id="hero" className="mg-hero">
      <div className="mg-hero-grid" aria-hidden="true">
        <span /><span /><span /><span />
      </div>
      <div className="mg-container mg-hero-inner">
        <div className="mg-hero-copy">
          <Reveal>
            <p className="mg-eyebrow">Marketing médico, conteúdo e tecnologia</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mg-hero-title">
              Faça sua autoridade dentro do consultório ser reconhecida também no digital.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mg-hero-text">
              Posicionamento estratégico, aquisição de pacientes e inteligência artificial aplicada à medicina — com quem entende a rotina clínica.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mg-hero-actions">
              <MgButton whatsappMessage="Olá! Gostaria de solicitar um diagnóstico estratégico.">
                Solicitar diagnóstico
              </MgButton>
              <MgButton variant="ghost" href="#historia">
                Conhecer nossa história
              </MgButton>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mg-hero-stats">
              {heroStats.map((stat) => (
                <div key={stat.label} className="mg-hero-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="mg-hero-cta-card">
          <h3>Diagnóstico estratégico</h3>
          <p>
            Conte seu cenário e nosso time analisa posicionamento, canais e próximos passos — sem compromisso inicial.
          </p>
          <ul className="mg-hero-cta-list">
            <li>Análise de presença digital</li>
            <li>Recomendações personalizadas</li>
            <li>Resposta via WhatsApp</li>
          </ul>
          <MgButton className="mg-btn--block" whatsappMessage="Olá! Quero solicitar meu diagnóstico estratégico com a Med Growth.">
            Falar com a Med Growth
          </MgButton>
        </Reveal>
      </div>
    </section>
  );
}
