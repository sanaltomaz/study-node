class Funcionario {
    constructor(nome, salarioBase, cargo, multiplicador = 1) {
        // Valida a entrada de dados.
        if (typeof nome !== 'string' || nome === '') {
            throw new Error('Nome de funcionário inválido.');
        }
        if (typeof salarioBase !== 'number' || salarioBase < 1000) {
            throw new Error('Salário base inválido.');
        }
        if (typeof cargo !== 'string' || cargo === '') {
            throw new Error('Cargo não valido.')
        }

        // Privatiza os parametros da classe.
        this._nome = nome; 
        this._salarioBase = salarioBase;
        this._cargo = cargo;
        this._multiplicador = multiplicador;
    }

    // Getters.
    get nome() { return this._nome; }
    get salarioBase() { return this._salarioBase; }
    get cargo() { return this._cargo; }
    get multiplicador() { return this._multiplicador; }

    // Setters.
    set salarioBase(novoSalario) {
        if (typeof novoSalario !== 'number' || novoSalario <= 1000) { 
            throw new Error('Salário inválido.') 
        }
        this._salarioBase = novoSalario;
    }
    set cargo(novoCargo) {
        if (typeof novoCargo !== 'string' || novoCargo === '') {
            throw new Error('Novo cargo inválido.')
        }
        this._cargo = novoCargo;
    }

    // Calcula o salario base.
    calcularSalario() { return this._salarioBase * this._multiplicador; }

    //Exibe dados do usuario.
    exibirDados() {
        return `Nome: ${this.nome} \n
            Cargo: ${this.cargo} \n
            Salário Base: R$: ${this.salarioBase.toFixed(2)}\n
            Salário Final: R$${this.calcularSalario().toFixed(2)}`
         
    }
}

class Gerente extends Funcionario {
    constructor(nome, salarioBase,){
        super(nome, salarioBase, 'Gerente', 1.1);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salarioBase) {
        super(nome, salarioBase, 'Desenvolvedor', 1.2);
    }
}

class Empresa {
    constructor() {
        // Cria a lista de funcionarios da empresa como um Map().
        this.funcionarios = new Map();
    }

    // Adiciona um novo funcionario.
    adicionarFuncionario(funcionario) {
        // Validações para adicionar usuario.
        if (!(funcionario instanceof Funcionario)) {
            throw new Error('Precisa ser um extensão da classe Funcionario.');
        }
        if (this.funcionarios.has(funcionario.nome)) {
            throw new Error(`Funcionário ${funcionario.nome} já existe.`);
        }
        // Adiciona o funcionario ao Map().
        this.funcionarios.set(funcionario.nome, funcionario);
    }

    // Retorna a lista de funcionarios como fum string formatada.
    listarFuncionarios() {
        return [...this.funcionarios.values()]
            .map(funcionario => `Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}.`)
            .join('\n') || 'Empresa sem funcionários registrados.';
    }

    // Calcula a folha de pagamento já com os multiplicadores.
    calcularFolhaPagamento() {
        let valorTotal = 0;
        // Para cada funcionario no quadro de funcionarios, acrescenta o valor a folha de pagamento.
        for (const funcionario of this.funcionarios.values()) {
            valorTotal += funcionario.calcularSalario();
        }
        return valorTotal; // valor total da folha de pagamento.
    }

    // Remove um funcionario com base em seu nome.
    removerFuncionario(nome) {
        // Valida se o usuaria está cadastrado no quadro de funcionarios para remoção.
        if (!this.funcionarios.has(nome)) {
            throw new Error(`Funcionário ${nome} não encontrado para desintegração.`);
        }
        this.funcionarios.delete(nome); // Remove usuário do quadro.
    }

    // Ajusta o salario de um funcionario.
    ajustarSalario(nome, novoSalario) {
        // Valida se o funcionario está cadastrado no quadro de funcionarios para ajuste salarial.
        if (!this.funcionarios.has(nome)) {
            throw new Error(`Funcionário ${nome} não encontrado para aumento salárial.`)
        }

        // Pega as informações do funcionário para modificação.
        const funcionario = this.funcionarios.get(nome);

        // Valida o tipo e se o novo salario é maior que salario anterior.
        if (typeof novoSalario !== 'number' || novoSalario <= funcionario.salarioBase) {
            throw new Error('Novo salário inválido.');
        }

        funcionario.salarioBase = novoSalario; // Atribui o novo salário ao funcionario 
    }

    // Atualiza o cargo do funcionário.
    atualizarCargo(nome, novoCargo) {
        // Valida se o nome do novo cargo é válido. 
        if (typeof novoCargo !== 'string' || novoCargo === '') {
            throw new Error(`Cargo: ${novoCargo}, inválido.`)
        }

        // Pega as informações de funcionário para modificação.
        const funcionario = this.funcionarios.get(nome);

        // Valida se o funcionario está no quadro.
        if (!funcionario) {
            throw new Error(`Funcionário ${nome} não encontrado.`)
        }
        funcionario.cargo = novoCargo; // Atribui o novo cargo ao funcionário.
    }
}

// Area de testes.

const empresa = new Empresa();

const funcionario1 = new Gerente('Carlos', 5000);
const funcionario2 = new Desenvolvedor('Ana', 4000);
const funcionario3 = new Funcionario('Lucas', 3000, 'Assistente');

try {
    empresa.adicionarFuncionario(funcionario1);
    empresa.adicionarFuncionario(funcionario2);
    empresa.adicionarFuncionario(funcionario3);
} catch (error) {   
    console.log(`Error: ${error.message}`);
}

try {
    console.log(empresa.listarFuncionarios());
    console.log(`Folha de pagamento total: ${empresa.calcularFolhaPagamento()}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}

try {
    empresa.removerFuncionario('Ana');
    console.log(empresa.listarFuncionarios());
} catch (error) {
    console.log(`Error: ${error.message}`);
}
    
try {
    empresa.ajustarSalario('Carlos', 6200);
    console.log(`Folha de pagamento total: ${empresa.calcularFolhaPagamento()}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}




