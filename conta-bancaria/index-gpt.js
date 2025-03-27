class ContaBancaria {
    constructor(titular, saldo) {
        if (typeof titular !== 'string' || titular.trim() === '') {
            throw new Error('Titular inválido.');
        };
        if (typeof saldo !== 'number' || saldo < 0) {
            throw new Error('Saldo inicial inválido.');
        };

        this._titular = titular;
        this._saldo = saldo;
    }

    get titular() {
        return this._titular;
    }

    get saldo() {
        return this._saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    set titular(novoTitular) { 
        if (typeof novoTitular !== 'string' || novoTitular.trim() === '') {
            throw new Error('Nome do titular inválido.');
        }
        this._titular = novoTitular;
    }

    depositar(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('O valor do depósito deve ser maior que zero.');
        } 
        this._saldo += valor;
    }
    
    sacar(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('O valor do saque deve ser maior que zero.');
        }
        if (valor > this._saldo) {
            throw new Error('Saldo insuficiente para realizar o saque.');
        }
        this._saldo -= valor;
    }
}

// Testando a classe
const minhaConta = new ContaBancaria("Carlos", 1000);

console.log("Titular:", minhaConta.titular);
console.log("Saldo:", minhaConta.saldo);

minhaConta.depositar(500);
console.log("Saldo após depósito:", minhaConta.saldo);

minhaConta.sacar(200);
console.log("Saldo após saque:", minhaConta.saldo);

minhaConta.titular = "Ana";
console.log("Novo titular:", minhaConta.titular);

try {
    minhaConta.sacar(5000);
} catch (error) {
    console.log("Erro ao sacar:", error.message);
}
