// ============================================================
// EDITE ESTE ARQUIVO PARA ATUALIZAR O SITE
// Todos os textos, valores e seções ficam aqui.
// ============================================================

export const identidade = {
  nomeFantasia: "AirGuard",
  nomeGrupo: "Grupo 03",
  subtitulo:
    "Monitor de qualidade do ar com exaustão automática — detecta gás, fumaça e calor, liga a exaustão sozinho e dispara alarme sonoro e visual.",
  disciplina: "Feira de Projetos • Engenharia • 2026",
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
