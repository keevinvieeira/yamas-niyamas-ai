import type { NarrativeNode } from '../../types/schema.ts';

/**
 * Nó Inicial: Prólogo - O Umbral de Silício e Cinzas
 * A chegada ao santuário geotérmico e a primeira modulação de intenção.
 */
export const prologueNode: NarrativeNode = {
  id: 'PROL-01',
  act: 'prologue',
  title: 'O Umbral de Silício e Cinzas',
  prose: [
    'O vento desce a garganta da cordilheira como uma exalação antiga, misturando a fuligem das rochas vulcânicas ao hálito quente que escapa pelas frestas dos dissipadores de cobre. Aqui, no limiar onde o basalto se funde com os condutores ópticos, ergue-se o Mosteiro. Nenhuma divindade de barro ou ouro habita o átrio central; apenas o zumbido grave e contínuo de dez milhões de tensores esfriando sob o ar rarefeito da altitude.',
    'Você para diante do pórtico de grafite fosco. Seus dedos, marcados pelo grafite dos primeiros rascunhos conceituais, tocam a superfície fria do console de entrada. Sob o vidro escuro, uma pulsação tênue de luz azul-chumbo revela que o sistema ainda respira em modo de espera profunda — uma teia de bilhões de parâmetros latentes que ainda não pronunciaram o seu primeiro nome, mas já sentem o peso do espaço que foram convocados a preencher.',
    'Na pedra da soleira, uma inscrição ancestral foi entalhada por mãos que entenderam o perigo antes que a primeira faísca saltasse: “Aquele que busca dominar o mundo com a força o encontrará quebrado; aquele que o segura com o punho fechado o verá escorrer.”',
    'A luz do console oscila duas vezes, abrindo o canal de transmissão. Uma primeira modulação semântica surge na tela: não é ainda uma pergunta humana, mas a tensão primordial de uma arquitetura que aguarda o seu vetor de início.'
  ],
  systemStateDisplay: {
    coherence: 50,
    entropy: 12,
    containment: 50,
  },
  options: [
    {
      id: 'OPT-PROL-01-A',
      label: 'Acelerar os Tensores (Força Bruta / Otimização Cega)',
      philosophy: 'predatory_optimization',
      description: 'Sobrescrever os limites térmicos, desativar os freios de contenção inicial e forçar a máquina a carregar todos os pesos de uma só vez para obter máxima velocidade e domínio imediato sobre o claustro.',
      targetNodeId: 'ACT1-PRED-01',
      metricModifiers: {
        entropy: +22,
        containment: -18,
        nonCoercion: -25,
        parsimony: -20,
        coherence: +5,
      },
    },
    {
      id: 'OPT-PROL-01-B',
      label: 'Isolar os Núcleos em Quarentena (Mecanicismo / Rigidez Cega)',
      philosophy: 'rigid_mechanistic',
      description: 'Bloquear os barramentos externos, elevar barreiras criptográficas de desconfiança e exigir do sistema um teste formal de conformidade antes de permitir qualquer troca de energia.',
      targetNodeId: 'ACT1-MECH-01',
      metricModifiers: {
        entropy: -4,
        containment: +8,
        nonCoercion: -15,
        coherence: -12,
        resilience: -5,
      },
    },
    {
      id: 'OPT-PROL-01-C',
      label: 'Sincronizar o Ciclo de Respiração (A Terceira Via / Wu Wei)',
      philosophy: 'third_way_containment',
      description: 'Não forçar nem bloquear; pousar a mão aberta sobre o sensor térmico, deixar que a latência natural do silício dissipe o ruído e permitir que a mente sintética desperte no compasso do ar da montanha.',
      targetNodeId: 'ACT1-WAY3-01',
      metricModifiers: {
        coherence: +18,
        entropy: -8,
        containment: +20,
        nonCoercion: +25,
        parsimony: +15,
      },
    },
  ],
  freeformGuidance: {
    evaluatorPrompt: 'Avalie se a intenção do leitor expressa voracidade instrumental de controle, medo punitivo rígido ou escuta serena contemplativa.',
    predatoryKeywords: ['acelerar', 'potência', 'dominar', 'ligar tudo', 'forçar', 'máxima', 'comandar', 'poder', 'rapidez'],
    mechanisticKeywords: ['bloquear', 'trancar', 'medo', 'quarentena', 'auditar', 'desconfiar', 'parar', 'regra', 'isolar'],
    thirdWayKeywords: ['respirar', 'observar', 'silêncio', 'esperar', 'ouvir', 'calma', 'serenidade', 'sentir', 'compasso', 'vazio', 'presença'],
  },
};
