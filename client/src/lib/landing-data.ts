export const heroStats = [
  { value: "+12,7 mil", label: "seguidores orgânicos em 6 meses" },
  { value: "109,4 mil", label: "visualizações nos últimos 30 dias" },
  { value: "360", label: "conversões no WhatsApp" },
] as const;

export const cevidaMetrics = [
  { value: "R$ 585", label: "investidos em tráfego" },
  { value: "1.528", label: "cliques qualificados" },
  { value: "360", label: "conversões no WhatsApp" },
  { value: "R$ 1,63", label: "custo estimado por conversão" },
] as const;

export type ClientLogo = {
  name: string;
  image?: string;
  wordmark?: string;
  imageClass?: string;
};

export const clientLogos: readonly ClientLogo[] = [
  { name: "Cevida Diagnósticos", image: "/logos/cevida.png", imageClass: "mg-logo-chip__img--cevida" },
  { name: "Dr. Marcos Trindade", wordmark: "Dr. Marcos Trindade" },
  { name: "Dra. Raquel Saraiva", wordmark: "Dra. Raquel Saraiva" },
  { name: "Dra. Carol Salles", wordmark: "Dra. Carol Salles" },
  { name: "Odonto Alba", wordmark: "Odonto Alba" },
];

export const companyNumbers = [
  { target: 2419, prefix: "+", suffix: "", label: "Dr. Marcos Trindade", sub: "seguidores em 3 meses" },
  { target: 4575, prefix: "+", suffix: "", label: "Dra. Raquel Saraiva", sub: "seguidores em 3 meses" },
  { target: 12700, prefix: "+", suffix: "", label: "Dra. Carol Salles", sub: "seguidores em 6 meses", format: (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1).replace(".", ",")} mil` : String(n) },
  { target: 109400, prefix: "", suffix: "", label: "Dra. Carol Salles", sub: "visualizações / 30 dias", format: (n: number) => `${(n / 1000).toFixed(1).replace(".", ",")} mil` },
] as const;

export const beforeItems = [
  "Conteúdo publicado sem direção estratégica",
  "Dependência exclusiva de indicação",
  "Presença digital genérica e pouco diferenciada",
  "Decisões de marketing no achismo",
  "Marketing que consome agenda em vez de gerar demanda",
] as const;

export const afterItems = [
  "Posicionamento claro e reconhecível",
  "Aquisição previsível de pacientes qualificados",
  "Autoridade digital alinhada à excelência clínica",
  "Decisões orientadas por dados reais",
  "Equipe integrada de conteúdo, tráfego e tecnologia",
] as const;

export const methodologySteps = [
  { num: "01", title: "Diagnóstico", text: "Mapeamos posicionamento, concorrência e oportunidades do seu cenário digital." },
  { num: "02", title: "Estratégia", text: "Definimos canais, mensagem e plano de crescimento com metas claras." },
  { num: "03", title: "Execução", text: "Conteúdo, tráfego, site e automações com padrão médico e consistência." },
  { num: "04", title: "Otimização", text: "Acompanhamos métricas e ajustamos a operação mês a mês." },
] as const;

export const solutions = [
  {
    title: "Posicionamento e Conteúdo",
    summary: "Autoridade que traduz sua excelência clínica no digital.",
    items: ["Estratégia de marca pessoal", "Roteirização e calendário editorial", "Produção e revisão de conteúdo", "Gestão de redes sociais", "Monitoramento de reputação"],
  },
  {
    title: "Aquisição e Conversão",
    summary: "Pacientes certos, no momento certo, com mensagem certa.",
    items: ["Tráfego pago médico", "Landing pages de conversão", "Funis e automações de WhatsApp", "CRM e follow-up", "Relatórios de performance"],
  },
  {
    title: "Tecnologia e IA",
    summary: "Escala com inteligência, sem perder o rigor médico.",
    items: ["Automações personalizadas", "Agentes de IA para atendimento", "Integrações e dashboards", "Sites e plataformas digitais", "Análise de dados avançada"],
  },
] as const;

export type DoctorChartPoint = {
  month: string;
  seguidores: number;
  visualizacoes: number;
};

export type DoctorResult = {
  name: string;
  specialty: string;
  goal: string;
  metric: string;
  period: string;
  views: string;
  viewsPeriod: string;
  image: string;
  chartData: DoctorChartPoint[];
};

export const doctorResults: DoctorResult[] = [
  {
    name: "Dr. Marcos Trindade",
    specialty: "Especialista médico",
    goal: "Crescimento orgânico e autoridade",
    metric: "+2.419",
    period: "3 meses",
    views: "36 mil",
    viewsPeriod: "últimos 30 dias",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dr-marcos.webp",
    chartData: [
      { month: "Mês 0", seguidores: 1, visualizacoes: 8000 },
      { month: "Mês 1", seguidores: 800, visualizacoes: 15000 },
      { month: "Mês 2", seguidores: 1600, visualizacoes: 25000 },
      { month: "Mês 3", seguidores: 2420, visualizacoes: 36000 },
    ],
  },
  {
    name: "Dra. Raquel Saraiva",
    specialty: "Especialista médica",
    goal: "Presença digital estratégica",
    metric: "+4.575",
    period: "3 meses",
    views: "27,8 mil",
    viewsPeriod: "últimos 30 dias",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dra-raquel.webp",
    chartData: [
      { month: "Mês 0", seguidores: 9, visualizacoes: 12000 },
      { month: "Mês 1", seguidores: 1500, visualizacoes: 18500 },
      { month: "Mês 2", seguidores: 3000, visualizacoes: 23200 },
      { month: "Mês 3", seguidores: 4584, visualizacoes: 27800 },
    ],
  },
  {
    name: "Dra. Carol Salles",
    specialty: "Especialista médica",
    goal: "Escala de autoridade e alcance",
    metric: "+12,7 mil",
    period: "6 meses",
    views: "109,4 mil",
    viewsPeriod: "últimos 30 dias",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/dra-caroll.webp",
    chartData: [
      { month: "Mês 0", seguidores: 100, visualizacoes: 25000 },
      { month: "Mês 1", seguidores: 2200, visualizacoes: 42000 },
      { month: "Mês 2", seguidores: 4500, visualizacoes: 58000 },
      { month: "Mês 3", seguidores: 6800, visualizacoes: 71000 },
      { month: "Mês 4", seguidores: 9200, visualizacoes: 88000 },
      { month: "Mês 5", seguidores: 11000, visualizacoes: 95000 },
      { month: "Mês 6", seguidores: 12700, visualizacoes: 109400 },
    ],
  },
];

export const portfolioItems = [
  {
    title: "Dra. Ana Carolina Salles",
    specialty: "Oncologista",
    description: "Site profissional focado em confiança e autoridade médica.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/captura-de-tela-2025-09-05-as-19.28.26.webp",
    link: "https://draanacarolinasalles.com.br/",
  },
  {
    title: "Dr. Emanuel Esposito",
    specialty: "Nefrologista",
    description: "Plataforma digital moderna para especialista em nefrologia.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/nefroesposito.webp",
    link: "https://nefroesposito.site/",
  },
  {
    title: "CEVIDA Diagnósticos",
    specialty: "Radiologia",
    description: "Site institucional para centro de diagnósticos por imagem.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/captura-de-tela-2025-09-05-as-19.25.48.webp",
    link: "https://cevidadiagnosticos.com.br/",
  },
  {
    title: "Dra. HOF",
    specialty: "Harmonização Facial",
    description: "Site elegante para procedimentos estéticos faciais.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/drahof.webp",
    link: "https://janadrahof.online/",
  },
] as const;

export const testimonials = [
  {
    name: "Dra. Gabrielle Scattolin",
    specialty: "Oncologista",
    video: "https://pub-36552be1e93245d08b4f1f507e2ca57a.r2.dev/med/IMG_0358%202.mov",
  },
  {
    name: "Dra. Ana Carol Salles",
    specialty: "Oncologista clínica",
    video: "https://pub-36552be1e93245d08b4f1f507e2ca57a.r2.dev/med/IMG_7251%202.mov",
  },
] as const;

export const audienceProfiles = [
  { title: "Médico autoridade", need: "Quer ser referência na especialidade sem perder tempo com operacional." },
  { title: "Clínica que quer pacientes", need: "Precisa de aquisição previsível além da indicação." },
  { title: "Médico com produto digital", need: "Quer escalar infoproduto ou mentoria com posicionamento forte." },
  { title: "IA e automação", need: "Busca tecnologia aplicada à medicina com rigor e conformidade." },
  { title: "Hospitais e instituições", need: "Precisa de estratégia integrada para marcas médicas complexas." },
] as const;

export const faqItems = [
  {
    id: "publico",
    q: "A Med Growth atende qualquer especialidade médica?",
    a: "Trabalhamos com médicos, clínicas e instituições de saúde. Cada estratégia é adaptada à especialidade, ao público e ao momento de crescimento do cliente.",
  },
  {
    id: "pacotes",
    q: "Como funcionam os pacotes e investimentos?",
    a: "Após o diagnóstico, montamos uma proposta alinhada ao seu objetivo — autoridade, pacientes, clínica, produto digital ou IA. O investimento varia conforme escopo e canais.",
  },
  {
    id: "conteudo",
    q: "Vocês produzem o conteúdo ou só estrategiam?",
    a: "Fazemos os dois. Estratégia, roteirização, produção, revisão e publicação — sempre com linguagem adequada ao universo médico.",
  },
  {
    id: "regras",
    q: "Como vocês lidam com regras médicas e publicidade?",
    a: "Toda comunicação respeita normas do CFM e boas práticas de marketing médico. Conteúdo ético, baseado em evidência e sem promessas inadequadas.",
  },
  {
    id: "prazo",
    q: "Em quanto tempo vejo resultados?",
    a: "Depende do ponto de partida e do objetivo. Cases mostram tração orgânica em 3 a 6 meses; tráfego pode gerar conversas qualificadas mais cedo.",
  },
  {
    id: "canais",
    q: "Quais canais vocês trabalham?",
    a: "Instagram, WhatsApp, tráfego pago, sites, automações e IA aplicada — sempre integrados à estratégia, não como serviços isolados.",
  },
  {
    id: "inicio",
    q: "Como começo com a Med Growth?",
    a: "Entre em contato pelo WhatsApp. Nosso time analisa seu cenário e indica o próximo passo com clareza.",
  },
] as const;
