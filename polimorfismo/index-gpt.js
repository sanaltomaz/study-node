class ContaBancaria {
    constructor(titular, saldo = 0) {
        if (typeof titular !== 'string' || titular.trim() === '') {
            throw new Error('O titular da conta deve ser um nome válido.');
        }
        if (typeof saldo !== 'number' || saldo < 0) {
            throw new Error('O saldo inicial deve ser um número não negativo.');
        }
        this._titular = titular;
        this._saldo = saldo;
    }

    depositar(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('O valor do depósito deve ser um número maior que zero.');
        }
        this._saldo += valor;
        return `Depósito de ${this._formatarMoeda(valor)} realizado com sucesso.`;
    }

    sacar(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('O valor do saque deve ser um número maior que zero.');
        }
        if (valor > this._saldo) {
            throw new Error('Saldo insuficiente para saque.');
        }
        this._saldo -= valor;
        return `Saque de ${this._formatarMoeda(valor)} realizado com sucesso.`;
    }

    verSaldo() {
        return `Saldo atual: ${this._formatarMoeda(this._saldo)}`;
    }

    _formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    static transferir(contaOrigem, contaDestino, valor) {
        if (!(contaOrigem instanceof ContaBancaria) || !(contaDestino instanceof ContaBancaria)) {
            throw new Error('As contas de origem e destino devem ser instâncias de ContaBancaria.');
        }
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        return `Transferência de ${contaOrigem._formatarMoeda(valor)} realizada com sucesso.`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(titular, saldo = 0) {
        super(titular, saldo);
    }

    sacar(valor) {
        const taxa = 1.05;
        const valorComTaxa = valor * taxa;
        if (valorComTaxa > this._saldo) {
            throw new Error('Saldo insuficiente para saque com taxa.');
        }
        this._saldo -= valorComTaxa;
        return `Saque de ${this._formatarMoeda(valor)} realizado com taxa de ${this._formatarMoeda(valorComTaxa - valor)}.`;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(titular, saldo = 0) {
        super(titular, saldo);
    }

    sacar(valor) {
        if (this._saldo <= 100) {
            throw new Error('Saques só são permitidos com saldo acima de R$ 100,00.');
        }
        return super.sacar(valor);
    }
}

try {
    const conta1 = new ContaCorrente("João", 1000);
    const conta2 = new ContaPoupanca("Maria", 500);

    console.log(conta1.sacar(100));  
    console.log(conta1.verSaldo());

    console.log(conta2.sacar(450));  
    console.log(conta2.verSaldo());

    console.log(ContaBancaria.transferir(conta1, conta2, 200));
    console.log(conta1.verSaldo());
    console.log(conta2.verSaldo());
} catch (error) {
    console.log(error.message);
}
