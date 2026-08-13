import { afterItems, beforeItems } from "@/lib/landing-data";
import { Check, X } from "lucide-react";
import { Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

export default function BeforeAfterSection() {
  return (
    <SectionContainer id="antes-depois" className="mg-section--white">
      <div className="mg-numbers-head">
        <Reveal>
          <SectionTitle>O digital do médico antes e depois da Med Growth</SectionTitle>
        </Reveal>
        <Reveal delay={100}>
          <SectionLead>
            Reconheça onde você está — e para onde a estratégia certa pode levar.
          </SectionLead>
        </Reveal>
      </div>

      <div className="mg-compare-grid">
        <Reveal className="mg-compare-col mg-compare-col--before">
          <h3>Antes</h3>
          <ul>
            {beforeItems.map((item) => (
              <li key={item}>
                <X size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="mg-compare-col mg-compare-col--after" delay={120}>
          <h3>Com a Med Growth</h3>
          <ul>
            {afterItems.map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
