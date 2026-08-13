import { MgButton } from "./buttons";
import { Reveal, SectionContainer } from "./ui";

export default function LandingFinalCta() {
  return (
    <SectionContainer id="contato" dark className="mg-final-cta">
      <div className="mg-cta-glow" aria-hidden="true" />
      <div className="mg-final-grid">
        <Reveal>
          <h2 className="mg-final-title">
            Você já fez o mais difícil: construiu sua autoridade na medicina.
          </h2>
          <p className="mg-on-dark mg-final-text">
            Agora é hora de fazer o digital refletir essa excelência — com estratégia, dados e uma equipe que fala a sua língua.
          </p>
        </Reveal>

        <Reveal className="mg-final-card" delay={120}>
          <h3>Pronto para o próximo passo?</h3>
          <p>
            Entre em contato pelo WhatsApp. Nosso time analisa seu cenário e retorna com clareza sobre posicionamento, canais e investimento.
          </p>
          <ul>
            <li>Diagnóstico personalizado</li>
            <li>Sem compromisso inicial</li>
            <li>Resposta em até 24h úteis</li>
          </ul>
          <MgButton className="mg-btn--block" whatsappMessage="Olá! Quero solicitar meu diagnóstico com a Med Growth.">
            Solicitar meu diagnóstico
          </MgButton>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
