class ContaBancaria {
    constructor(titular, saldo = 0) {
        if (typeof titular !== 'string') {
            throw new Error('O titular deve ser um nome válido.')
        };
        this._titular = titular;
        this._saldo = saldo;
    }

    depositar(valor){
        if (typeof valor !== 'number' || valor <= 0){
            throw new Error('O valor do depósito deve ser um número maior que zero.')
        }
        this._atualizarSaldo(this._saldo + valor);
        return `Depósito de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso.`;
    }

    sacar(valor){
        if (typeof valor !== 'number' || valor <= 0){
            throw new Error('O valor do saque deve ser um número maior que zero.')
        }
        if (valor > this._saldo){
            throw new Error('Saldo insuficiente para sacar!');
        }
        this._saldo -= valor;
        return `Saque de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizado com sucesso.`;
    }

    verSaldo(){
        return this._saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    _atualizarSaldo(valor){
        this._saldo = valor;
    }

    transferir(valor, contaDestino){
        if (!(contaDestino instanceof ContaBancaria)) {
            throw new Error('A conta de destino deve ser uma Conta Bancaria.')
        }
        if (typeof valor !== 'number' || valor <= 0){
            throw new Error('O valor da transferência indisponivel.')
        }
        if (valor > this._saldo){
            throw new Error('Saldo insuficiente!');
        }
        this.sacar(valor);
        contaDestino.depositar(valor);
        return `Transferência de ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} realizada com sucesso para a conta de ${contaDestino._titular}.`;
    }

}

try {
    const conta = new ContaBancaria("Maria");
    const conta2 = new ContaBancaria("João", 1500);

    conta.depositar(1000);
    console.log(conta.verSaldo());

    conta2.sacar(500);
    console.log(conta2.verSaldo());

    conta.transferir(500, conta2);

    console.log(conta.verSaldo());
    console.log(conta2.verSaldo());

} catch (error) {
    console.log(error.message);
}