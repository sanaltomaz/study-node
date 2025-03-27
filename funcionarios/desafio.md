## **Desafio 9: Gerenciador de Funcionários**

### **Objetivo**
Criar um sistema para gerenciar funcionários de uma empresa, utilizando classes para diferenciar tipos de empregados e calcular seus salários.

---
### **📌 Requisitos**


1. **Criar uma classe `Funcionario`** com os seguintes atributos:
   - `nome` (string)
   - `salarioBase` (número)
   - `cargo` (string)

2. Criar os seguintes métodos na classe `Funcionario`:
   - `calcularSalario()` → retorna o salário final (por padrão, igual ao `salarioBase`).
   - `exibirDados()` → retorna uma string com as informações do funcionário.

3. Criar duas classes filhas que herdam de `Funcionario`:
   - **`Gerente`** → Ganha um bônus de **10%** sobre o salário-base.
   - **`Desenvolvedor`** → Ganha um bônus de **20%** sobre o salário-base.

4. Criar uma classe `Empresa` para armazenar e gerenciar os funcionários:
   - Deve possuir um array para armazenar os funcionários.
   - Método `adicionarFuncionario(funcionario)` para incluir um novo funcionário.
   - Método `listarFuncionarios()` que retorna a lista de todos os funcionários.
   - Método `calcularFolhaPagamento()` que retorna o valor total da folha de pagamento da empresa.

---

### **🎯 Exemplo de Uso**
```javascript
const empresa = new Empresa();

const funcionario1 = new Gerente("Carlos", 5000);
const funcionario2 = new Desenvolvedor("Ana", 4000);
const funcionario3 = new Funcionario("Lucas", 3000, "Assistente");

empresa.adicionarFuncionario(funcionario1);
empresa.adicionarFuncionario(funcionario2);
empresa.adicionarFuncionario(funcionario3);

console.log(empresa.listarFuncionarios());
console.log(`Folha de pagamento total: ${empresa.calcularFolhaPagamento()}`);
```

---

### **Habilidades Testadas**
✔️ **Herança e polimorfismo**  
✔️ **Uso de métodos de classe**  
✔️ **Manipulação de arrays em classes**  

---

### **🔍 Desafio Extra**
- Adicione um novo tipo de funcionário (exemplo: `Estagiario`, que recebe um bônus de 5%).
- Implemente um método que aumente o salário dos funcionários de acordo com seu cargo.

Boa sorte! 🚀

