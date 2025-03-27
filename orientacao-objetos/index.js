class Pessoa {
    constructor(nome, idade, profissao){ 
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    };

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`);   
    };
}

const pessoa = new Pessoa('João', 20, 'programador');
pessoa.apresentar(); // Olá, meu nome é João e eu tenho 20 anos.

const pessoa2 = new Pessoa('Maria', 25, 'designer');
pessoa2.apresentar(); // Olá, meu nome é Maria e eu tenho 25 anos.

const pessoa3 = new Pessoa('Carlos', 30, 'médico');
pessoa3.apresentar(); // Olá, meu nome é Carlos e eu tenho 30 anos.