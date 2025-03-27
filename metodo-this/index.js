class Pessoa {
    constructor(nome, idade, profissao) {
        if (typeof nome !== 'string' || typeof idade !== 'number' || typeof profissao !== 'string') {
            throw new Error('Os valores informados não são válidos');
        }

        this._nome = nome;
        this._idade = idade;
        this._profissao = profissao;
        
    }
    
    // Retorna uma string com a apresentação da pessoa.
    get descricao() {
        return `Olá, eu sou ${this._nome}, tenho ${this._idade} anos e sou ${this._profissao}.`;
    }

    set idade(novaIdade) {
        if (typeof novaIdade !== 'number' || novaIdade < 0){
            throw new Error('O valor informado não é válido');
        }
        this._idade = novaIdade;
    }

    // Aumenta a idade da pessoa em anos informados.
    envelhecer(anos){
        if (typeof anos !== 'number' || anos <= 0){
            throw new Error('O valor informado não é válido');
        }
        this._idade = this._idade + anos;
    }
    
    // Muda a profissão da pessoa.
    mudarProfissao(novaProfissao) {
        if (typeof novaProfissao !== 'string' || novaProfissao === '') {
            throw new Error('O valor informado não é válido');
        }
        this._profissao = novaProfissao;
    }
}

const pessoa = new Pessoa('João', 25, 'Engenheiro');

console.log(pessoa.descricao);

pessoa.envelhecer(-2);
console.log(pessoa.descricao);

pessoa.mudarProfissao('Desenvolvedor');
console.log(pessoa.descricao);


