# Desafio 1: Fundamentos de Orientação a Objetos

## 📌 Objetivo

Compreender e aplicar os conceitos fundamentais da **Orientação a Objetos** em JavaScript, utilizando **classes, objetos e métodos**.

---

## 🔹 Conceitos abordados

- **Classes e Objetos**: Definir uma estrutura para criar instâncias com propriedades e comportamentos.
- **Métodos dentro da classe**: Criar funções associadas aos objetos.
- **Uso do \*\*\*\*****`this`**: Entender como o `this` se refere ao próprio objeto instanciado.

---

## 🏆 Desafio

### \*\*Parte 1: Criando uma classe \*\***`Pessoa`**

Crie uma classe chamada `Pessoa` que tenha as seguintes propriedades e métodos:

1. **Propriedades**:

   - `nome` (string)
   - `idade` (número)

2. **Método \*\*\*\*****`apresentar()`**:

   - Deve exibir no console a seguinte mensagem:\
     *"Olá, meu nome é [nome] e eu tenho [idade] anos."*

### **Parte 2: Criando e testando objetos**

- Instancie **três objetos diferentes** da classe `Pessoa`.
- Chame o método `apresentar()` para cada um deles e veja o resultado no console.

---

## ✏️ Exemplo esperado:

```javascript
const pessoa1 = new Pessoa("João", 25);
const pessoa2 = new Pessoa("Maria", 30);
const pessoa3 = new Pessoa("Carlos", 40);

pessoa1.apresentar(); // "Olá, meu nome é João e eu tenho 25 anos."
pessoa2.apresentar(); // "Olá, meu nome é Maria e eu tenho 30 anos."
pessoa3.apresentar(); // "Olá, meu nome é Carlos e eu tenho 40 anos."
```

---

## 🚀 Desafio Extra (Opcional)

1. Adicione uma propriedade **profissão** à classe `Pessoa`.
2. Modifique o método `apresentar()` para incluir a profissão na mensagem.

---

## 🔎 O que você deve observar?

✔️ Criou corretamente a classe `Pessoa`?

✔️ O método `apresentar()` funciona como esperado?


✔️ O `this` está sendo usado corretamente para acessar os atributos do objeto?

---

