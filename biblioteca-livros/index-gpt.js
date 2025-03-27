class Livro {
    constructor(titulo, autor, anoPublicacao, emprestado = false) {
        if (typeof titulo !== 'string' || titulo.trim() === '') {
            throw new Error('Nome de livro inválido.');
        }
        if (typeof autor !== 'string' || autor.trim() === '') {
            throw new Error('Nome do autor inválido.');
        }
        if (typeof anoPublicacao !== 'number' || anoPublicacao <= 0) {
            throw new Error('Ano de publicação inválido.');
        }

        this._titulo = titulo;
        this._autor = autor;
        this._anoPublicacao = anoPublicacao;
        this._emprestado = emprestado;
    }

    get titulo() { return this._titulo; }
    get autor() { return this._autor; }
    get anoPublicacao() { return this._anoPublicacao; }
    get emprestado() { return this._emprestado; }
    set emprestado(value) { this._emprestado = value; }
}

class Biblioteca {
    constructor() {
        this.livros = new Map();
    }
    
    adicionarLivro(livro) {
        if (!(livro instanceof Livro)) {
            throw new Error('O item adicionado deve ser uma instância da classe Livro.');
        }
        this.livros.set(livro.titulo, livro);
    }

    emprestarLivro(titulo) {
        const livro = this.livros.get(titulo);
        if (!livro) throw new Error('Livro não encontrado para emprestar.');
        if (livro.emprestado) throw new Error('Livro já está emprestado.');

        livro.emprestado = true;
        return `Livro "${titulo}" emprestado com sucesso.`;
    }

    devolverLivro(titulo) {
        const livro = this.livros.get(titulo);
        if (!livro) throw new Error('Livro não encontrado para devolver.');
        if  (!livro.emprestado) throw new Error('Livro já está disponível.');

        livro.emprestado = false;
        return `Livro "${titulo}" devolvido com sucesso.`;
    }

    listarLivrosDisponiveis() {
        const disponiveis = [...this.livros.values()]
            .filter(livro => !livro.emprestado)
            .map(livro => `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.anoPublicacao}`)
            .join('\n') || 'Nenhum livro disponível.';
            
        return disponiveis;
    }

    listarTodosLivros() {
        const todos = [...this.livros.values()]
            .map(livro => `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.anoPublicacao}, Emprestado: ${livro.emprestado ? 'Sim' : 'Não'}`)
            .join('\n') || 'A biblioteca está vazia.';
        
        return todos;
    }

    removerLivro(titulo) {
        if (!this.livros.has(titulo)) {
            throw new Error('Livro não encontrado para remover.');
        }
        this.livros.delete(titulo);
        return `Livro "${titulo}" removido com sucesso.`;
    }
}

// Testes
try {
    const biblioteca = new Biblioteca();

    const livro1 = new Livro("1984", "George Orwell", 1949);
    const livro2 = new Livro("Dom Casmurro", "Machado de Assis", 1899);

    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);

    console.log(biblioteca.listarLivrosDisponiveis());

    console.log(biblioteca.emprestarLivro("1984"));
    console.log(biblioteca.listarLivrosDisponiveis());

    console.log(biblioteca.devolverLivro("1984"));
    console.log(biblioteca.listarLivrosDisponiveis());

} catch (error) {
    console.log(error.message);
}
