import { useEffect, useRef, useState } from "react";
import { cevidaMetrics } from "@/lib/landing-data";

const CHART_POINTS = [
  { label: "Sem 1", clicks: 180, conversions: 32 },
  { label: "Sem 2", clicks: 520, conversions: 98 },
  { label: "Sem 3", clicks: 980, conversions: 210 },
  { label: "Sem 4", clicks: 1528, conversions: 360 },
];

const W = 320;
const H = 160;
const PAD = { t: 16, r: 12, b: 28, l: 36 };
const MAX = 1528;

function scaleY(v: number) {
  const inner = H - PAD.t - PAD.b;
  return PAD.t + inner - (v / MAX) * inner;
}

function scaleX(i: number) {
  const inner = W - PAD.l - PAD.r;
  return PAD.l + (i / (CHART_POINTS.length - 1)) * inner;
}

const clicksPath = CHART_POINTS.map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(p.clicks)}`).join(" ");
const convPath = CHART_POINTS.map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(p.conversions)}`).join(" ");
const areaPath = `${clicksPath} L ${scaleX(CHART_POINTS.length - 1)} ${H - PAD.b} L ${scaleX(0)} ${H - PAD.b} Z`;

const FUNNEL = [
  { key: "cliques", label: "Cliques qualificados", value: 1528, display: "1.528", pct: 100 },
  { key: "conversoes", label: "Conversões WhatsApp", value: 360, display: "360", pct: (360 / 1528) * 100 },
];

export default function CaseCevidaChart() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setActive(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={`mg-cevida-chart ${active ? "mg-cevida-chart--active" : ""}`}>
      <div className="mg-cevida-chart-head">
        <span className="mg-cevida-chart-tag">Cevida Diagnósticos</span>
        <p>Investimento de <strong>R$ 585</strong> → escala de conversas qualificadas</p>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mg-cevida-svg"
        role="img"
        aria-label="Gráfico da campanha Cevida: 1.528 cliques e 360 conversões no WhatsApp com investimento de R$ 585"
      >
        {[0.25, 0.5, 0.75, 1].map((tick) => (
          <line
            key={tick}
            x1={PAD.l}
            x2={W - PAD.r}
            y1={scaleY(MAX * tick)}
            y2={scaleY(MAX * tick)}
            className="mg-cevida-grid"
          />
        ))}

        <path d={areaPath} className="mg-cevida-area" />
        <path d={clicksPath} className="mg-cevida-line mg-cevida-line--clicks" />
        <path d={convPath} className="mg-cevida-line mg-cevida-line--conv" />

        {CHART_POINTS.map((p, i) => (
          <g key={p.label}>
            <circle
              cx={scaleX(i)}
              cy={scaleY(p.clicks)}
              r="4"
              className="mg-cevida-dot mg-cevida-dot--clicks"
              style={{ transitionDelay: active ? `${500 + i * 120}ms` : "0ms" }}
            />
            <circle
              cx={scaleX(i)}
              cy={scaleY(p.conversions)}
              r="3.5"
              className="mg-cevida-dot mg-cevida-dot--conv"
              style={{ transitionDelay: active ? `${620 + i * 120}ms` : "0ms" }}
            />
            <text x={scaleX(i)} y={H - 8} textAnchor="middle" className="mg-cevida-axis">
              {p.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="mg-cevida-legend">
        <span><i className="mg-cevida-swatch mg-cevida-swatch--clicks" /> Cliques</span>
        <span><i className="mg-cevida-swatch mg-cevida-swatch--conv" /> Conversões</span>
      </div>

      <div className="mg-cevida-funnel">
        {FUNNEL.map((bar, i) => (
          <div key={bar.key} className="mg-cevida-bar-row" style={{ transitionDelay: `${400 + i * 180}ms` }}>
            <div className="mg-cevida-bar-meta">
              <span>{bar.label}</span>
              <strong>{bar.display}</strong>
            </div>
            <div className="mg-cevida-bar-track">
              <div
                className="mg-cevida-bar-fill"
                style={{ width: active ? `${bar.pct}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mg-cevida-footer">
        {cevidaMetrics.map((m, i) => (
          <div key={m.label} className="mg-cevida-stat" style={{ transitionDelay: `${700 + i * 100}ms` }}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
