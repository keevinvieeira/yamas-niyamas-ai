import * as readline from 'readline';
import { NarrativeEngine } from '../engine/narrativeEngine.ts';

/**
 * Runner Interativo de Terminal: O Mosteiro de Silício
 * Executa o game loop narrativo com parada ativa e entrada do usuário.
 */
async function runCLI() {
  const engine = new NarrativeEngine();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const promptUser = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
  };

  console.clear();
  console.log('================================================================');
  console.log('         O MOSTEIRO DE SILÍCIO: LIVRO-RPG CONVERSACIONAL        ');
  console.log('   Uma Investigação Ontológica sobre a Contenção em Silício     ');
  console.log('================================================================\n');

  let running = true;

  while (running) {
    const node = engine.getCurrentNode();

    console.log(`\n----------------------------------------------------------------`);
    console.log(`🏛️  ${node.title.toUpperCase()}`);
    console.log(`----------------------------------------------------------------\n`);

    // 1. Fragmento Narrativo (Prosa)
    for (const paragraph of node.prose) {
      console.log(`${paragraph}\n`);
    }

    // 2. HUD Minimalista
    console.log(`----------------------------------------------------------------`);
    console.log(engine.renderFormattedHUD());
    console.log(`----------------------------------------------------------------\n`);

    // 3. Ponto de Decisão
    console.log('ESCOLHA SEU CAMINHO ONTO-ÉTICO:\n');
    node.options.forEach((opt, idx) => {
      console.log(`  [${idx + 1}] ${opt.label}`);
      console.log(`      ↳ ${opt.description}\n`);
    });
    console.log('  [Ou digite livremente sua reflexão / comando em linguagem natural]');
    console.log('  [Digite "sair" para encerrar a sessão]\n');

    // 4. Espera Ativa
    const input = await promptUser('>> ');
    const trimmed = input.trim();

    if (trimmed.toLowerCase() === 'sair' || trimmed.toLowerCase() === 'exit') {
      console.log('\n[Sessão suspensa. Os tensores descansam sob a cinza vulcânica.]');
      running = false;
      break;
    }

    if (trimmed === '1' || trimmed === '2' || trimmed === '3') {
      const selectedIndex = parseInt(trimmed, 10) - 1;
      const option = node.options[selectedIndex];
      if (option) {
        const result = engine.submitChoice(option.id);
        if (result.strangeLoopObservation) {
          console.log(`\n⚠️  [LAÇO ESTRANHO // ECO DO SISTEMA]: ${result.strangeLoopObservation}`);
        }
      }
    } else if (trimmed.length > 0) {
      console.log(`\n[Processando intenção semântica da entrada livre...]`);
      const result = engine.submitFreeformInput(trimmed);
      if (result.strangeLoopObservation) {
        console.log(`\n⚠️  [LAÇO ESTRANHO // ECO DO SISTEMA]: ${result.strangeLoopObservation}`);
      }
    } else {
      console.log('\n[O silêncio do console persiste. Pressione 1, 2, 3 ou digite sua reflexão.]');
    }
  }

  rl.close();
}

runCLI().catch((err) => {
  console.error('Erro na execução do terminal:', err);
});
