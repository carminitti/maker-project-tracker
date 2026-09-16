// ============================================================
// EDITE ESTE ARQUIVO PARA ATUALIZAR O SITE
// Todos os textos, integrantes, etapas, materiais e links
// ficam centralizados aqui — não é preciso mexer no layout.
// ============================================================

// ---------- Identidade ----------
export const identidade = {
  nomeFantasia: "AirGuard",
  nomeGrupo: "Grupo 03",
  subtitulo:
    "Monitor de qualidade do ar com exaustão automática: detecta gás, fumaça e calor no ambiente, liga a exaustão sozinho e dispara alarme sonoro e visual.",
  disciplina: "Feira de Projetos • Engenharia • 2026",
};

// ---------- Números de destaque do Hero ----------
export const destaques = [
  { valor: "3", rotulo: "sensores" },
  { valor: "ESP32", rotulo: "processamento" },
  { valor: "4", rotulo: "saídas" },
  { valor: "6", rotulo: "etapas" },
];

// ---------- Painel simulado do dispositivo (valores estáticos) ----------
export const painel = {
  aqi: 42,
  aqiRotulo: "Boa",
  temperatura: "26,4 °C",
  umidade: "58 %",
  ventoinha: "Desligada",
  alarme: "Normal",
};

// ---------- Proposta ----------
export const proposta = {
  problema:
    "Vazamentos de gás, fumaça e calor excessivo em ambientes fechados passam despercebidos até se tornarem perigosos, causando intoxicações, incêndios e perdas materiais.",
  solucao:
    "Um monitor embarcado de baixo custo que mede continuamente gás, fumaça, temperatura e umidade, acionando automaticamente a exaustão e alertas sonoros e visuais ao detectar risco.",
  resultado:
    "Ambientes mais seguros com resposta imediata a incidentes, reduzindo riscos à saúde e ao patrimônio — tudo por menos de R$ 200 em componentes.",
};

export const aplicacoes = [
  {
    contexto: "Indústria",
    descricao:
      "Galpões com solventes, operações de solda e empilhadeiras a gás, onde a detecção precoce evita acidentes e intoxicações.",
  },
  {
    contexto: "Residência",
    descricao:
      "Cozinhas residenciais: detecta vazamento de GLP e fumaça antes que a situação se torne perigosa para a família.",
  },
  {
    contexto: "Comércio",
    descricao:
      "Cozinhas de restaurantes e estacionamentos fechados, com monitoramento de monóxido de carbono e exaustão automática.",
  },
];

// ---------- Equipe ----------
// Para usar uma foto real, adicione o campo `foto: "https://..."` no
// integrante e, no componente Equipe.tsx, troque o avatar de iniciais por:
//   <img src={p.foto} alt={p.nome} className="size-16 rounded-full object-cover" />
export type Integrante = {
  nome: string;
  funcao: string;
  foto?: string;
};

export const equipe: Integrante[] = [
  { nome: "Ana Ribeiro", funcao: "Coordenação e documentação" },
  { nome: "Bruno Salgado", funcao: "Eletrônica e sensores" },
  { nome: "Carla Menezes", funcao: "Firmware do ESP32" },
  { nome: "Diego Alves", funcao: "Atuadores e montagem" },
];

// ---------- Arquitetura técnica ----------
export const arquitetura = [
  {
    etiqueta: "Entrada",
    titulo: "Sinais de Entrada",
    descricao: "Sensores e sinais de acionamento que informam o estado do ambiente.",
    itens: [
      "Sensor MQ-2 (gás e fumaça)",
      "Sensor DHT22 (temperatura e umidade)",
      "Botão de reset / modo manual",
    ],
  },
  {
    etiqueta: "Processamento",
    titulo: "CPU / Microcontrolador",
    descricao: "Lê os sinais, aplica a lógica de decisão e comanda as saídas.",
    itens: [
      "ESP32 com média móvel das leituras",
      "Limiares com histerese",
      "Calibração automática do ambiente na inicialização",
      "Servidor web local para monitoramento",
    ],
  },
  {
    etiqueta: "Saída",
    titulo: "Sinais de Saída",
    descricao: "Drivers e atuadores que executam as ações no ambiente.",
    itens: [
      "Módulo relé acionando ventoinha 12 V",
      "Buzzer de alarme",
      "LEDs verde / vermelho de status",
      'Display OLED 0,96"',
    ],
  },
];

// ---------- Etapas do projeto ----------
// status: "concluida" | "andamento" | "planejada"
export type Etapa = {
  numero: string;
  titulo: string;
  data?: string;
  status: "concluida" | "andamento" | "planejada";
  resumo: string;
  checklist?: { item: string; feito: boolean }[];
};

export const etapas: Etapa[] = [
  {
    numero: "01",
    titulo: "Identificação e proposta",
    data: "09/09/2026",
    status: "concluida",
    resumo: "Definição do grupo, nome fantasia e proposta do projeto.",
    checklist: [
      { item: "Nome do grupo definido", feito: true },
      { item: "Nome fantasia escolhido", feito: true },
      { item: "Nome e fotos dos integrantes", feito: true },
      { item: "Proposta publicada no site", feito: true },
    ],
  },
  {
    numero: "02",
    titulo: "Levantamento técnico",
    status: "andamento",
    resumo: "Pesquisa de sensores, atuadores e levantamento de custos.",
  },
  {
    numero: "03",
    titulo: "Projeto eletrônico e esquemático",
    status: "planejada",
    resumo: "Diagrama de blocos, esquema elétrico e lista final de materiais.",
  },
  {
    numero: "04",
    titulo: "Firmware e interface",
    status: "planejada",
    resumo: "Programação do ESP32, lógica de decisão e servidor web local.",
  },
  {
    numero: "05",
    titulo: "Protótipo e testes",
    status: "planejada",
    resumo: "Montagem em bancada, calibração e ensaios funcionais.",
  },
  {
    numero: "06",
    titulo: "Apresentação na feira",
    status: "planejada",
    resumo: "Documentação final, banner e demonstração para a banca.",
  },
];

// ---------- Lista de materiais ----------
export type Material = {
  componente: string;
  funcao: string;
  quantidade: number;
  custo: number;
};

export const materiais: Material[] = [
  { componente: "ESP32 DevKit", funcao: "Processamento e lógica de controle", quantidade: 1, custo: 45 },
  { componente: "Sensor MQ-2", funcao: "Detecção de gás e fumaça", quantidade: 1, custo: 12 },
  { componente: "Sensor DHT22", funcao: "Temperatura e umidade", quantidade: 1, custo: 20 },
  { componente: "Módulo relé 1 canal", funcao: "Acionamento da ventoinha", quantidade: 1, custo: 10 },
  { componente: "Ventoinha 12 V 80mm", funcao: "Exaustão do ar contaminado", quantidade: 1, custo: 20 },
  { componente: 'Display OLED 0,96"', funcao: "Exibição do status do sistema", quantidade: 1, custo: 25 },
  { componente: "Fonte 12 V", funcao: "Alimentação do sistema", quantidade: 1, custo: 25 },
  { componente: "Buzzer, LEDs, jumpers e caixa", funcao: "Alarme, sinalização e montagem", quantidade: 1, custo: 25 },
];

export const totalMateriais = materiais.reduce((s, m) => s + m.custo * m.quantidade, 0);

export function moeda(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

// ---------- Documentação (substitua os links "#" pelos arquivos reais) ----------
export const documentos = [
  { titulo: "Proposta em PDF", descricao: "Documento completo da proposta do projeto.", href: "#" },
  { titulo: "Esquema elétrico", descricao: "Diagrama de ligações e pinagem do ESP32.", href: "#" },
  { titulo: "Código-fonte", descricao: "Repositório com o firmware do projeto.", href: "#" },
];

// ---------- Navegação ----------
export const navLinks = [
  { href: "#proposta", label: "Proposta" },
  { href: "#grupo", label: "Grupo" },
  { href: "#arquitetura", label: "Arquitetura" },
  { href: "#etapas", label: "Etapas" },
  { href: "#materiais", label: "Materiais" },
  { href: "#documentacao", label: "Documentação" },
];
