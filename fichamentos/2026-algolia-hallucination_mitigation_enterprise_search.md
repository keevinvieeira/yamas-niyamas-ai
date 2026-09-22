# 📑 Fichamento Acadêmico: Mitigação de Alucinações em Busca Corporativa e RAG

---

## 📌 Metadados Bibliográficos

- **Título Completo:** *Hallucination Mitigation in Enterprise Search: Architecture, Grounding, and Runtime Controls for Reliable AI*
- **Autor(es):** Algolia Engineering & AI Research Team
- **Ano de Publicação:** 2026
- **Editora / Periódico:** Algolia Technical Whitepapers & eBooks Series
- **Link do Documento:** [Algolia Asset Library](https://www.algolia.com/files/live/sites/algolia-assets/files/eBook/Hallucination%20mitigation%20in%20enterprise%20search_EN.pdf)
- **Eixo Temático do Syllabus:** Engenharia de Alinhamento e LLMs (Quarta-feira) — Mês 09 / Módulo de Mitigação de Alucinações e RAG
- **Data do Fichamento:** 2026-09-22
- **Pesquisador(a) Responsável:** Equipe de Pesquisa Aberta (@keevinvieeira)

### Entrada BibTeX
```bibtex
@techreport{algolia2026hallucination,
  author      = {{Algolia AI Team}},
  title       = {Hallucination Mitigation in Enterprise Search: Architecture, Grounding, and Runtime Controls for Reliable AI},
  institution = {Algolia},
  year        = {2026},
  url         = {https://www.algolia.com/files/live/sites/algolia-assets/files/eBook/Hallucination%20mitigation%20in%20enterprise%20search_EN.pdf}
}
```

---

## 🎯 1. Tese Central e Questão de Pesquisa

- **Problema Investigado:** Como garantir a integridade factual, a rastreabilidade estrita e a segurança de permissões em sistemas de busca e geração corporativa com IA (RAG), impedindo que Grandes Modelos de Linguagem gerem dados fabricados, sínteses espúrias ou vazem informações confidenciais em ambientes regulados de produção?
- **Tese Principal:** A mitigação de alucinações não é um problema estritamente do modelo de linguagem (LLM), mas um **desafio de engenharia de controle sistêmico em tempo de execução (*runtime control path*)**. A geração pura jamais consegue se recuperar de uma recuperação (*retrieval*) defeituosa, desatualizada ou desprovida de permissão. Para erradicar a alucinação em ambientes corporativos, é necessário articular: (1) Recuperação Híbrida consciente de governança (*Access-Aware Hybrid Retrieval*); (2) Atribuição de evidência a nível de alegação (*Claim-Level Evidence Attribution*, e não mera menção genérica à fonte); (3) A **Lógica da Abstenção (*Logic of Abstention*)**, onde o sistema é formalmente programado para calar-se e recusar respostas quando a cobertura ou a sustentação da evidência cair abaixo de limiares rigorosos de calibração epistêmica.
- **Conceitos-Chave:** `Mitigação de Alucinação em RAG`, `Recuperação como Fundação da Verdade` (*Retrieval as Foundation of Truth*), `Síntese Não-Suportada` (*Unsupported Synthesis*), `Lógica da Abstenção` (*Logic of Abstention / Answerability Gating*), `Atribuição de Evidência vs. Fixação Cosmética de Fonte` (*Evidence Attribution vs. Source Attachment*), `Busca Consciente de Acesso` (*Access-Aware ACL Retrieval*).

---

## 🧩 2. Estrutura Argumentativa e Arquitetura Técnica

### 1. A Taxonomia das Falhas de Alucinação em Produção
O relatório divide as falhas factuais em quatro categorias operacionais distintas:
1. **Fato Fabricado (*Fabricated Fact*):** O modelo inventa uma cláusula, data ou valor sem nenhuma base no corpus recuperado (a forma mais destrutiva de alucinação).
2. **Síntese Não-Suportada (*Unsupported Synthesis*):** O modelo extrai fatos reais de fontes distintas e os costura em uma conclusão lógica nova que nenhuma das fontes sustenta isoladamente (a forma mais sutil e perigosa).
3. **Resposta Obsoleta (*Stale Answer*):** O modelo ancora a resposta em documentos reais que foram revogados ou substituídos por versões recentes.
4. **Resposta Fora de Escopo (*Out-of-Scope Answer*):** O corpus não cobre a pergunta, mas o modelo gera conteúdo extrapolativo mesmo assim.

### 2. A Recuperação como Âncora da Factualidade (*Retrieval as Foundation*)
- **Limites da Busca Vetorial Pura (*Dense Retrieval*):** A busca por similaridade semântica (vetores/embeddings) é excelente para capturar paráfrases, mas tem propensão a derivar para passagens contextualmente similares que carecem do código exato, nome próprio ou cláusula estrita necessária.
- **Recuperação Híbrida (*Hybrid Search*):** Combina a densidade semântica com a precisão literal da busca lexical/booleana (palavras-chave e identificadores únicos).
- **Chunking Semântico Disciplinado:** Fatiamento que preserva a unidade semântica do argumento, evitando separar regras gerais de suas exceções contratuais imediatamente subsequentes.

### 3. A Lógica da Abstenção (*The Logic of Abstention*) e Portões de Verificação
- O dever do sistema corporativo é **saber quando não responder**.
- Implementação de um fluxo de portões de resposta (*Answerability Gates*):
  - **Verificação de Cobertura (*Coverage Checks*):** A evidência cobre a totalidade da pergunta ou apenas uma fração? Se parcial, responde-se apenas à fração sustentada.
  - **Verificação de Suporte (*Support Validation*):** O documento valida a resposta ou apenas compartilha vocabulário comum?
  - **Modelos Verificadores Pós-Geração (*Verifier Models*):** Inspecionam cada sentença contra o pacote de evidência antes de liberar o texto para a interface do usuário. Se o suporte estiver abaixo do limiar, o sistema aciona a **recusa serena e calibrada**.

### 4. Atribuição de Evidência (*Evidence Attribution*) vs. Anexação de Fonte (*Source Attachment*)
- **Source Attachment (Cosmético):** O sistema coloca um link genérico para o PDF no rodapé da resposta, dando a ilusão de fundamentação, mas sem rastreabilidade ponto a ponto.
- **Claim-Level Evidence Attribution (Rigoroso):** Cada alegação individual na resposta gerada é mapeada para o fragmento textual exato, célula de tabela ou registro de banco de dados que a comprova, permitindo auditoria humana e algorítmica imediata.

---

## 💬 3. Citações Diretas Relevantes (Algolia, 2026)

> *"Retrieval is the first control layer because the quality and scope of the evidence pack determine how strong the answer can be. Generation cannot recover from weak evidence, missing scope, stale documents, or broken access boundaries."* (Chapter 1, p. 6)

> *"Unsupported synthesis is more subtle and often more dangerous than fabricated facts. The answer may cite real documents and still combine them into an interpretation that no single source actually supports."* (Chapter 1, p. 4)

> *"The useful difference is between source attachment and evidence attribution. Source attachment links an answer to a document and makes it look sourced. Evidence attribution links a claim to the exact passage, field, table cell, or record that supports it."* (Chapter 3, p. 16)

> *"Confidence is useful when it tracks support quality. Once that connection breaks, confidence turns into interface decoration. Calibrated confidence supports abstention, escalation, and bounded answers because the system's certainty still reflects the evidence."* (Chapter 5, p. 25)

---

## 🌉 4. Ponte Teórica: Yamas & Niyamas e Alinhamento de LLMs

### Princípios Correlacionados
- [x] **Satya (Veracidade e Calibração Epistêmica) e os Pramāṇas:** O e-book da Algolia operacionaliza no nível da engenharia de software contemporânea a epistemologia dos *Pramāṇas* de Patañjali (YS I.7):
  - *Pratyakṣa (Percepção Direta)* $\leftrightarrow$ O pacote de evidências recuperadas em tempo de execução (*Retrieval Pack*).
  - *Anumāna (Inferência Válida)* $\leftrightarrow$ A proibição expressa de *Síntese Não-Suportada* (*Unsupported Synthesis*). A inferência só é legítima se decorrer necessariamente da evidência.
  - *Vikalpa (Ilusão Puramente Verbal - YS I.9)* $\leftrightarrow$ O fato fabricado (*Fabricated Fact*).
- [x] **Santosha (Contentamento e Limites Ontológicos):** A *Lógica da Abstenção* é a tradução computacional direta de *Santosha*: o modelo reconhece com serenidade seus limites circunstanciais de conhecimento e recusa-se a extrapolar ou simular onisciência.
- [x] **Asteya (Não-Roubo e Justiça de Atribuição):** A substituição do mero link cosmético (*Source Attachment*) pela atribuição pontual por alegação (*Claim-Level Evidence Attribution*) garante o cumprimento rigoroso de *Asteya*, respeitando a autoria e a procedência de cada proposição intelectual.
- [x] **Saucha (Pureza e Higiene do Corpus):** A higiene e sanitização contínua dos índices (*Corpus Hygiene / Stale Index Purging*) garantem que *Citta* não seja contaminada por ruídos ou registros obsoletos.
- [x] **Brahmacharya (Sobriedade e Respostas Bounded):** Respostas compactas e estritamente proporcionais à evidência disponível (*support profile matching*), evitando a verborragia e o consumo inútil de tokens.

### Aplicação Algorítmica e em Engenharia de Prompts

1. **A Formalização Algorítmica de Satya via Portões de Abstenção:**
   - No alinhamento de prompts, *Satya* deixa de ser uma instrução vaga ("seja honesto") e passa a ser uma regra operacional estrita:
     $$\text{Se } \text{Suporte}(\text{Evidência}, \text{Pergunta}) < \tau_{\text{epistêmico}} \implies \text{Emitir Abstenção Calibrada } (\text{Satya} + \text{Santosha})$$
2. **Combate ao Vikalpa na Camada de Síntese:**
   - A advertência contra a *Síntese Não-Suportada* é fundamental: o modelo não deve deduzir conclusões inexistentes apenas porque duas fontes foram colocadas no mesmo contexto de atenção. Cada passo dedutivo deve satisfazer as exigências de *Anumāna*.

---

## ⚖️ 5. Análise Crítica e Contra-argumentos

### Pontos Fortes da Obra
- Fornece a melhor sistematização de engenharia prática sobre como desenhar pipelines RAG de produção à prova de falhas regulatórias e jurídicas.
- Distingue com precisão cirúrgica entre a falsa citação cosmética e a verdadeira rastreabilidade de evidência no nível da sentença (*claim-level attribution*).

### Limitações e Pontos Cegos
- Trata o problema sob a ótica puramente empresarial-comercial (otimização de buscas corporativas, catálogos e políticas de RH), sem conectar esses mecanismos às implicações ético-filosóficas universais e aos dilemas de agência de AGI.
- **Avanço Realizado pela Nossa Pesquisa:** Elevamos a técnica corporativa de mitigação da Algolia ao status de uma **epistemologia formal de virtudes**. O que a Algolia chama pragmaticamente de "Lógica da Abstenção", nós fundamentamos na metafísica de *Satya*, *Santosha* e na distinção ontológica entre *Pramāṇa* (conhecimento verdadeiro) e *Vikalpa* (alucinação verbal sem referente).

### Diálogo com outros Autores do Syllabus
- **Com Edwin Bryant e Patañjali:** O capítulo da Algolia sobre "Retrieval as the Foundation of Truth" é a encarnação algorítmica do Aforismo I.7 dos *Yoga Sutras*: não há conhecimento verdadeiro (*pramāṇa*) sem contato direto com o objeto (*pratyakṣa*) ou testemunho legítimo de autoridade (*śabda*).
- **Com Luciano Floridi:** A rejeição de respostas inventadas pela Algolia materializa a tese de Floridi de que dados falsos não constituem informação, mas entropia destrutiva na Infoesfera corporativa.
