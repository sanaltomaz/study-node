import Tarefa from './Tarefa.js';
import { lerDadosJSON, escreverDadosJSON } from './dados.js';

class GerenciadorTarefas {
    constructor(caminho) {
        this.tarefas = new Map();
        this.caminho = caminho;
        this.dadosBrutos = lerDadosJSON(this.caminho);

        // Preenche o Map com os dados lidos do arquivo JSON.
        // Cada tarefa é criada como uma instância da classe Tarefa.
        // O Map é usado para garantir que não haja tarefas duplicadas.
        // O nome da tarefa é usado como chave.
        for (const tarefa of this.dadosBrutos) {
            if (this.tarefas.has(tarefa.nome)) {
                throw new Error(`Tarefa com o nome ${tarefa.nome} já existe.`);
            }
            if (typeof tarefa.nome !== 'string' || typeof tarefa.status !== 'string') {
                throw new Error('Nome e status da tarefa devem ser strings.');
            }
            if (!['pendente', 'em andamento', 'concluído'].includes(tarefa.status)) {
                throw new Error('Status inválido. Deve ser "pendente", "em andamento" ou "concluído".');
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