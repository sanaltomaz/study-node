class Animal {
    constructor(nome, idade) {
        if(typeof nome !== 'string'){
            throw new Error('Nome precisa ser uma palavra.')
        }

        if(typeof idade !== 'number'){
            throw new Error('Idade precisa ser um número.')
        }

        this._nomenome = nome;
        this.idade = idade;
        
    }

    emitirSom(){
        console.log('Este animal faz um som.');
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        if (typeof raca !== 'string') {
            throw new Error('Raça do cachorro inválida.')
        }

        super(nome, idade);
        this.raca = raca;
    }

    emitirSom(){
        console.log('Cachorro está latindo: ');
        console.log('Au.. Au');
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        if (typeof cor !== 'string') {
            throw new Error('Cor do gato inválida.')
        }

        super(nome, idade);
        this.cor = cor
    }

    emitirSom(){
        console.log('Gato está latindo: ');
        console.log('Miau..');
    }
}

try {
    const cachorro = new Cachorro('Bob Mel', 1, 'Labrador');
    const gato = new Gato('Satanas', 2, 'Preto');

    cachorro.emitirSom();
    gato.emitirSom();
} catch (error) {
    console.log(error.message);
    
}