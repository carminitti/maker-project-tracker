// ============================================================
// EDITE ESTE ARQUIVO PARA ATUALIZAR O SITE
// Todos os textos, nomes, fotos e etapas ficam aqui.
// ============================================================

export const identidade = {
  nomeFantasia: "AutoLar",
  nomeGrupo: "Grupo 333",
  subtitulo: "Automação inteligente para o dia a dia",
  disciplina: "Feira de Projetos • 2026",
};

export type Integrante = {
  nome: string;
  funcao: string;
  contato: string;
  bio: string;
  foto?: string; // cole aqui um link de foto (https://...) para substituir o avatar
};

export const equipe: Integrante[] = [
  {
    nome: "Ana Ribeiro",
    funcao: "Coordenação do projeto",
    contato: "ana.ribeiro@email.com",
    bio: "Organiza cronograma, documentação e a apresentação da feira.",
  },
  {
    nome: "Bruno Salgado",
    funcao: "Eletrônica e sensores",
    contato: "bruno.salgado@email.com",
    bio: "Responsável pela montagem dos sensores e do circuito de entrada.",
  },
  {
    nome: "Carla Menezes",
    funcao: "Programação do microcontrolador",
    contato: "carla.menezes@email.com",
    bio: "Desenvolve a lógica de controle no ESP32 e a comunicação Wi-Fi.",
  },
  {
    nome: "Diego Alves",
    funcao: "Atuadores e potência",
    contato: "diego.alves@email.com",
    bio: "Cuida dos drivers, relés e acionamento das cargas.",
  },
  {
    nome: "Elisa Tavares",
    funcao: "Documentação e testes",
    contato: "elisa.tavares@email.com",
    bio: "Registra os ensaios, resultados e evidências de cada etapa.",
  },
];

export const proposta = {
  aplicacao: "Residência",
  titulo: "Painel de automação residencial de baixo custo",
  resumo:
    "Um sistema embarcado que monitora presença, luminosidade e temperatura de um ambiente e aciona automaticamente iluminação e ventilação, com acionamento manual sempre disponível.",
  problema:
    "Em muitas residências a iluminação e a ventilação permanecem ligadas em ambientes vazios, gerando desperdício de energia e desconforto térmico. O controle é totalmente manual e depende da atenção dos moradores.",
  justificativa:
    "Com sensores simples e um microcontrolador acessível é possível reduzir o consumo, aumentar o conforto e demonstrar na prática o ciclo entrada → processamento → saída estudado em aula. A solução é replicável em comércio e indústria com pequenas adaptações.",
  destaques: [
    { valor: "R$ 250", rotulo: "Custo estimado do protótipo" },
    { valor: "3", rotulo: "Sensores de entrada" },
    { valor: "ESP32", rotulo: "Unidade de processamento" },
    { valor: "4", rotulo: "Saídas acionadas" },
  ],
};

export const arquitetura = [
  {
    etiqueta: "Entrada",
    titulo: "Sinais de Entrada",
    descricao: "Sensores e sinais de acionamento que informam o estado do ambiente.",
    itens: [
      "Sensor de presença PIR (HC-SR501)",
      "Sensor de temperatura e umidade DHT22",
      "Sensor de luminosidade LDR",
      "Botões de acionamento manual",
    ],
  },
  {
    etiqueta: "Processamento",
    titulo: "CPU / Microcontrolador",
    descricao: "Lê os sinais, aplica a lógica de decisão e comanda as saídas.",
    itens: [
      "ESP32 DevKit v1 (Wi-Fi integrado)",
      "Firmware em C++ / Arduino Framework",
      "Lógica com histerese e temporização",
      "Alternativas avaliadas: Arduino Uno, Raspberry Pi",
    ],
  },
  {
    etiqueta: "Saída",
    titulo: "Sinais de Saída",
    descricao: "Drivers e atuadores que executam as ações no ambiente.",
    itens: [
      "Módulo relé 4 canais (iluminação)",
      "Driver de motor para ventilador DC",
      "Display OLED com o status do sistema",
      "LED e buzzer de sinalização",
    ],
  },
];

export type Etapa = {
  numero: string;
  titulo: string;
  status: "concluida" | "atual" | "futura";
  resumo: string;
  entregas?: string[];
};

export const etapas: Etapa[] = [
  {
    numero: "01",
    titulo: "Identificação e proposta",
    status: "atual",
    resumo: "Grupo, integrantes, proposta do projeto e arquitetura do sistema.",
    entregas: [
      "Nome do grupo e nome fantasia definidos",
      "Equipe apresentada com funções",
      "Proposta e justificativa escritas",
      "Arquitetura entrada / processamento / saída",
    ],
  },
  {
    numero: "02",
    titulo: "Projeto e componentes",
    status: "futura",
    resumo: "Lista de materiais, esquema elétrico e diagrama de blocos detalhado.",
  },
  {
    numero: "03",
    titulo: "Montagem do protótipo",
    status: "futura",
    resumo: "Montagem em bancada, fotos do processo e primeiros ensaios.",
  },
  {
    numero: "04",
    titulo: "Programação e testes",
    status: "futura",
    resumo: "Firmware, testes funcionais e registro dos resultados obtidos.",
  },
  {
    numero: "05",
    titulo: "Apresentação na feira",
    status: "futura",
    resumo: "Documentação final, banner e demonstração para a banca.",
  },
];
