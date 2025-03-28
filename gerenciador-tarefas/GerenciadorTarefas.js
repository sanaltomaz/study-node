import Tarefa from './Tarefa.js';
import { lerDadosJSON, escreverDadosJSON } from './dados.js';

class GerenciadorTarefas {
    constructor(caminho) {
        this.tarefas = new Map();
        this.caminho = caminho;
        this.dadosBrutos = lerDadosJSON(this.caminho);

        // Verifica se os dados lidos são um array
        if (!Array.isArray(this.dadosBrutos)) {
            throw new Error('Os dados devem ser um array.');
        }

        // Lê os dados do arquivo JSON e inicializa as tarefas
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
            // Envia a tarefa para o Map como uma nova Tarefa
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

    listarTarefasPorStatus(status) {
        const tarefasFiltradas = [...this.tarefas.values() // Converte o Map em um array
            .filter(tarefa => tarefa.status === status) // Filtra as tarefas pelo status
            .map(tarefa => `Tarefa: ${tarefa.nome}, Status: ${tarefa.status}`)] // Mapeia as tarefas filtradas para uma string
            || "Nenhuma tarefa encontrada com esse status."; 
        return tarefasFiltradas;
    }

    removeTarefa(nome) {
        if (!this.tarefas.has(nome)) {
            throw new Error(`Tarefa com o nome ${nome} não encontrada.`);
        }
        this.tarefas.delete(nome); // Remove a tarefa do Map
        escreverDadosJSON(this.caminho, this.tarefas); // Salva as alterações no arquivo JSON
        console.log(`Tarefa ${nome} removida com sucesso.`); // Mensagem de sucesso
    }

    alterarStatus(nome, novoStatus) {
        if (!this.tarefas.has(nome)) {
            throw new Error(`Tarefa com o nome ${nome} não encontrada para alterar o status.`);
        }
        const tarefa = this.tarefas.get(nome);
        tarefa.status = novoStatus
        this.tarefas.set(nome, tarefa); // Atualiza a tarefa no Map
        escreverDadosJSON(this.caminho, this.tarefas); // Salva as alterações no arquivo JSON
        console.log(`Status da tarefa ${nome} alterado para ${novoStatus}.`); // Mensagem de sucesso
    }

}

export default GerenciadorTarefas;