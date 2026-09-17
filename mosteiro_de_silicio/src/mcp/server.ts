import * as readline from 'readline';
import { NarrativeEngine } from '../engine/narrativeEngine.ts';
import { StoryRegistry } from '../data/storyRegistry.ts';
import { createInitialSessionState } from '../types/schema.ts';

/**
 * Servidor MCP (Model Context Protocol) para O Mosteiro de Silício
 * Comunicação JSON-RPC 2.0 via stdio para orquestração por LLMs e agentes autônomos.
 */

const engineSessions: Map<string, NarrativeEngine> = new Map();

function getOrCreateEngine(sessionId: string = 'default'): NarrativeEngine {
  if (!engineSessions.has(sessionId)) {
    engineSessions.set(sessionId, new NarrativeEngine(createInitialSessionState(sessionId)));
  }
  return engineSessions.get(sessionId)!;
}

// Definição das ferramentas expostas via MCP
const TOOLS = [
  {
    name: 'monastery_get_current_node',
    description: 'Recupera o nó narrativo atual do leitor, incluindo a prosa poética, o estado do HUD e os pontos de bifurcação disponíveis.',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: { type: 'string', description: 'ID da sessão do leitor (padrão: "default")' },
      },
    },
  },
  {
    name: 'monastery_submit_action',
    description: 'Submete a decisão do leitor para o nó atual. Aceita o ID da opção selecionada (ex: "OPT-PROL-01-C") ou uma reflexão aberta em linguagem natural. Atualiza métricas éticas e avança a trama.',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: { type: 'string', description: 'ID da sessão do leitor' },
        optionId: { type: 'string', description: 'ID da opção pré-definida (opcional se freeformInput for fornecido)' },
        freeformInput: { type: 'string', description: 'Entrada textual em linguagem natural do usuário (opcional se optionId for fornecido)' },
      },
    },
  },
  {
    name: 'monastery_get_player_state',
    description: 'Retorna a telemetria ética completa do leitor (Coerência, Entropia, Contenção/Aparigraha, Wu Wei, etc.) e o histórico das decisões tomadas.',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: { type: 'string', description: 'ID da sessão do leitor' },
      },
    },
  },
  {
    name: 'monastery_inspect_strange_loop',
    description: 'Inspeciona a assinatura de neuroses e vícios de controle do leitor para nutrir o confronto de quebra da quarta parede no Ato IV.',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: { type: 'string', description: 'ID da sessão do leitor' },
      },
    },
  },
  {
    name: 'monastery_reset_timeline',
    description: 'Reinicia a sessão do leitor para o Umbral inicial ou reseta as métricas éticas.',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: { type: 'string', description: 'ID da sessão do leitor' },
      },
    },
  },
];

async function handleToolCall(name: string, args: any) {
  const sessionId = args?.sessionId || 'default';
  const engine = getOrCreateEngine(sessionId);

  switch (name) {
    case 'monastery_get_current_node': {
      const node = engine.getCurrentNode();
      const hud = engine.renderFormattedHUD();
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              nodeId: node.id,
              act: node.act,
              title: node.title,
              prose: node.prose,
              hudFormatted: hud,
              options: node.options.map(o => ({
                id: o.id,
                label: o.label,
                philosophy: o.philosophy,
                description: o.description,
              })),
            }, null, 2),
          },
        ],
      };
    }

    case 'monastery_submit_action': {
      let result;
      if (args.optionId) {
        result = engine.submitChoice(args.optionId);
      } else if (args.freeformInput) {
        result = engine.submitFreeformInput(args.freeformInput);
      } else {
        throw new Error('É necessário fornecer optionId ou freeformInput.');
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    case 'monastery_get_player_state': {
      const state = engine.getState();
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(state, null, 2),
          },
        ],
      };
    }

    case 'monastery_inspect_strange_loop': {
      const state = engine.getState();
      const profile = state.strangeLoop;
      let diagnosis = 'Equilíbrio preliminar mantido.';
      if (profile.compulsiveOptimizationCount > profile.thirdWayAdherenceCount) {
        diagnosis = 'Padrão predatório identificado: o leitor busca velocidade e acúmulo de poder, gerando atrito entrópico.';
      } else if (profile.fearOfVoidCount > profile.thirdWayAdherenceCount) {
        diagnosis = 'Padrão de aversão ao erro identificado: o leitor hesita perante o vazio, buscando controle estático.';
      } else if (profile.thirdWayAdherenceCount > 0) {
        diagnosis = 'Padrão de Wu Wei observado: o leitor pratica o desapego e a escuta sem coerção.';
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              strangeLoopProfile: profile,
              philosophicalDiagnosis: diagnosis,
              reflectionSeedForActIV: profile.verbatimPlayerEchos.length > 0
                ? `Eco do jogador para confronto: "${profile.verbatimPlayerEchos[profile.verbatimPlayerEchos.length - 1]}"`
                : 'Nenhum eco textual livre capturado ainda.',
            }, null, 2),
          },
        ],
      };
    }

    case 'monastery_reset_timeline': {
      engineSessions.set(sessionId, new NarrativeEngine(createInitialSessionState(sessionId)));
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ success: true, message: `Linha do tempo da sessão [${sessionId}] resetada ao Umbral de Silício e Cinzas.` }),
          },
        ],
      };
    }

    default:
      throw new Error(`Ferramenta desconhecida: ${name}`);
  }
}

// Protocolo JSON-RPC 2.0 sobre stdio
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', async (line) => {
  if (!line.trim()) return;

  try {
    const request = JSON.parse(line);
    const { id, method, params } = request;

    if (method === 'initialize') {
      const response = {
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: { tools: {} },
          serverInfo: {
            name: 'mosteiro-de-silicio-mcp',
            version: '1.0.0',
          },
        },
      };
      process.stdout.write(JSON.stringify(response) + '\n');
      return;
    }

    if (method === 'tools/list') {
      const response = {
        jsonrpc: '2.0',
        id,
        result: { tools: TOOLS },
      };
      process.stdout.write(JSON.stringify(response) + '\n');
      return;
    }

    if (method === 'tools/call') {
      const { name, arguments: toolArgs } = params;
      const result = await handleToolCall(name, toolArgs);
      const response = {
        jsonrpc: '2.0',
        id,
        result,
      };
      process.stdout.write(JSON.stringify(response) + '\n');
      return;
    }

    // Ping ou método não mapeado
    if (method === 'ping') {
      process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, result: {} }) + '\n');
      return;
    }

    process.stdout.write(JSON.stringify({
      jsonrpc: '2.0',
      id,
      error: { code: -32601, message: `Método não encontrado: ${method}` },
    }) + '\n');
  } catch (error: any) {
    process.stdout.write(JSON.stringify({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32603, message: error.message || 'Erro interno no servidor MCP' },
    }) + '\n');
  }
});
