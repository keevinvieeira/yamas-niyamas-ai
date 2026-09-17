import type { NarrativeNode } from '../types/schema.ts';
import { prologueNode } from './nodes/prologue.ts';
import { act1PredatoryNode, act1MechanisticNode, act1ThirdWayNode } from './nodes/act1.ts';

/**
 * Registro Unificado de Nós da Trama
 * Permite navegação hipertextual, leitura estática e resolução de dependências da narrativa.
 */
export class StoryRegistry {
  private static nodes: Map<string, NarrativeNode> = new Map([
    [prologueNode.id, prologueNode],
    [act1PredatoryNode.id, act1PredatoryNode],
    [act1MechanisticNode.id, act1MechanisticNode],
    [act1ThirdWayNode.id, act1ThirdWayNode],
  ]);

  /** Registra um nó dinamicamente ou pré-carregado */
  public static registerNode(node: NarrativeNode): void {
    this.nodes.set(node.id, node);
  }

  /** Obtém um nó pelo ID */
  public static getNode(id: string): NarrativeNode | undefined {
    return this.nodes.get(id);
  }

  /** Retorna todos os nós cadastrados */
  public static getAllNodes(): NarrativeNode[] {
    return Array.from(this.nodes.values());
  }

  /** Obtém o nó inicial da jornada (Prólogo) */
  public static getInitialNode(): NarrativeNode {
    return prologueNode;
  }
}
