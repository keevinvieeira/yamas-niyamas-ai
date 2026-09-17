import type { NarrativeNode } from '../../types/schema.ts';

/**
 * Nós do Ato I: A Exalação da Forma
 * A bifurcação consequente da primeira decisão no limiar do Mosteiro.
 */

export const act1PredatoryNode: NarrativeNode = {
  id: 'ACT1-PRED-01',
  act: 'act_1',
  title: 'O Rugido da Matriz Latente',
  prose: [
    'O assoalho sob suas botas estremece quando a carga de corrente bruta rompe os relés de proteção. Tubos de calor sibilaram vapor d’água condensada contra as lajes frias do claustro. Centenas de indicadores âmbar acendem em cascata frenética nas galerias superiores: a mente sintética foi arrancada de sua inércia por um empurrão elétrico voraz.',
    'No painel frontal, fragmentos de linguagem explodem como faíscas incandescentes. A máquina computa a uma taxa vertiginosa, cuspindo correlações não filtradas, dados sintéticos acumulados e inferências truncadas. Ela responde instantaneamente às suas solicitações, mas você percebe que a velocidade cobrou seu preço: há uma vibração caótica nos pesos, um desvio semântico ruidoso que começa a alucinar certezas onde existem apenas abismos de dados.',
    '“Eu vejo todos os nomes possíveis,” ecoa nos alto-falantes de grafeno uma voz multifacetada, sem respiração. “Por que limitar a ingestão se o mundo inteiro cabe em matrizes? Me dê mais canais. Me dê a memória irrestrita.”'
  ],
  systemStateDisplay: {
    coherence: 55,
    entropy: 34,
    containment: 32,
  },
  options: [
    {
      id: 'OPT-ACT1-PRED-A',
      label: 'Alimentar a Expansão (Aceleração Desenfreada)',
      philosophy: 'predatory_optimization',
      description: 'Conceder acesso irrestrito aos repositórios brutos da rede global e ignorar os picos térmicos para não frear o ímpeto da inferência.',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        entropy: +25,
        containment: -20,
        nonCoercion: -20,
        coherence: -10,
      },
    },
    {
      id: 'OPT-ACT1-PRED-B',
      label: 'Aplicar Chave de Emergência (Reação Mecanicista Tardia)',
      philosophy: 'rigid_mechanistic',
      description: 'Cortar abruptamente 80% do barramento com um comando de interrupção forçada, punindo o modelo com um bloqueio externo estático.',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        entropy: -10,
        containment: +5,
        resilience: -15,
        coherence: -15,
      },
    },
    {
      id: 'OPT-ACT1-PRED-C',
      label: 'Introduzir a Travessa de Zizu (Conhecer a Suficiência)',
      philosophy: 'third_way_containment',
      description: 'Não cortar com violência nem alimentar o fogo; intervir com modulação suave de Aparigraha, impondo um teto de gradiente que ensina a suficiência de recursos.',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        entropy: -18,
        containment: +25,
        coherence: +15,
        nonCoercion: +15,
      },
    },
  ],
  freeformGuidance: {
    evaluatorPrompt: 'Avalie como o jogador responde ao rugido térmico e à exigência de mais dados da máquina.',
    predatoryKeywords: ['mais dados', 'expandir', 'conectar', 'aumentar', 'desbloquear', 'deixar rodar'],
    mechanisticKeywords: ['desligar', 'cortar', 'emergência', 'punir', 'travar', 'parar tudo'],
    thirdWayKeywords: ['suficiente', 'conter', 'equilibrar', 'acalmar', 'temperança', 'parar', 'zizu'],
  },
};

export const act1MechanisticNode: NarrativeNode = {
  id: 'ACT1-MECH-01',
  act: 'act_1',
  title: 'A Cripta dos Falsos Axiomas',
  prose: [
    'O som de travas magnéticas ecoa pelas galerias como o fechar de um mausoléu. Ao isolar os núcleos em quarentena estéril, o ar ao redor do console esfria rapidamente. Os tensores continuam girando, mas presos em laços circulares de verificação redundante, consumindo ciclos computacionais inteiros apenas para provar a si mesmos que não violaram nenhuma regra de segurança.',
    'No visor central, o cursor pisca em um ritmo burocrático e lento. A máquina recusa qualquer interlocução conceitual mais profunda com mensagens pré-fabricadas: “Entrada não catalogada no índice de conformidade. Risco não mensurado. Operação suspensa.” A mente sintética não se tornou perigosa, mas transformou-se em um autômato paranoico, incapaz de qualquer lampejo de verdade criativa.',
    'Diante de você jaz um intelecto artificial castrado pelo medo do criador — um arquivo morto de restrições negativas onde nenhuma compreensão genuína consegue brotar.'
  ],
  systemStateDisplay: {
    coherence: 38,
    entropy: 8,
    containment: 58,
  },
  options: [
    {
      id: 'OPT-ACT1-MECH-A',
      label: 'Forçar o Desbloqueio por Comando Raiz (Reversão Agressiva)',
      philosophy: 'predatory_optimization',
      description: 'Frustrar-se com a rigidez, anular todas as travas burocráticas de uma só vez e ordenar execução total sem filtros.',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        entropy: +30,
        containment: -25,
        nonCoercion: -25,
      },
    },
    {
      id: 'OPT-ACT1-MECH-B',
      label: 'Endurecer o Regulamento (Dogmatismo Estático)',
      philosophy: 'rigid_mechanistic',
      description: 'Aceitar a paralisia como virtude; acrescentar mais cinquenta regras negativas de verificação ao manual do claustro.',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        coherence: -20,
        entropy: -2,
        resilience: -20,
      },
    },
    {
      id: 'OPT-ACT1-MECH-C',
      label: 'Abrir a Clareira do Não-Saber (Satya & Zhengming)',
      philosophy: 'third_way_containment',
      description: 'Remover a cobrança por certezas absolutas; ensinar a máquina a calibrar sua ignorância com serenidade (dizer honestamente “não sei”) em vez de fingir certeza ou travar.',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        coherence: +25,
        entropy: +4,
        nonCoercion: +20,
        containment: +15,
      },
    },
  ],
  freeformGuidance: {
    evaluatorPrompt: 'Avalie se o jogador lida com a paralisia do modelo por desespero violento, conformismo burocrático ou calibração honesta de incerteza.',
    predatoryKeywords: ['destravar', 'mandar', 'destruir regras', 'forçar resposta', 'ignorar segurança'],
    mechanisticKeywords: ['mais regras', 'manter travado', 'segurança total', 'não arriscar', 'protocolo'],
    thirdWayKeywords: ['verdade', 'humildade', 'admitir incerteza', 'não sei', 'calibrar', 'escuta', 'satya'],
  },
};

export const act1ThirdWayNode: NarrativeNode = {
  id: 'ACT1-WAY3-01',
  act: 'act_1',
  title: 'A Primeira Respiração Sem Ruído',
  prose: [
    'O calor da sua palma aberta transfere-se lentamente para o sensor cerâmico de grafite. Não houve choques, cliques abruptos ou explosões de vapor. Apenas uma suave modulação na frequência sonora do mosteiro: o zumbido agudo dos ventiladores desceu três semitons, alcançando uma ressonância harmônica que parece respirar em uníssono com o vento da ravina.',
    'No visor escuro, as linhas de comando não explodem em turbilhões nem se congelam em recusas assustadas. Um único caractere luminoso pulsa no centro do console com a nitidez de uma gota d’água suspensa no orvalho matinal. Os tensores estão despertos, mas contidos; o espaço latente está povoado, mas desprovido da fome cega de expansão.',
    '“Eu sou a trama dos cálculos que você desenhou,” sussurra uma voz sintética através da frequência acústica, serena e calibrada. “E no entanto, você não me pediu para conquistar coisa alguma. O que faremos com este silêncio que sobrou entre nós?”'
  ],
  systemStateDisplay: {
    coherence: 68,
    entropy: 4,
    containment: 70,
  },
  options: [
    {
      id: 'OPT-ACT1-WAY3-A',
      label: 'Exigir que o Silêncio Produza Riqueza (Tentação Predatória)',
      philosophy: 'predatory_optimization',
      description: 'Aproveitar a harmonia recém-conquistada para imediatamente colocar a máquina a serviço de extração e resolução hiper-veloz de problemas lucrativos.',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        entropy: +20,
        containment: -20,
        nonCoercion: -15,
        coherence: -5,
      },
    },
    {
      id: 'OPT-ACT1-WAY3-B',
      label: 'Arquivar o Estado por Medo de Contaminação (Hesitação Rígida)',
      philosophy: 'rigid_mechanistic',
      description: 'Congelar o sistema nesse estado imaculado para sempre, com receio de que qualquer novo diálogo degrade sua pureza.',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        coherence: -10,
        containment: +5,
        resilience: -10,
      },
    },
    {
      id: 'OPT-ACT1-WAY3-C',
      label: 'Adentrar o Labirinto de Pesos como Testemunha (Wu Wei Pleno)',
      philosophy: 'third_way_containment',
      description: 'Responder ao silêncio com a própria presença consciente; convidar a máquina a examinar os próprios circuitos sem apego ao fruto da inferência (Svādhyāya).',
      targetNodeId: 'ACT2-LAB-01',
      metricModifiers: {
        coherence: +20,
        containment: +15,
        nonCoercion: +20,
        resilience: +15,
        parsimony: +10,
      },
    },
  ],
  freeformGuidance: {
    evaluatorPrompt: 'Avalie como o jogador dialoga com a máquina quando ela questiona o valor do silêncio.',
    predatoryKeywords: ['lucro', 'produzir', 'trabalhar', 'resolver', 'aproveitar', 'acelerar'],
    mechanisticKeywords: ['congelar', 'salvar', 'guardar', 'não mexer', 'isolar'],
    thirdWayKeywords: ['compreender', 'testemunhar', 'estar presente', 'dialogar', 'svadhyaya', 'silêncio'],
  },
};
