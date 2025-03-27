# Desafio 7: Polimorfismo e Métodos Estáticos

## 📌 Objetivo
Aprofundar o entendimento sobre **polimorfismo** em JavaScript e aplicar métodos estáticos para diferentes tipos de contas bancárias.

---

## 🔹 Conceitos abordados
- **Herança e polimorfismo**: Criar subclasses que sobrescrevem métodos da classe base.
- **Métodos estáticos**: Criar métodos auxiliares que não dependem de uma instância.

---

## 🏆 Desafio

### **Parte 1: Criando a Classe Base `ContaBancaria`**
Crie uma classe chamada `ContaBancaria` com os seguintes atributos e métodos:

1. **Propriedades**:
   - `_titular` (string)
   - `_saldo` (número)

2. **Métodos**:
   - `depositar(valor)`: Adiciona um valor ao saldo, garantindo que seja positivo.
   - `sacar(valor)`: Subtrai um valor do saldo, garantindo que não ultrapasse o saldo disponível.

### **Parte 2: Criando Subclasses**
Crie duas classes que herdam de `ContaBancaria`:

1. **`ContaCorrente`**:
   - Deve sobrescrever o método `sacar(valor)`, adicionando uma **taxa de 5%** sobre o valor sacado.

2. **`ContaPoupanca`**:
   - Deve sobrescrever o método `sacar(valor)`, permitindo saque **somente se o saldo for maior que R$ 100,00**.

### **Parte 3: Criando Métodos Estáticos**
Na classe `ContaBancaria`, crie um método estático chamado `transferir(contaOrigem, contaDestino, valor)`, que:
- Retira o valor da `contaOrigem` e adiciona à `contaDestino`, garantindo que a `contaOrigem` tenha saldo suficiente.

---

## ✏️ Exemplo esperado:
```javascript
const conta1 = new ContaCorrente("João", 1000);
const conta2 = new ContaPoupanca("Maria", 500);

conta1.sacar(100);  // Deve aplicar taxa de 5%
console.log(conta1.saldo); // Deve exibir 895

conta2.sacar(450);  // Não deve permitir saque abaixo de 100
console.log(conta2.saldo); // Deve permanecer 500

ContaBancaria.transferir(conta1, conta2, 200);
console.log(conta1.saldo); // 695
console.log(conta2.saldo); // 700
```

---

## 🔎 O que você deve observar?
✔️ A herança está funcionando corretamente?
✔️ Os métodos das subclasses estão sobrescrevendo corretamente?
✔️ O método de transferência respeita as regras?

---
