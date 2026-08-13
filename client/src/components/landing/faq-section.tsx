import { faqItems } from "@/lib/landing-data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionContainer, SectionTitle } from "./ui";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("publico");

  return (
    <SectionContainer id="faq" className="mg-section--cream">
      <div className="mg-faq-grid">
        <Reveal className="mg-faq-intro">
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <p className="mg-body-text">
            Respostas diretas para as dúvidas mais comuns antes de iniciar um diagnóstico.
          </p>
        </Reveal>

        <div className="mg-faq-list">
          {faqItems.map((item, i) => {
            const open = openId === item.id;
            return (
              <Reveal key={item.id} delay={i * 40}>
                <div className={`mg-faq-item ${open ? "mg-faq-item--open" : ""}`}>
                  <button
                    type="button"
                    className="mg-faq-trigger"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={20} className={open ? "mg-faq-icon-open" : ""} />
                  </button>
                  {open && <p className="mg-faq-answer">{item.a}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
