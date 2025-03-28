import GerenciadorTarefas from "./GerenciadorTarefas.js";
import { lerDadosJSON, escreverDadosJSON } from './dados.js';
import Tarefa from "./Tarefa.js";

const dados = "./dados.json";


const gerenciadorTarefas = new GerenciadorTarefas(dados);

gerenciadorTarefas.adicionarTarefa(new Tarefa("Estudar JavaScript"));
gerenciadorTarefas.adicionarTarefa(new Tarefa("Ler um livro"));
gerenciadorTarefas.adicionarTarefa(new Tarefa("Fazer exercícios"));

console.log(gerenciadorTarefas.listasTodasTarefas()); 

// console.log(lerDadosJSON);
// console.log(escreverDadosJSON);
