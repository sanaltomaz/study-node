# Desafio 11 - Gerenciador de Tarefas

## Objetivo
Desenvolver um sistema simples de gerenciamento de tarefas utilizando **Node.js** e **classes**. O sistema deve permitir a criação, listagem, filtragem, atualização e remoção de tarefas.

---

## Requisitos
- Criar uma classe `Tarefa` que contenha:
  - Um **título** (obrigatório e único).
  - Um **status** com os seguintes valores: `pendente`, `em andamento`, `concluída`.
- Criar uma classe `GerenciadorTarefas` que permita:
  1. **Adicionar uma nova tarefa** (com validação de título vazio ou duplicado).
  2. **Listar todas as tarefas registradas**.
  3. **Filtrar tarefas por status** (`pendente`, `em andamento`, `concluída`).
  4. **Marcar uma tarefa como concluída**.
  5. **Remover uma tarefa pelo seu título**.
- Armazenar as tarefas dentro de um **array** na classe `GerenciadorTarefas`.
- Utilizar **validações** adequadas para garantir a integridade dos dados.
- Implementar funções **assíncronas** para manipulação das tarefas.

---

## Exemplo de Uso Esperado

```javascript
const gerenciador = new GerenciadorTarefas();

gerenciador.adicionarTarefa("Estudar Node.js", "pendente");
gerenciador.adicionarTarefa("Fazer exercícios", "em andamento");

tarefas = gerenciador.listarTarefas();
console.log("Todas as tarefas:", tarefas);

console.log("Tarefas pendentes:", gerenciador.filtrarTarefas("pendente"));

gerenciador.marcarComoConcluida("Estudar Node.js");

console.log("Todas as tarefas atualizadas:", gerenciador.listarTarefas());

gerenciador.removerTarefa("Fazer exercícios");

console.log("Tarefas restantes:", gerenciador.listarTarefas());
```

---

## Desafios Adicionais (Opcional)
- Implementar **persistência de dados** utilizando um arquivo JSON para armazenar as tarefas.
- Criar uma **interface de linha de comando (CLI)** para interagir com o sistema.
- Permitir **edição de uma tarefa**, alterando seu título e status.

---


