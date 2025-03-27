import GerenciadorTarefas from "./GerenciadorTarefas.js";

const caminho = "./dados.json";

const gerenciadorTarefas = new GerenciadorTarefas(caminho);


console.log(gerenciadorTarefas.dados); 