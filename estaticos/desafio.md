# Desafio 5: Herança e Cadeia de Protótipos

## 📌 Objetivo
Aprender a utilizar **herança** e compreender como funciona a **cadeia de protótipos** no JavaScript.

---

## 🔹 Conceitos abordados
- **Herança**: Utilizar a palavra-chave `extends` para criar classes que herdam propriedades e métodos de outra classe.
- **Método `super()`**: Invocar o construtor da classe pai dentro da classe filha.
- **Cadeia de Protótipos**: Entender como o JavaScript busca propriedades e métodos na hierarquia de classes.

---

## 🏆 Desafio

### **Parte 1: Criando uma hierarquia de classes**
1. Crie uma classe chamada `Animal` com as seguintes propriedades e métodos:
   - **Propriedades**: `nome` (string) e `idade` (número).
   - **Método `emitirSom()`**: Exibe no console _"Este animal faz um som."_.

2. Crie uma classe `Cachorro` que **herda** de `Animal`.
   - No construtor, adicione a propriedade extra `raca` (string).
   - Sobrescreva o método `emitirSom()` para exibir no console _"O cachorro está latindo."_.

3. Crie uma classe `Gato` que também **herda** de `Animal`.
   - No construtor, adicione a propriedade extra `cor` (string).
   - Sobrescreva o método `emitirSom()` para exibir no console _"O gato está miando."_.

---

## ✏️ Exemplo esperado:
```javascript
const cachorro = new Cachorro("Rex", 3, "Labrador");
cachorro.emitirSom(); // "O cachorro está latindo."

const gato = new Gato("Mimi", 2, "Branco");
gato.emitirSom(); // "O gato está miando."
```

---

## 🚀 Desafio Extra (Opcional)
1. Adicione um método `descrever()` em cada classe para exibir as informações completas do animal (nome, idade e características adicionais como raça ou cor).
2. Crie uma nova classe `Passaro` que herde de `Animal` e adicione um método `voar()` que exibe no console _"O pássaro está voando."_.

---

## 🔎 O que você deve observar?
✔️ As classes `Cachorro` e `Gato` estão herdando corretamente de `Animal`?
✔️ O método `super()` foi utilizado no construtor das classes filhas?
✔️ Os métodos sobrescritos estão funcionando conforme o esperado?

---

🔹 **Quando terminar, teste seu código e volte para discutir sua solução!** 🚀

