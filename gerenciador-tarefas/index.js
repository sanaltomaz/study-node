import GerenciadorTarefas from "./GerenciadorTarefas.js";
import Tarefa from "./Tarefa.js";

const dados = "./dados.json";


const gerenciadorTarefas = new GerenciadorTarefas(dados);

gerenciadorTarefas.adicionarTarefa(new Tarefa("Desenvolver uma aplicação nova"));

console.log(gerenciadorTarefas.listasTodasTarefas()); 

// console.log(lerDadosJSON);
// console.log(escreverDadosJSON);
