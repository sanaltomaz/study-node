import Tarefa from './Tarefa.js';
import lerDadosJSON from './dados.js';
import escreverDadosJSON from './dados.js';


class GerenciadorTarefas {
    constructor(caminho) {
        this.tarefas = new Map();
        this.caminho = caminho;
    }

    dadosBrutos = lerDadosJSON(this.caminho);

    adicionarTarefa(tarefa) {
        if(!(tarefa instanceof Tarefa)) {
            throw new Error('Tarefa inválida para ser adicionada.')
        }
        this.tarefas.set(tarefa.nome, tarefa);
        escreverDadosJSON(this.caminho, this.tarefas);
    }

    listasTodasTarefas() {
        const todas = [...this.tarefas.values()]
            .map(tarefa => `Tarefa: ${tarefa.nome}, Status: ${tarefa.status}`)
            .join('\n') || 'Nenhum livro disponível.';
        return todas;
    }
    
}

export default GerenciadorTarefas;