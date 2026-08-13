import { useEffect, useId, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart3 } from "lucide-react";
import type { DoctorResult } from "@/lib/landing-data";
import { MgButton } from "./buttons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type TooltipPayload = {
  color: string;
  dataKey: string;
  value: number;
};

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="mg-result-chart-tooltip">
      <p>{label}</p>
      {payload.map((entry) => (
        <span key={entry.dataKey} style={{ color: entry.color }}>
          {entry.dataKey === "seguidores" ? "Seguidores" : "Visualizações"}:{" "}
          {entry.value.toLocaleString("pt-BR")}
        </span>
      ))}
    </div>
  );
}

function useMobileChartLayout() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return mobile;
}

function EvolutionChart({ doctor, animate }: { doctor: DoctorResult; animate: boolean }) {
  const id = useId().replace(/:/g, "");
  const mobile = useMobileChartLayout();

  return (
    <div className="mg-result-chart-wrap">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={doctor.chartData}
          margin={{
            top: 8,
            right: mobile ? 4 : 8,
            left: mobile ? -12 : 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id={`${id}-seg`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C17D2A" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#C17D2A" stopOpacity={0} />
            </linearGradient>
            <linearGradient id={`${id}-view`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0A0F1E" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#0A0F1E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(10, 15, 30, 0.08)" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: mobile ? 10 : 11, fill: "#69707d" }}
            tickLine={false}
            axisLine={false}
            interval={0}
          />
          <YAxis
            tick={{ fontSize: mobile ? 9 : 11, fill: "#69707d" }}
            tickLine={false}
            axisLine={false}
            width={mobile ? 34 : 48}
            tickFormatter={(v) => (v >= 1000 ? `${Math.round(v / 1000)}k` : String(v))}
          />
          <Tooltip content={<ChartTooltip />} />
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: 10, fontSize: mobile ? 11 : 12 }}
          />
          <Area
            type="monotone"
            dataKey="seguidores"
            stroke="#C17D2A"
            strokeWidth={2.5}
            fill={`url(#${id}-seg)`}
            name="Seguidores"
            isAnimationActive={animate}
            animationDuration={1400}
            animationEasing="ease-out"
          />
          <Area
            type="monotone"
            dataKey="visualizacoes"
            stroke="#0A0F1E"
            strokeWidth={2.5}
            fill={`url(#${id}-view)`}
            name="Visualizações"
            isAnimationActive={animate}
            animationDuration={1600}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ResultEvolutionDialog({ doctor }: { doctor: DoctorResult }) {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!open) {
      setAnimate(false);
      return;
    }

    const t = window.setTimeout(() => setAnimate(true), 80);
    return () => window.clearTimeout(t);
  }, [open, doctor.name]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className="mg-result-chart-btn">
          <BarChart3 size={16} aria-hidden="true" />
          Ver gráfico
        </button>
      </DialogTrigger>
      <DialogContent className="mg-result-dialog">
        <DialogTitle className="mg-result-dialog-title">
          Evolução de {doctor.name}
        </DialogTitle>
        <DialogDescription className="mg-result-dialog-lead">
          Acompanhe o crescimento nas redes sociais ao longo de {doctor.period}.
        </DialogDescription>

        <EvolutionChart doctor={doctor} animate={animate} />

        <div className="mg-result-dialog-stats">
          <div>
            <span>Crescimento de seguidores</span>
            <strong>{doctor.metric}</strong>
            <small>em {doctor.period}</small>
          </div>
          <div>
            <span>Visualizações mensais</span>
            <strong>{doctor.views}</strong>
            <small>{doctor.viewsPeriod}</small>
          </div>
          <MgButton
            className="mg-btn--primary mg-result-dialog-cta"
            whatsappMessage={`Olá! Vi o gráfico de evolução de ${doctor.name} e gostaria de resultados assim para meu consultório.`}
          >
            Quero resultados assim
          </MgButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
