# Desafio 2: Explorando o `this` e Métodos na Classe

## 📌 Objetivo
Aprofundar o entendimento sobre o uso do `this` dentro de classes e criar métodos adicionais para manipular os atributos do objeto.

---

## 🔹 Conceitos abordados
- Uso correto do **`this`** dentro dos métodos de uma classe.
- Criar métodos para **atualizar atributos** de um objeto.
- Implementar um **getter** e um **setter**.

---

## 🏆 Desafio

### **Parte 1: Criando a classe `Pessoa` com métodos adicionais**
Modifique a classe `Pessoa` para adicionar os seguintes métodos:

1. **Método `envelhecer(anos)`**
   - Aumenta a idade da pessoa pelo número de anos informado.

2. **Método `mudarProfissao(novaProfissao)`**
   - Altera a profissão da pessoa para a nova profissão informada.

3. **Getter `descricao`**
   - Retorna uma string descrevendo a pessoa:
     _"Olá, meu nome é [nome], tenho [idade] anos e sou [profissao]."_

---

## ✏️ Exemplo esperado
```javascript
const pessoa = new Pessoa("Ana", 28, "Engenheira");

console.log(pessoa.descricao); 
// "Olá, meu nome é Ana, tenho 28 anos e sou Engenheira."

pessoa.envelhecer(3);
console.log(pessoa.descricao); 
// "Olá, meu nome é Ana, tenho 31 anos e sou Engenheira."

pessoa.mudarProfissao("Gerente de Projetos");
console.log(pessoa.descricao); 
// "Olá, meu nome é Ana, tenho 31 anos e sou Gerente de Projetos."
```

---

## 🔎 O que você deve observar?
✔️ O `this` está sendo usado corretamente para referenciar os atributos?
✔️ Os métodos modificam corretamente os valores da instância?
✔️ O getter `descricao` retorna a string formatada corretamente?

---

### 🚀 **Desafio Extra (Opcional)**
1. Adicione um método `cumprimentar(outraPessoa)`, que recebe um nome e retorna uma mensagem do tipo:
   _"Olá [outraPessoa], meu nome é [nome]!"_
   
2. Impedir que a idade seja reduzida ao usar `envelhecer()`.

---
