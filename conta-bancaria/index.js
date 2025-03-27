class ContaBancaria {
    constructor(titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
    }

    get titular() {
        return this._titular;
    }

    get saldo() {
        return this._saldo;
    }

    set titular(novoTitular){ 
        if (typeof novoTitular !== 'string' || novoTitular === '') {
            throw new Error('Novos dados de titular indisponíveis.');
        }
        this._titular = novoTitular;
    }

    depositar(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('Valor de depósito inválido.');
        } 
        this._saldo += valor;
    }
    
    sacar(valor) {
        if (typeof valor !== 'number' || valor <= 0 || valor > this._saldo) {
            throw new Error('Valor de saque inválido.')
        }
        this._saldo -= valor;
    }

}

const minhaConta = new ContaBancaria("Carlos", 1000);

console.log(minhaConta.titular); // "Carlos"
console.log(minhaConta.saldo); // "R$ 1.000,00"

minhaConta.depositar(500);
console.log(minhaConta.saldo); // "R$ 1.500,00"

minhaConta.sacar(200);
console.log(minhaConta.saldo); // "R$ 1.300,00"

minhaConta.titular = "Ana";
console.log(minhaConta.titular); // "Ana"

try {
    minhaConta.sacar(5000); // Deve exibir uma mensagem de erro (saldo insuficiente)    
} catch (error) {
    console.log(error.message);
}
