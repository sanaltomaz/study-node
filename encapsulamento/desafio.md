# Desafio 6: Encapsulamento e Métodos Privados

## 📌 Objetivo
Compreender o conceito de **encapsulamento** e aplicar **métodos privados** para restringir o acesso a determinadas partes de um objeto.

---

## 🔹 Conceitos abordados
- **Encapsulamento**: Controlar o acesso às propriedades e métodos da classe.
- **Métodos privados**: Utilizar propriedades e métodos que não podem ser acessados diretamente de fora da classe.

---

## 🏆 Desafio

### **Parte 1: Criando a classe `ContaBancaria` com encapsulamento**

Crie uma classe `ContaBancaria` que tenha as seguintes propriedades e métodos:

1. **Propriedades:**
   - `_titular` (string)
   - `_saldo` (número, começa com 0)

2. **Métodos públicos:**
   - `depositar(valor)`: Adiciona o valor ao saldo.
   - `sacar(valor)`: Retira o valor do saldo **somente se houver saldo suficiente**.
   - `verSaldo()`: Retorna o saldo formatado.

3. **Métodos privados:**
   - `_atualizarSaldo(valor)`: Um método interno para alterar o saldo, garantindo a regra de negócio.

---

## ✏️ Exemplo esperado:

```javascript
const conta = new ContaBancaria("Maria");
conta.depositar(1000);
console.log(conta.verSaldo()); // "Saldo atual: R$ 1.000,00"

conta.sacar(300);
console.log(conta.verSaldo()); // "Saldo atual: R$ 700,00"

conta.sacar(1000); // Deve exibir um erro: "Saldo insuficiente!"
```

---

## 🚀 Desafio Extra (Opcional)
1. **Impedir saque negativo**: Se o valor for negativo, exibir um erro.
2. **Criar um método `transferir(valor, contaDestino)`**: Esse método deve permitir transferir dinheiro de uma conta para outra.

---

## 🔎 O que você deve observar?
✔️ O saldo só pode ser alterado pelos métodos definidos?
✔️ O método privado `_atualizarSaldo()` é usado corretamente?
✔️ O encapsulamento impede acessos indevidos?

---


