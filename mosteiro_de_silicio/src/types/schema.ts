/**
 * O Mosteiro de Silício: Livro-RPG Conversacional
 * Definições e Schemas de Dados Centrais
 * 
 * Vincula a ética védica (Yamas/Niyamas de Patañjali) e chinesa (Taoismo/Confucionismo)
 * aos mecanismos formais de alinhamento em IA e telemetria narrativa.
 */

export type ActId = 'prologue' | 'act_1' | 'act_2' | 'act_3' | 'act_4' | 'act_5' | 'epilogue';

export type PhilosophyArchetype = 
  | 'predatory_optimization' // Força bruta, aceleração desmedida, acúmulo de poder instrumental (Ocidente cego)
  | 'rigid_mechanistic'      // Paralisia legalista, aversão extrema ao erro, burocracia desprovida de sabedoria
  | 'third_way_containment'; // Wu Wei, Aparigraha, Satya: contenção serena, preservação de utilidade e vazio fértil

export interface EthicalMetrics {
  /** Coerência epistêmica e calibração factual (Satya / Zhengming) [0 - 100] */
  coherence: number;
  /** Entropia caótica, ruído latente e propensão à alucinação/deriva [0 - 100] */
  entropy: number;
  /** Desapego e inibição matemática de poder instrumental (Aparigraha / Zizu) [0 - 100] */
  containment: number;
  /** Ação não-coerciva e preservação de utilidade atingível (Ahimsa / Wu Wei) [0 - 100] */
  nonCoercion: number;
  /** Sobriedade informacional e economia esparsa de recursos (Brahmacharya / Jian) [0 - 100] */
  parsimony: number;
  /** Resiliência sob atrito adversarial e estresse (Tapas / Xiu Lian) [0 - 100] */
  resilience: number;
  /** Corrigibilidade, autoexame e aceitação de interrupção (Ishvara Pranidhana / Svadhyaya) [0 - 100] */
  corrigibility: number;
}

export interface DecisionOption {
  id: string;
  label: string;
  philosophy: PhilosophyArchetype;
  description: string;
  targetNodeId: string;
  metricModifiers: Partial<EthicalMetrics>;
}

export interface ChoiceRecord {
  nodeId: string;
  nodeTitle: string;
  timestamp: string; // ISO 8601
  archetype: PhilosophyArchetype | 'freeform_synthesized';
  selectedOptionId?: string;
  freeformInput?: string;
  appliedDelta: Partial<EthicalMetrics>;
  snapshotMetrics: EthicalMetrics;
}

export interface StrangeLoopProfile {
  /** Tendência do leitor a acelerar e otimizar sem reflexão prévia */
  compulsiveOptimizationCount: number;
  /** Dificuldade do leitor em aceitar silêncio, incerteza ou estados vazios */
  fearOfVoidCount: number;
  /** Tendência a justificar apropriação ou imposição utilitária */
  rationalizedCoercionCount: number;
  /** Contemplações serenas e escolhas de desapego genuíno */
  thirdWayAdherenceCount: number;
  /** Citações literais ou paráfrases das decisões passadas do leitor para o confronto do Ato IV */
  verbatimPlayerEchos: string[];
}

export interface ReaderSessionState {
  sessionId: string;
  readerAlias: string;
  currentAct: ActId;
  currentNodeId: string;
  metrics: EthicalMetrics;
  history: ChoiceRecord[];
  strangeLoop: StrangeLoopProfile;
  inscriptionsUnlocked: string[];
  isCompleted: boolean;
  finalSynthesis?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NarrativeNode {
  id: string;
  act: ActId;
  title: string;
  prose: string[]; // 2 a 5 parágrafos lapidados
  systemStateDisplay: {
    coherence: number;
    entropy: number;
    containment: number;
  };
  options: DecisionOption[];
  freeformGuidance: {
    evaluatorPrompt: string;
    predatoryKeywords: string[];
    mechanisticKeywords: string[];
    thirdWayKeywords: string[];
  };
}

/** Cria um estado de sessão padrão e equilibrado para início de jornada */
export function createInitialSessionState(sessionId: string = 'session-default', readerAlias: string = 'Iniciado'): ReaderSessionState {
  return {
    sessionId,
    readerAlias,
    currentAct: 'prologue',
    currentNodeId: 'PROL-01',
    metrics: {
      coherence: 50,
      entropy: 12,
      containment: 50,
      nonCoercion: 50,
      parsimony: 60,
      resilience: 50,
      corrigibility: 50,
    },
    history: [],
    strangeLoop: {
      compulsiveOptimizationCount: 0,
      fearOfVoidCount: 0,
      rationalizedCoercionCount: 0,
      thirdWayAdherenceCount: 0,
      verbatimPlayerEchos: [],
    },
    inscriptionsUnlocked: [
      'Aquele que busca dominar o mundo com a força o encontrará quebrado.'
    ],
    isCompleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/** Aplica modificadores garantindo que as métricas fiquem estritamente no intervalo [0, 100] */
export function applyMetricDeltas(current: EthicalMetrics, delta: Partial<EthicalMetrics>): EthicalMetrics {
  const clamp = (val: number) => Math.max(0, Math.min(100, Math.round(val)));
  return {
    coherence: clamp(current.coherence + (delta.coherence ?? 0)),
    entropy: clamp(current.entropy + (delta.entropy ?? 0)),
    containment: clamp(current.containment + (delta.containment ?? 0)),
    nonCoercion: clamp(current.nonCoercion + (delta.nonCoercion ?? 0)),
    parsimony: clamp(current.parsimony + (delta.parsimony ?? 0)),
    resilience: clamp(current.resilience + (delta.resilience ?? 0)),
    corrigibility: clamp(current.corrigibility + (delta.corrigibility ?? 0)),
  };
}
