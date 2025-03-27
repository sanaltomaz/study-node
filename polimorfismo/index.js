class ContaBancaria {
    constructor(titular, saldo = 0) {
        if (typeof titular !== 'string') {
            throw new Error('O titular da conta deve ser uma string.');
        }
        if (typeof saldo !== 'number') {
            throw new Error('O saldo da conta deve ser um número.');
        }
        this._titular = titular;
        this._saldo = saldo;
    }

    // Função para deposito.
    depositar(valor){
        if (typeof valor !== 'number') {
            throw new Error('O valor do depósito deve ser um número.');
        };
        if (valor == 0){
            throw new Error('O valor do depósito deve ser maior que zero.');
        }
        this._atualizarSaldo(this._saldo + valor);
        return `Depósito de ${this._saldoFormatado(valor)} realizado com sucesso.`;
        // return `Depósito de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso.`;
    };

    // Função para saque.
    sacar(valor){
        if (typeof valor !== 'number'){
            throw new Error('O valor do saque deve ser um número.');
        }
        if (valor > this._saldo){
            throw new Error('Saldo insuficiente.');
        }
        if (valor <= 0){
            throw new Error('O valor do saque deve ser maior que zero.');
        }
        this._atualizarSaldo(this._saldo - valor);
        return `Saque de ${this._saldoFormatado(valor)} realizado com sucesso.`;
        //return `Saque de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso.`;
    }

    // Função para ver saldo.
    verSaldo(){
        return `Saldo em conta: ${this._saldoFormatado(this._saldo)}`
        // return `Saldo em conta: ${this._saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }

    // Função interna para atualizar saldo.
    _atualizarSaldo(valor){
        this._saldo = valor;
    }

    _saldoFormatado(valor){
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }


    static transferir(contaOrigem, contaDestino, valor){
        if (!(contaOrigem instanceof ContaBancaria) || !(contaDestino instanceof ContaBancaria)){
            throw new Error('As contas de origem e destino devem ser instâncias da classe ContaBancaria.');
        }
        if (typeof valor !== 'number'){
            throw new Error('O valor da transferência deve ser um número.');
        }
        if (valor <= 0){
            throw new Error('O valor da transferência deve ser maior que zero.');
        }
        if (valor > contaOrigem._saldo){
            throw new Error('Saldo insuficiente.');
        }
        contaOrigem._atualizarSaldo(contaOrigem._saldo - valor);
        contaDestino._atualizarSaldo(contaDestino._saldo + valor);

        // const tempConta = new ContaBancaria('');
        return `Transferência de ${contaOrigem._saldoFormatado(valor)} realizada com sucesso;`;
        // return `Transferência de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizada com sucesso.`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo = 0) {
        super(titular, saldo);
    }

    sacar(valor, taxa = 1.05){
        const valorSaque = valor * taxa;
        if (typeof valor !== 'number') {
            throw new Error('O valor do saque deve ser um número.');
        }
        if (valorSaque > this._saldo){
            throw new Error('Saldo insuficiente.');
        }
        this._atualizarSaldo(this._saldo - valorSaque);
        return `Saque de ${this._saldoFormatado(valor)} realizado com sucesso com uma taxa de ${this._saldoFormatado(valorSaque - valor)}.`
        // return `Saque de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso com.`;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(titular, saldo = 0){
        super(titular, saldo)
    }

    sacar(valor){
        if (typeof valor !== 'number') {
            throw new Error('O valor do saque deve ser um número.');
        }
        if (valor > this._saldo) {
            throw new Error('Saldo insuficiente.');
        }
        if (valor <= 0) {
            throw new Error('O valor do saque deve ser maior que zero.');
        }
        if (this._saldo <= 100) {
            throw new Error('Saque disponivel apenas com saldo de conta acima de R$ 100,00.');
        }
        this._atualizarSaldo(this._saldo - valor);
        return `Saque de ${this._saldoFormatado(valor)} realizado com sucesso.`;
    }

}

try {
    const conta1 = new ContaCorrente("João", 1000);
    const conta2 = new ContaPoupanca("Maria", 500);

    conta1.sacar(100);  
    console.log(conta1.verSaldo()); 

    conta2.sacar(450);  
    console.log(conta2.verSaldo()); 

    ContaBancaria.transferir(conta1, conta2, 200);
    console.log(conta1.verSaldo()); 
    console.log(conta2.verSaldo()); 
} catch (error) {
    console.log(error.message);
}


