# Desafio 3: Getters, Setters e Manipulação de Propriedades Privadas

## 📌 Objetivo
Praticar o uso de **getters, setters** e a manipulação de **propriedades privadas** para controlar o acesso e a validação de dados dentro de uma classe.

---

## 🔹 Conceitos abordados
- **Encapsulamento**: Proteger propriedades para evitar manipulação direta.
- **Getters e Setters**: Controlar a leitura e modificação de atributos.
- **Validação de dados**: Garantir que apenas valores válidos sejam atribuídos às propriedades.

---

## 🏆 Desafio

### **Parte 1: Criando a classe `ContaBancaria`**

Crie uma classe chamada `ContaBancaria` com as seguintes propriedades e métodos:

1. **Propriedades (privadas)**:
   - `_titular` (string - nome do titular da conta)
   - `_saldo` (número - saldo da conta)

2. **Método Construtor**:
   - Deve receber os valores iniciais de `titular` e `saldo`, garantindo que `saldo` seja um número positivo.

3. **Getters e Setters**:
   - Criar um `getter` para `titular` que retorna o nome do titular.
   - Criar um `setter` para `titular` que permite alterar o nome apenas se for uma string válida.
   - Criar um `getter` para `saldo` que retorna o saldo formatado em moeda.
   - O saldo **não pode ser alterado diretamente** (não deve ter um `setter`).

4. **Métodos**:
   - `depositar(valor)`: Aumenta o saldo apenas se o valor for positivo.
   - `sacar(valor)`: Diminui o saldo apenas se houver saldo suficiente.

---

## ✏️ Exemplo esperado:
```javascript
const minhaConta = new ContaBancaria("Carlos", 1000);

console.log(minhaConta.titular); // "Carlos"
console.log(minhaConta.saldo); // "R$ 1.000,00"

minhaConta.depositar(500);
console.log(minhaConta.saldo); // "R$ 1.500,00"

minhaConta.sacar(200);
console.log(minhaConta.saldo); // "R$ 1.300,00"

minhaConta.titular = "Ana";
console.log(minhaConta.titular); // "Ana"

minhaConta.sacar(5000); // Deve exibir uma mensagem de erro (saldo insuficiente)
```

---

## 🚀 Desafio Extra (Opcional)
1. Impedir que o nome do titular seja alterado para uma string vazia.
2. Modificar a exibição do saldo para exibir sempre duas casas decimais (Exemplo: "R$ 1.300,00").

---

## 🔎 O que você deve observar?
✔️ Criou corretamente os **getters** e **setters**?
✔️ Protegeu o saldo contra modificações diretas?
✔️ Implementou as validações corretamente?

---

🔹 **Teste seu código e volte para discutir a solução!** 🚀

