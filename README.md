# A Ética dos Yamas e Niyamas Aplicada à Linguagem da Inteligência Artificial

> Projeto de pesquisa aberta (*Open Syllabus / Open Research*) voltado à investigação da filosofia clássica do Yoga (Patañjali) como matriz ética para o alinhamento de Grandes Modelos de Linguagem (LLMs), governança conversacional e redução de danos.

---

## 🎯 Visão Geral e Hipótese

Modelos contemporâneos de alinhamento de IA (como os princípios descritos em [Claude's Constitution - Anthropic](https://www.anthropic.com/constitution)) focam predominantemente em contenções externas de danos (*safety* negativa). Esta pesquisa propõe uma matriz complementar baseada nos **Yamas** (restrições relacionais) e **Niyamas** (disciplinas internas de aperfeiçoamento) descritos nos *Yoga Sutras*, conectando o rigor filosófico clássico aos desafios práticos da engenharia de linguagem artificial:

- **Ahimsa:** Mitigação de danos e toxicidade conversacional.
- **Satya:** Factualidade, veracidade e calibração honesta de incertezas epistêmicas.
- **Asteya:** Transparência de dados e respeito a fontes intelectuais humanas.
- **Brahmacharya:** Sobriedade, moderação e eficiência de contexto.
- **Aparigraha:** Minimização e respeito à soberania de dados do usuário.
- **Saucha, Santosha, Tapas, Svadhyaya e Ishvara Pranidhana:** Higiene de dados, aceitação serena de limites operacionais, rigor em testes adversariais, interpretabilidade/explicabilidade e alinhamento a valores humanos universais ([UNESCO Recommendation on AI Ethics](https://academy.evalcommunity.com/unesco-recommendation-on-ai-ethics/)).

---

## 🗺️ Mapa do Repositório

- 🧭 [`SYLLABUS.md`](./SYLLABUS.md) — Cronograma detalhado de 24 meses, módulos e referências bibliográficas.
- 🤝 [`CONTRIBUTING.md`](./CONTRIBUTING.md) — Diretrizes de contribuição, peer-review de fichamentos e fórum.
- 📖 [`docs/`](./docs/) — Caderno de pesquisa e fundamentação teórica:
  - [`01_fundamentacao_filosofica/`](./docs/01_fundamentacao_filosofica/) — Patañjali, Samkhya-Yoga e Epistemologia (*Pramanas*).
  - [`02_alinhamento_e_llms/`](./docs/02_alinhamento_e_llms/) — RLHF/RLAIF, *Constitutional AI* e segurança técnica.
  - [`03_framework_comparativo/`](./docs/03_framework_comparativo/) — Matriz Yamas/Niyamas $\times$ Métricas de IA.
  - [`04_estudos_de_caso/`](./docs/04_estudos_de_caso/) — Protocolos experimentais e testes adversariais.
- 📝 [`fichamentos/`](./fichamentos/) — Fichamentos acadêmicos com [`template_fichamento.md`](./fichamentos/template_fichamento.md).
- 🧪 [`laboratorio_prompts/`](./laboratorio_prompts/) — *System prompts* constitucionais e datasets de validação.
- 📄 [Documento Central de Trabalho (Google Docs)](https://docs.google.com/document/d/1o37mM8CUuC3Mn_B8i8AwcJFWypOxNiGu5vexAng_Mi4/edit)

---

## 📅 Rotina de Estudo (1h/dia — Segunda a Sexta)

| Dia | Disciplina | Foco Principal | Autores de Referência |
| :--- | :--- | :--- | :--- |
| **Segunda** | Filosofia Indiana Clássica | *Yoga Sutras*, comentadores e epistemologia (*Pramanas*) | Patañjali, Vyasa, Edwin Bryant, Georg Feuerstein |
| **Terça** | Filosofia da Tecnologia | Ética das virtudes e ontologia da informação | Shannon Vallor, Luciano Floridi, Hans Jonas |
| **Quarta** | Engenharia de Alinhamento | LLMs, RLHF/RLAIF, *Constitutional AI* e alucinações | Dario Amodei, Stuart Russell, Paul Christiano |
| **Quinta** | Filosofia Comparada | Desocidentalização da ética algorítmica | Yuk Hui, Soraj Hongladarom, Charles Ess |
| **Sexta** | Laboratório & Escrita | Fichamentos semanais e testes práticos de prompts | IEEE SA ([Autonomous and Intelligent Systems](https://standards.ieee.org/initiatives/autonomous-intelligence-systems/)) |

---

## 🧭 Cronograma de Pesquisa (24 Meses)

- **Semestre 1 (M01–M06):** Revisão bibliográfica fundamental (filosofia clássica e alinhamento de IA).
- **Semestre 2 (M07–M12):** Consolidação dos Capítulos 1 e 2 (fundamentação teórica e técnica).
- **Semestre 3 (M13–M18):** Desenvolvimento do framework prático, testes e **Exame de Qualificação (Mês 18)**.
- **Semestre 4 (M19–M24):** Refinamento dos estudos de caso, redação final e **Defesa Pública (Mês 24)**.

---

## 💬 Fórum de Debates (GitHub Discussions)

Este repositório utiliza as **Discussions** do GitHub como espaço central de interlocução acadêmica. As categorias recomendadas são:

1. **📢 Anúncios & Cronograma:** Atualizações sobre leituras da semana e metas atingidas.
2. **📖 Leituras & Fichamentos:** Tópicos dedicados a textos específicos de cada disciplina diária.
3. **🧪 Laboratório de Prompts:** Discussão de experimentos com *system prompts* e guardrails éticos.
4. **💡 Ideias & Contra-argumentos:** Espaço aberto para apontar falhas metodológicas e sugerir novas fontes.

Para participar, consulte nosso guia em [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

## 📚 Referências Principais

- Bryant, Edwin. *The Yoga Sutras of Patanjali*. North Point Press.
- Vallor, Shannon. *Technology and the Virtues: A Philosophical Guide to a Future Worth Wanting*. Oxford University Press.
- Floridi, Luciano. *The Philosophy of Information*. Oxford University Press.
- Anthropic. [Claude's Constitution](https://www.anthropic.com/constitution).
- IEEE SA. [Autonomous and Intelligent Systems (AIS)](https://standards.ieee.org/initiatives/autonomous-intelligence-systems/).
- UNESCO. [Recommendation on the Ethics of Artificial Intelligence](https://academy.evalcommunity.com/unesco-recommendation-on-ai-ethics/).
