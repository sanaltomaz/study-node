import Tarefa from './Tarefa.js';
import { lerDadosJSON, escreverDadosJSON } from './dados.js';

class GerenciadorTarefas {
    constructor(caminho) {
        this.tarefas = new Map();
        this.caminho = caminho;
        this.dadosBrutos = lerDadosJSON(this.caminho);

        if (!Array.isArray(this.dadosBrutos)) {
            throw new Error('Os dados devem ser um array.');
        }

        for (const tarefa of this.dadosBrutos) {
            if (this.tarefas.has(tarefa.nome)) {
                throw new Error(`Tarefa com o nome ${tarefa.nome} já existe.`);
            }
            if (tarefa.nome.length < 3) {
                throw new Error('Nome da tarefa deve ter pelo menos 3 caracteres.');
            }
            if (tarefa.nome.length > 50) {
                throw new Error('Nome da tarefa deve ter no máximo 50 caracteres.');
            }
            this.tarefas.set(tarefa.nome, new Tarefa(tarefa.nome, tarefa.status));
        }
    }

    adicionarTarefa(tarefa) {
        try {    
            if (!(tarefa instanceof Tarefa)) {
                throw new Error('Tarefa inválida para ser adicionada.');
            }
            if (!tarefa.nome || typeof tarefa.nome !== 'string' || tarefa.nome.trim().length === 0) {
                throw new Error('O nome da tarefa é obrigatório e deve ser uma string não vazia.');
            }
            if (!tarefa.status || typeof tarefa.status !== 'string') {
                throw new Error('O status da tarefa é obrigatório e deve ser uma string.');
            }
            if (this.tarefas.has(tarefa.nome)) {
                throw new Error(`Tarefa com o nome ${tarefa.nome} já existe.`);
            }
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error.message);
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