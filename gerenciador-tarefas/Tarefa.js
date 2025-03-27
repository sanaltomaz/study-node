class Tarefa {
    // Campo privado.
    #nome
    #status
    constructor(nome, status = 'em andamento') {
        this.#nome = nome;
        this.#status = status;
    }

    // Pegar o nome e o status da tarefa.
    get nome() {
        return this.#nome;
    }
    get status() {
        return this.#status;
    }

    // Alterar o nome e o status da tarefa.
    set nome(nome) {
        this.#nome = nome;
    }
    set status(status) {
        this.#status = status;
    }
}

export default Tarefa;