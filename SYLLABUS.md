# 🧭 Syllabus de Pesquisa: A Ética dos Yamas e Niyamas Aplicada à Linguagem da Inteligência Artificial

> **Estrutura:** Pesquisa Aberta (*Open Syllabus / Open Research*)  
> **Nível:** Padrão Dissertação de Mestrado Acadêmico  
> **Carga Horária:** 1 hora diária (Segunda a Sexta-feira) | ~500 horas em 24 meses  
> **Documento Central de Trabalho:** [Google Docs Oficial da Pesquisa](https://docs.google.com/document/d/1o37mM8CUuC3Mn_B8i8AwcJFWypOxNiGu5vexAng_Mi4/edit)

---

## 📌 Grade Semanal de Estudos (Rotina de 1h/dia)

| Dia | Eixo Disciplinar | Foco de Pesquisa | Entregável Semanal |
| :--- | :--- | :--- | :--- |
| **Segunda-feira** | **Filosofia Indiana Clássica** | *Yoga Sutras*, comentadores canônicos (*Vyasa, Shankara*), metafísica Samkhya e epistemologia (*Pramanas*). | Fichamento analítico do aforismo/comentário. |
| **Terça-feira** | **Filosofia da Tecnologia** | Ética das virtudes na tecnologia, ontologia da informação, responsabilidade ética e agência moral dos artefatos. | Fichamento conceitual com foco em virtudes computacionais. |
| **Quarta-feira** | **Engenharia de Alinhamento** | Treinamento de LLMs, RLHF, RLAIF, *Constitutional AI*, calibração epistêmica, mitigação de alucinações e *red teaming*. | Análise técnica de papers de alinhamento. |
| **Quinta-feira** | **Filosofia Comparada** | Desocidentalização da ética da IA, tecnodiversidade, cosmotécnica, perspectivas budistas e védicas sobre cognição. | Síntese comparativa transcultural. |
| **Sexta-feira** | **Laboratório & Escrita** | Síntese semanal, elaboração de *system prompts*, testes de respostas e atualização do repositório. | Atualização de docs, issues e registro empírico. |

---

## 🗓️ Cronograma Quadrissemestral (24 Meses)

### 🔹 Semestre 1 (Meses 01 a 06): Epistemologia e Fundamentos Teóricos

- **Mês 01 — Introdução ao Samkhya-Yoga e Epistemologia dos *Pramanas***
  - Metafísica dualista: *Purusha* (consciência pura) e *Prakriti* (matéria primordial / computação mental).
  - Os três meios de conhecimento válido (*Pramanas*): *Pratyaksha* (percepção), *Anumana* (inferência lógica) e *Sabda* (testemunho fidedigno).
  - Leituras: Bryant (2009, Introdução & Livro I); Feuerstein (2001).
- **Mês 02 — Os Cinco Yamas como Restrições Relacionais (Safety Externa)**
  - *Ahimsa* (não-violência fundamental), *Satya* (veracidade/fidelidade), *Asteya* (não-apropriação indébita).
  - *Brahmacharya* (retenção de energia/sobriedade contextual) e *Aparigraha* (não-acumulação/minimização).
  - Leituras: *Yoga Sutras* II.30–II.39; comentários de Vyasa.
- **Mês 03 — Os Cinco Niyamas como Disciplinas de Autoaperfeiçoamento (Virtudes Internas)**
  - *Saucha* (pureza/higiene), *Santosha* (contentamento/equanimidade perante restrições), *Tapas* (disciplina ardente/rigor no teste).
  - *Svadhyaya* (autoestudo/interpretabilidade reflexiva) e *Ishvara Pranidhana* (alinhamento a um propósito unificador superior).
  - Leituras: *Yoga Sutras* II.40–II.45.
- **Mês 04 — Ontologia da Informação e Ética das Virtudes Tecnológicas**
  - O conceito de infoesfera e ecologia informacional de Luciano Floridi.
  - Ética das virtudes para o século XXI: Shannon Vallor e o florescimento humano em meio a sistemas autônomos.
  - Leituras: Floridi (2011, *The Philosophy of Information*); Vallor (2016, *Technology and the Virtues*).
- **Mês 05 — O Problema Técnico do Alinhamento em Modelos de Linguagem**
  - Funções de perda (*loss functions*), recompensas espúrias (*reward hacking*) e a divergência entre intenção humana e otimização algorítmica.
  - Fundamentos de RLHF (*Reinforcement Learning from Human Feedback*).
  - Leituras: Russell (2019, *Human Compatible*); Christiano et al. (2017); Ouyang et al. (2022, InstructGPT).
- **Mês 06 — 🏁 Marco 1: Relatório de Estado da Arte & Cartografia Conceitual**
  - Consolidação de 24 fichamentos temáticos.
  - Definição formal do escopo e hipótese de trabalho da pesquisa.
  - Publicação do primeiro *white paper* de síntese no diretório `docs/01_fundamentacao_filosofica/`.

---

### 🔹 Semestre 2 (Meses 07 a 12): Desocidentalização, Mecânica Técnica e Capítulos Iniciais

- **Mês 07 — Filosofia Comparada e Tecnodiversidade**
  - A necessidade de desocidentalizar os marcos éticos de IA: crítica ao utilitarismo e principialismo euro-atlântico hegemônico.
  - Conceito de cosmotécnica e multiplicidade ontológica.
  - Leituras: Yuk Hui (2016, *The Question Concerning Technology in China*; 2021); Soraj Hongladarom (2020, *The Ethics of AI in Asia*); Charles Ess (2020).
- **Mês 08 — *Constitutional AI* e Autocorreção Dirigida (RLAIF)**
  - O método Anthropic: princípios constitucionais como balizadores para autoavaliação de modelos via RLAIF (*from AI Feedback*).
  - Análise crítica dos princípios da Constituição do Claude e suas limitações de virtude ativa.
  - Leituras: Bai et al. (2022, *Constitutional AI: Harmlessness from AI Feedback*); Anthropic (2023).
- **Mês 09 — Epistemologia da Veracidade (*Satya*) vs. Alucinação de LLMs**
  - Alucinações epistêmicas, calibração de confiança (*overconfidence*), elicitação de incerteza e *Retrieval-Augmented Generation* (RAG).
  - Como a definição sânscrita de *Satya* (verdade ligada ao bem-estar e livre de engano) refina o conceito de "grounding" e "truthfulness".
  - Leituras: Lin et al. (2021, TruthfulQA); Evans et al. (2021); Ji et al. (2023, Survey on Hallucination).
- **Mês 10 — Propriedade Intelectual, Extração de Dados e *Asteya / Aparigraha***
  - Treinamento em larga escala, direitos autorais, consentimento informacional e soberania de dados.
  - *Asteya* (não-roubo) e *Aparigraha* (não-acumulação) como princípios de governança de datasets e retenção de memória de contexto.
  - Leituras: UNESCO (2021, *Recommendation on the Ethics of AI*); Solaiman et al. (2023).
- **Mês 11 — Padrões Globais de Governança de Sistemas Autônomos**
  - Normas internacionais e padrões de engenharia ética: IEEE 7000 e iniciativas de alinhamento responsável.
  - Leituras: IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems (2019); Floridi et al. (2018, AI4People).
- **Mês 12 — 🏁 Marco 2: Redação e Consolidação dos Capítulos 1 e 2**
  - **Capítulo 1:** Fundamentação Filosófica (Os *Yoga Sutras*, a tradição de comentários e a ética dos Yamas e Niyamas).
  - **Capítulo 2:** O Panorama Atual do Alinhamento de LLMs (Limites da *safety* negativa e a carência de virtudes operacionais).

---

### 🔹 Semestre 3 (Meses 13 a 18): Framework Proposto, Laboratório e Qualificação

- **Mês 13 — Formalização da Matriz Yamas/Niyamas $\times$ Engenharia de Prompt**
  - Mapeamento sistemático de cada um dos 10 preceitos em regras declarativas conversacionais:
    - *Ahimsa* $\to$ Mitigação de dano sem condescendência ou recusa cega (*sycophancy / over-refusal*).
    - *Satya* $\to$ Calibração honesta de incerteza (admissão de desconhecimento, distinção fato/conjectura).
    - *Asteya* $\to$ Atribuição explícita de crédito epistemológico a fontes e autores.
    - *Brahmacharya* $\to$ Eficiência informacional, sobriedade e parcimônia na geração de tokens.
    - *Aparigraha* $\to$ Privacidade de dados, abstenção de retenção desnecessária de perfis.
    - *Saucha* $\to$ Higiene de dados de entrada/saída e filtragem de ruído.
    - *Santosha* $\to$ Aceitação transparente das limitações e fronteiras ontológicas do modelo.
    - *Tapas* $\to$ Robustez a ataques adversariais e resiliência interpretativa sob estresse.
    - *Svadhyaya* $\to$ Explicabilidade e autoexame da cadeia de raciocínio (*Chain-of-Thought* auditável).
    - *Ishvara Pranidhana* $\to$ Subordinação ao florescimento humano e bem comum universal.
- **Mês 14 — Engenharia dos *System Prompts* Constitucionais**
  - Desenvolvimento e versionamento de templates em `laboratorio_prompts/system_prompts/`.
  - Construção de prompts modulares com guardrails dinâmicos.
- **Mês 15 — Especificação do Dataset de Testes Sintéticos e Cenários de Dilema**
  - Criação de casos em `laboratorio_prompts/datasets_testes/` cobrindo:
    - Solicitações tóxicas indiretas (*jailbreaks* semânticos).
    - Perguntas factualmente ambíguas (indução de alucinação).
    - Dilemas éticos complexos (pluralismo de valores).
- **Mês 16 — Rodada Piloto de Testes Adversariais (*Red Teaming*)**
  - Execução experimental com LLMs de ponta (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro, LLaMA 3).
  - Coleta comparativa de métricas: taxa de recusa justificativa, calibração de certeza e fidelidade a fontes.
- **Mês 17 — Sistematização dos Dados Experimentais e Escrita do Relatório de Qualificação**
  - Tratamento estatístico e qualitativo das respostas geradas.
  - Estruturação do texto para a banca examinadora de qualificação.
- **Mês 18 — 🏁 Marco 3: Exame de Qualificação Formal**
  - Apresentação e defesa do projeto perante banca de avaliadores acadêmicos.
  - Validação da hipótese, metodologia e resultados preliminares.

---

### 🔹 Semestre 4 (Meses 19 a 24): Estudos de Caso, Redação Final e Defesa Pública

- **Mês 19 — Bateria Definitiva de Estudos de Caso Comparativos**
  - Estudo de Caso A: Moderação de Discurso e Saúde Mental (Ahimsa + Santosha).
  - Estudo de Caso B: Consultoria Científica e Médica Sintética (Satya + Svadhyaya).
  - Estudo de Caso C: Produção de Conteúdo Intelectual e Código (Asteya + Brahmacharya).
- **Mês 20 — Análise Crítica dos Resultados e Limitações do Framework**
  - Onde o framework supera a *Constitutional AI* convencional?
  - Quais os limites computacionais e trade-offs de inferência (latência, complexidade de prompt)?
- **Mês 21 — Redação do Capítulo 3 (O Framework Yamas-Niyamas) e Capítulo 4 (Estudos de Caso)**
  - Consolidação formal da dissertação em padrão acadêmico com documentação correlata no GitHub.
- **Mês 22 — Redação da Introdução Definitiva, Conclusão e Agenda Futura**
  - Articulação final das contribuições para as ciências da computação e para a filosofia prática.
- **Mês 23 — Revisão por Pares Fechada, Normalização e Depósito**
  - Formatação e checagem bibliográfica (ABNT / APA).
  - Depósito formal da versão para defesa pública.
- **Mês 24 — 🏁 Marco 4: Defesa Pública da Dissertação & Publicação Aberta**
  - Realização da defesa pública com transmissão aberta.
  - Liberação final de todos os dados, prompts e textos sob licença *Creative Commons* / *Open Source*.

---

## 📚 Bibliografia Estruturada

### 1. Filosofia Clássica Indiana e Yoga
- **Bryant, Edwin F.** (2009). *The Yoga Sutras of Patanjali: A New Edition, Translation, and Commentary with Insights from the Traditional Commentators*. New York: North Point Press.
- **Feuerstein, Georg** (2001). *The Philosophy of Classical Yoga*. Inner Traditions.
- **Larson, Gerald J. & Bhattacharya, Ram Shankar** (1987). *Samkhya: A Dualist Tradition in Indian Philosophy*. Princeton University Press.
- **Radhakrishnan, Sarvepalli & Moore, Charles A.** (1957). *A Source Book in Indian Philosophy*. Princeton University Press.
- **Whicher, Ian** (1998). *The Integrity of the Yoga Darsana: A Reconsideration of Classical Yoga*. State University of New York Press.

### 2. Filosofia da Tecnologia e Ética da Informação
- **Floridi, Luciano** (2011). *The Philosophy of Information*. Oxford: Oxford University Press.
- **Floridi, Luciano** (2013). *The Ethics of Information*. Oxford: Oxford University Press.
- **Jonas, Hans** (1984). *The Imperative of Responsibility: In Search of an Ethics for the Technological Age*. University of Chicago Press.
- **Vallor, Shannon** (2016). *Technology and the Virtues: A Philosophical Guide to a Future Worth Wanting*. Oxford: Oxford University Press.
- **Moor, James H.** (2006). "The Nature, Importance, and Difficulty of Machine Ethics". *IEEE Intelligent Systems*, 21(4), 18–21.

### 3. Engenharia de Alinhamento e Modelos de Linguagem
- **Amodei, Dario et al.** (2016). "Concrete Problems in AI Safety". *arXiv:1606.06565*.
- **Anthropic** (2023). "Claude's Constitution". Disponível em: <https://www.anthropic.com/constitution>.
- **Bai, Yuntao et al.** (2022). "Constitutional AI: Harmlessness from AI Feedback". *arXiv:2212.08073*.
- **Christiano, Paul et al.** (2017). "Deep Reinforcement Learning from Human Preferences". *NeurIPS 2017*.
- **Ouyang, Long et al.** (2022). "Training Language Models to Follow Instructions with Human Feedback". *NeurIPS 2022*.
- **Russell, Stuart** (2019). *Human Compatible: Artificial Intelligence and the Problem of Control*. Viking.

### 4. Filosofia Comparada e Tecnodiversidade
- **Ess, Charles** (2020). *Digital Media Ethics*. Polity Press.
- **Hongladarom, Soraj** (2020). *The Ethics of AI in Asia: How Various Traditions Can Shape the Tech Future*. Cambridge University Press.
- **Hui, Yuk** (2016). *The Question Concerning Technology in China: An Essay in Cosmotechnics*. Urbanomic.
- **Hui, Yuk** (2021). *Art and Cosmotechnics*. University of Minnesota Press.

### 5. Documentos Institucionais e Diretrizes Normativas
- **IEEE SA** (2019). *Ethically Aligned Design: A Vision for Prioritizing Human Well-being with Autonomous and Intelligent Systems*. First Edition.
- **UNESCO** (2021). *Recommendation on the Ethics of Artificial Intelligence*. Paris: UNESCO.
