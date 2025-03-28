import GerenciadorTarefas from "./GerenciadorTarefas.js";
import Tarefa from "./Tarefa.js";

const dados = "./dados.json";

const gerenciador = new GerenciadorTarefas(dados);

// gerenciador.adicionarTarefa(new Tarefa("Fazer exercícios"))

const tarefas = gerenciador.listasTodasTarefas();
const pendentes = gerenciador.listarTarefasPorStatus('pendente');
const concluidas = gerenciador.listarTarefasPorStatus('concluído');
const andamento = gerenciador.listarTarefasPorStatus('em andamento');

// console.log("Todas as tarefas:", tarefas);

// console.log("Tarefas pendentes:", gerenciador.listarTarefasPorStatus("pendente"));

gerenciador.alterarStatus("Fazer exercícios", "concluído");

// console.log("Todas as tarefas atualizadas:", gerenciador.listarTarefas());

// gerenciador.removerTarefa("Fazer exercícios");

// console.log("Tarefas restantes:", gerenciador.listarTarefas());

