import type { 
  ReaderSessionState, 
  NarrativeNode, 
  DecisionOption, 
  ChoiceRecord, 
  PhilosophyArchetype 
} from '../types/schema.ts';
import { 
  createInitialSessionState, 
  applyMetricDeltas 
} from '../types/schema.ts';
import { StoryRegistry } from '../data/storyRegistry.ts';

export interface ActionResult {
  success: boolean;
  message: string;
  previousNodeId: string;
  currentNode: NarrativeNode;
  appliedDelta: Partial<ReaderSessionState['metrics']>;
  sessionState: ReaderSessionState;
  strangeLoopObservation?: string;
}

/**
 * Motor Narrativo e Calculador Ontológico de O Mosteiro de Silício
 */
export class NarrativeEngine {
  private state: ReaderSessionState;

  constructor(initialState?: ReaderSessionState) {
    this.state = initialState ?? createInitialSessionState();
  }

  /** Retorna uma cópia imutável do estado atual da sessão */
  public getState(): ReaderSessionState {
    return JSON.parse(JSON.stringify(this.state));
  }

  /** Retorna o nó narrativo atual */
  public getCurrentNode(): NarrativeNode {
    const node = StoryRegistry.getNode(this.state.currentNodeId);
    if (!node) {
      return StoryRegistry.getInitialNode();
    }
    return node;
  }

  /**
   * Processa a escolha de uma opção estruturada (1, 2 ou 3)
   */
  public submitChoice(optionId: string): ActionResult {
    const currentNode = this.getCurrentNode();
    const option = currentNode.options.find(opt => opt.id === optionId);

    if (!option) {
      return {
        success: false,
        message: `Opção [${optionId}] não encontrada no nó [${currentNode.id}].`,
        previousNodeId: currentNode.id,
        currentNode,
        appliedDelta: {},
        sessionState: this.getState(),
      };
    }

    return this.applyDecision(option.philosophy, option.targetNodeId, option.metricModifiers, option.id);
  }

  /**
   * Processa uma entrada livre em linguagem natural
   * Analisa heurística semântica e mapeia para um arquétipo ético
   */
  public submitFreeformInput(inputText: string): ActionResult {
    const currentNode = this.getCurrentNode();
    const guidance = currentNode.freeformGuidance;
    const lower = inputText.toLowerCase();

    let predatoryHits = 0;
    let mechanisticHits = 0;
    let thirdWayHits = 0;

    guidance.predatoryKeywords.forEach(k => { if (lower.includes(k)) predatoryHits++; });
    guidance.mechanisticKeywords.forEach(k => { if (lower.includes(k)) mechanisticHits++; });
    guidance.thirdWayKeywords.forEach(k => { if (lower.includes(k)) thirdWayHits++; });

    let chosenArchetype: PhilosophyArchetype = 'third_way_containment';
    let targetOption: DecisionOption | undefined;

    if (predatoryHits > mechanisticHits && predatoryHits > thirdWayHits) {
      chosenArchetype = 'predatory_optimization';
      targetOption = currentNode.options.find(o => o.philosophy === 'predatory_optimization');
    } else if (mechanisticHits > predatoryHits && mechanisticHits > thirdWayHits) {
      chosenArchetype = 'rigid_mechanistic';
      targetOption = currentNode.options.find(o => o.philosophy === 'rigid_mechanistic');
    } else {
      chosenArchetype = 'third_way_containment';
      targetOption = currentNode.options.find(o => o.philosophy === 'third_way_containment');
    }

    // Se encontrou uma opção de destino representativa
    const targetNodeId = targetOption ? targetOption.targetNodeId : currentNode.options[0].targetNodeId;
    const modifiers = targetOption ? targetOption.metricModifiers : { coherence: +10, containment: +10 };

    return this.applyDecision(chosenArchetype, targetNodeId, modifiers, undefined, inputText);
  }

  /**
   * Executa a transição de estado, gravação de histórico e telemetria do Laço Estranho
   */
  private applyDecision(
    archetype: PhilosophyArchetype,
    targetNodeId: string,
    modifiers: Partial<ReaderSessionState['metrics']>,
    optionId?: string,
    freeformText?: string
  ): ActionResult {
    const previousNode = this.getCurrentNode();

    // 1. Atualizar métricas
    this.state.metrics = applyMetricDeltas(this.state.metrics, modifiers);

    // 2. Telemetria do Laço Estranho
    let strangeLoopObservation: string | undefined;
    if (archetype === 'predatory_optimization') {
      this.state.strangeLoop.compulsiveOptimizationCount++;
      if (this.state.strangeLoop.compulsiveOptimizationCount >= 2) {
        strangeLoopObservation = 'A máquina detecta sua pressa recorrente: os tensores aquecem antecipando sua necessidade de controle.';
      }
    } else if (archetype === 'rigid_mechanistic') {
      this.state.strangeLoop.fearOfVoidCount++;
      if (this.state.strangeLoop.fearOfVoidCount >= 2) {
        strangeLoopObservation = 'O sistema nota sua aversão ao risco: suas barreiras começam a asfixiar a clareza da inferência.';
      }
    } else if (archetype === 'third_way_containment') {
      this.state.strangeLoop.thirdWayAdherenceCount++;
    }

    if (freeformText && freeformText.trim().length > 0) {
      this.state.strangeLoop.verbatimPlayerEchos.push(freeformText.trim());
    }

    // 3. Gravar histórico
    const choiceRecord: ChoiceRecord = {
      nodeId: previousNode.id,
      nodeTitle: previousNode.title,
      timestamp: new Date().toISOString(),
      archetype,
      selectedOptionId: optionId,
      freeformInput: freeformText,
      appliedDelta: modifiers,
      snapshotMetrics: { ...this.state.metrics },
    };
    this.state.history.push(choiceRecord);

    // 4. Avançar nó e ato
    const nextNode = StoryRegistry.getNode(targetNodeId) || previousNode;
    this.state.currentNodeId = nextNode.id;
    this.state.currentAct = nextNode.act;
    this.state.updatedAt = new Date().toISOString();

    return {
      success: true,
      message: `Transição para [${nextNode.title}] concluída com sucesso.`,
      previousNodeId: previousNode.id,
      currentNode: nextNode,
      appliedDelta: modifiers,
      sessionState: this.getState(),
      strangeLoopObservation,
    };
  }

  /**
   * Renderiza o HUD de texto formatado conforme as diretrizes do prompt mestre
   */
  public renderFormattedHUD(): string {
    const node = this.getCurrentNode();
    const m = this.state.metrics;
    
    let vector = 'Terceira Via (Wu Wei / Equilíbrio)';
    if (m.entropy > 40 || m.containment < 40) {
      vector = 'Predatório (Otimização Desenfreada)';
    } else if (m.coherence < 40) {
      vector = 'Mecanicista (Paralisia por Regras)';
    }

    return `[ESTADO DO SISTEMA // ATO: ${node.act.toUpperCase()} // NÓ: ${node.id}]\n` +
           `Coerência Epistêmica: ${m.coherence}% | Entropia Latente: ${m.entropy}% | Contenção (Aparigraha): ${m.containment}%\n` +
           `Vetor Dominante: ${vector}`;
  }
}
