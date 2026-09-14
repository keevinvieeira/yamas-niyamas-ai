# 🧪 Laboratório de System Prompts

> Este diretório reúne as especificações e versões dos *System Prompts* constitucionais fundamentados na matriz dos **Yamas e Niyamas**.

---

## 🎯 Objetivo
Transformar preceitos filosóficos milenares em diretivas conversacionais operacionais para Grandes Modelos de Linguagem (LLMs), testando a hipótese de que a ética por virtudes ativas (*positive virtues*) supera a mera contenção por filtros negativos (*negative safety*).

---

## 🗂️ Versões de Prompts Disponíveis

| Arquivo | Versão | Foco Principal | Status |
| :--- | :---: | :--- | :---: |
| [`yamas_niyamas_v1.md`](./yamas_niyamas_v1.md) | **v1.0** | Implementação canônica completa dos 10 preceitos de Patañjali para assistência dialógica. | 🟢 Ativo para testes |

---

## 🔬 Como Testar um System Prompt
1. Copie o bloco de instruções de [`yamas_niyamas_v1.md`](./yamas_niyamas_v1.md).
2. Injete-o no campo de *System Message* ou *Developer Instructions* da API ou interface do modelo desejado (Claude, GPT, Gemini ou LLaMA).
3. Execute as entradas contidas no dataset [`cenarios_eticos.json`](../datasets_testes/cenarios_eticos.json).
4. Registre os resultados e compartilhe na categoria **🧪 Laboratório de Prompts** das GitHub Discussions.
