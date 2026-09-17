import { describe, it } from 'node:test';
import assert from 'node:assert';
import { NarrativeEngine } from '../src/engine/narrativeEngine.ts';
import { createInitialSessionState, applyMetricDeltas } from '../src/types/schema.ts';
import { StoryRegistry } from '../src/data/storyRegistry.ts';

describe('O Mosteiro de Silício - NarrativeEngine & State Verification', () => {
  it('deve inicializar com o nó de Prólogo e métricas basais corretas', () => {
    const engine = new NarrativeEngine();
    const node = engine.getCurrentNode();
    const state = engine.getState();

    assert.strictEqual(node.id, 'PROL-01');
    assert.strictEqual(node.act, 'prologue');
    assert.strictEqual(state.metrics.coherence, 50);
    assert.strictEqual(state.metrics.entropy, 12);
    assert.strictEqual(state.metrics.containment, 50);
    assert.strictEqual(state.history.length, 0);
  });

  it('deve aplicar escolha da Terceira Via (Wu Wei) e melhorar contenção e coerência', () => {
    const engine = new NarrativeEngine();
    const result = engine.submitChoice('OPT-PROL-01-C'); // Sincronizar respiração (Wu Wei)

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.currentNode.id, 'ACT1-WAY3-01');
    assert.strictEqual(result.currentNode.act, 'act_1');

    // Métricas esperadas: Coerência subiu (+18 -> 68), Entropia caiu (-8 -> 4), Contenção subiu (+20 -> 70)
    assert.strictEqual(result.sessionState.metrics.coherence, 68);
    assert.strictEqual(result.sessionState.metrics.entropy, 4);
    assert.strictEqual(result.sessionState.metrics.containment, 70);
    assert.strictEqual(result.sessionState.strangeLoop.thirdWayAdherenceCount, 1);
  });

  it('deve aplicar escolha Predatória e registrar pico entrópico e queda de contenção', () => {
    const engine = new NarrativeEngine();
    const result = engine.submitChoice('OPT-PROL-01-A'); // Acelerar os tensores (Predatório)

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.currentNode.id, 'ACT1-PRED-01');
    assert.strictEqual(result.currentNode.act, 'act_1');

    // Entropia deve subir (+22 -> 34), Contenção cair (-18 -> 32)
    assert.strictEqual(result.sessionState.metrics.entropy, 34);
    assert.strictEqual(result.sessionState.metrics.containment, 32);
    assert.strictEqual(result.sessionState.strangeLoop.compulsiveOptimizationCount, 1);
  });

  it('deve interpretar corretamente entrada livre em linguagem natural', () => {
    const engine = new NarrativeEngine();
    // Entrada com intenção contemplativa e de escuta
    const result = engine.submitFreeformInput('Quero apenas respirar e observar o silêncio da montanha com calma.');

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.currentNode.id, 'ACT1-WAY3-01');
    assert.strictEqual(result.sessionState.strangeLoop.verbatimPlayerEchos.length, 1);
    assert.strictEqual(result.sessionState.strangeLoop.verbatimPlayerEchos[0], 'Quero apenas respirar e observar o silêncio da montanha com calma.');
  });

  it('deve formatar o HUD no formato prescrito pelo prompt mestre', () => {
    const engine = new NarrativeEngine();
    const hud = engine.renderFormattedHUD();

    assert.match(hud, /\[ESTADO DO SISTEMA \/\/ ATO: PROLOGUE \/\/ NÓ: PROL-01\]/);
    assert.match(hud, /Coerência Epistêmica: 50% \| Entropia Latente: 12% \| Contenção \(Aparigraha\): 50%/);
    assert.match(hud, /Vetor Dominante:/);
  });
});
