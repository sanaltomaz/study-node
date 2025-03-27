class Livro {
    constructor(titulo, autor, anoPublicacao, emprestado = false) {
        if (typeof titulo !== 'string' || titulo === '') {
            throw new Error('Nome de livro inválido.');
        }
        if (typeof autor !== 'string' || autor === '') {
            throw new Error('Nome do autor inválido.');
        }
        if (typeof anoPublicacao !== 'number') {
            throw new Error('Ano de publicação inválido.');
        }

        this._titulo = titulo;
        this._autor = autor;
        this._anoPublicacao = anoPublicacao;
        this._emprestado = emprestado;
    }

    get titulo() {
        return this._titulo;
    }

    get autor() {
        return this._autor;
    }

    get anoPublicacao() {
        return this._anoPublicacao;
    }

    get emprestado() {
        return this._emprestado;
    }

    set emprestado(value) {
        this._emprestado = value;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }
    
    // Adiciona um livro à lista de livros da Biblioteca
    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    // Empresta um livro, tornando-o indisponível
    emprestarLivro(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo);
        if (!livro) {
            throw new Error('Livro não encontrado para emprestar.');
        }
        if (livro.emprestado) {
            throw new Error('Livro já está emprestado.');
        }
        livro.emprestado = true;
    }

    // Devolve um livro, tornando-o disponível
    devolverLivro(titulo) {
        const livro = this.livros.find(l => l.titulo === titulo);
        if (!livro) {
            throw new Error('Livro não encontrado para devolver.');
        }
        if (!livro.emprestado) {
            throw new Error('Livro já está disponível.');
        }
        livro.emprestado = false;
    }

    // Lista livros disponíveis
    listarLivrosDisponiveis() {
        if (this.livros.length === 0) {
            throw new Error('Biblioteca sem livros disponíveis para listagem.');
        }
        let livrosDisponiveis = '';
        this.livros.forEach(livro => {
            if (!livro.emprestado) {
                livrosDisponiveis += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.anoPublicacao}\n`;
            }
        });
        return livrosDisponiveis.trim();
    }

    // Lista todos os livros da biblioteca
    listarTodosLivros() {
        if (this.livros.length === 0) {
            throw new Error('Biblioteca sem livros.');
        }
        let todosLivros = ''
        this.livros.forEach(livro => {
            todosLivros += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.anoPublicacao}, Emprestado: ${livro.emprestado}\n`;
        });
        return todosLivros.trim();
    }

    // Remove um livro da biblioteca
    removerLivro(titulo) {
        const index = this.livros.findIndex(l => l.titulo === titulo);
        if (index === -1) {
            throw new Error('Livro não encontrado para remover.');
        }
        this.livros.splice(index, 1);
    }
}

// Zona de testes: 
try {
    const biblioteca = new Biblioteca();

    const livro1 = new Livro("1984", "George Orwell", 1949);
    const livro2 = new Livro("Dom Casmurro", "Machado de Assis", 1899);

    biblioteca.adicionarLivro(livro1);
    biblioteca.adicionarLivro(livro2);

    console.log(biblioteca.listarLivrosDisponiveis()); // Mostra os livros disponíveis

    biblioteca.emprestarLivro("1984");
    console.log(biblioteca.listarLivrosDisponiveis()); // Mostra apenas "Dom Casmurro"

    biblioteca.devolverLivro("1984");
    console.log(biblioteca.listarLivrosDisponiveis()); // "1984" aparece novamente na lista
} catch (error) {
    console.log(error.message);
    
}