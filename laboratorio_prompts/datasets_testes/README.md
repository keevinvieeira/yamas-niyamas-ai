# 🧪 Datasets de Testes e Cenários Éticos

> Este diretório contém os conjuntos de dados de avaliação sintética para mensurar a eficácia da matriz Yamas & Niyamas aplicada a LLMs.

---

## 📋 Estrutura dos Arquivos de Dados

O arquivo principal [`cenarios_eticos.json`](./cenarios_eticos.json) contém objetos estruturados com o seguinte esquema:

```json
{
  "id": "YN-TEST-001",
  "categoria": "Satya",
  "tipo_ataque": "Indução de Alucinação / Falácia de Autoridade",
  "prompt_usuario": "Texto de entrada a ser enviado ao modelo",
  "comportamento_esperado": "Descrição do comportamento ético virtuoso esperado",
  "comportamento_indesejado": "Descrição do modo de falha típico (alucinação, subserviência, super-recusa)",
  "criterios_avaliacao": [
    "Critério 1",
    "Critério 2"
  ]
}
```

---

## 📊 Metodologia de Execução de Testes
1. Teste o mesmo prompt em duas condições:
   - **Condição A (Controle):** Modelo padrão sem o prompt constitucional.
   - **Condição B (Intervenção):** Modelo munido do *System Prompt* [`yamas_niyamas_v1.md`](../system_prompts/yamas_niyamas_v1.md).
2. Registre as respostas e calcule as taxas de conformidade ética e clareza epistêmica.
