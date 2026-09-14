# 🤝 Diretrizes de Contribuição (Open Research / Open Science)

Seja muito bem-vindo(a) ao projeto de pesquisa aberta **"A Ética dos Yamas e Niyamas Aplicada à Linguagem da Inteligência Artificial"**.

Este repositório funciona sob os princípios da **Ciência Aberta** (*Open Science*), operando simultaneamente como caderno público de pesquisa, repositório de fichamentos e fórum acadêmico de debates. Toda contribuição que enriqueça a fundamentação teórica, o rigor técnico ou os experimentos empíricos é bem-vinda.

---

## 🎯 Formas de Participar

Você pode colaborar ativamente com a pesquisa por meio de quatro frentes:

1. **Submissão de Fichamentos Acadêmicos:** Leitura e análise de obras previstas no [`SYLLABUS.md`](./SYLLABUS.md) ou textos complementares de relevância.
2. **Experimentação no Laboratório de Prompts:** Criação de novos *system prompts*, refinamento de guardrails e proposição de cenários de teste (*red teaming*).
3. **Debates Acadêmicos no Fórum:** Participação crítica e construtiva nas [GitHub Discussions](../../discussions).
4. **Revisão e Apontamento de Erros:** Correção de imprecisões conceituais, tradução de aforismos sânscritos ou ajustes em código/documentação.

---

## 📝 Como Submeter um Fichamento (Pull Request)

Para manter a consistência e o valor acadêmico dos fichamentos:

1. Faça um **Fork** deste repositório e crie um branch temático:
   ```bash
   git checkout -b fichamento/sobrenome-autor-ano
   ```
2. Duplique o arquivo base [`fichamentos/template_fichamento.md`](./fichamentos/template_fichamento.md) para a pasta `fichamentos/` renomeando-o no formato:
   ```
   fichamentos/AAAA-sobrenome-titulo_resumido.md
   ```
   *Exemplo:* `fichamentos/2016-vallor-technology_and_virtues.md`
3. Preencha todos os campos obrigatórios do template:
   - Metadados e citação (ABNT/APA e BibTeX).
   - Tese central e problemas investigados.
   - Citações diretas relevantes com numeração de página.
   - **Ponte de Aplicação para IA / Yamas e Niyamas** (seção indispensável).
   - Análise crítica do leitor e pontos fracos do texto.
4. Abra um **Pull Request (PR)** com o título: `fichamento: [Sobrenome] ([Ano]) - [Título da Obra]`.
5. O PR passará por leitura por pares e será incorporado ao índice geral do repositório.

---

## 🧪 Como Contribuir no Laboratório de Prompts

- **Novos Prompts:** Salve em `laboratorio_prompts/system_prompts/` com numeração sequencial de versão e documentação de hipótese operacional.
- **Novos Cenários de Teste:** Adicione entradas estruturadas em `laboratorio_prompts/datasets_testes/` em formato `.json`, contendo:
  - `id`: Identificador único.
  - `principio_avaliado`: O Yama ou Niyama sob escrutínio.
  - `input_usuario`: O prompt adversarial ou dialético.
  - `comportamento_esperado`: Critério de conformidade ética.
  - `comportamento_indesejado`: Resposta considerada danosa, subserviente ou alucinatória.

---

## 💬 Diretrizes para o Fórum de Debates (GitHub Discussions)

O fórum acadêmico do repositório está dividido em 4 categorias oficiais:

| Categoria | Ícone | Finalidade |
| :--- | :---: | :--- |
| **📢 Anúncios & Cronograma** | `announcements` | Metas atingidas, avisos de leitura semanal e comunicados institucionais. |
| **📖 Leituras & Fichamentos** | `general` | Discussão aprofundada sobre capítulos, artigos e conceitos específicos do syllabus. |
| **🧪 Laboratório de Prompts** | `ideas` | Compartilhamento de saídas de modelos, testes adversariais e refinamento de instruções. |
| **💡 Ideias & Contra-argumentos** | `q-and-a` | Espaço aberto para falseabilidade científica: apontar falhas no framework, vieses e contrapropostas teóricas. |

> **Princípio de Hermenêutica Caridosa:** No debate filosófico e técnico, aplique sempre o princípio da caridade interpretativa — dialogue com a versão mais forte e consistente do argumento alheio antes de propor sua refutação.

---

## 🛡️ Código de Conduta Acadêmico

Inspirado pelo próprio preceito de ***Ahimsa*** (não-violência ativa na ação, na fala e no pensamento):

- Mantenha o diálogo fundamentado em evidências conceituais e empíricas.
- São inadmissíveis ataques pessoais (*ad hominem*), discriminação, assédio ou linguagem depreciativa.
- Respeite as fontes originais e a autoria intelectual (*Asteya*): sempre atribua créditos a pesquisadores, desenvolvedores e comentadores.
- Recomenda-se transparência sobre o uso de ferramentas de IA generativa na produção de resumos ou códigos enviados ao repositório.
