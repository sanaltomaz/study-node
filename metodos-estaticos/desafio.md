# Desafio 4: Métodos Estáticos

## 📌 Objetivo
Aprender a utilizar **métodos estáticos** em classes para criar funcionalidades que não dependem de uma instância específica.

---

## 🔹 Conceitos abordados
- **Métodos estáticos (`static`)**: Criar métodos que podem ser chamados diretamente na classe, sem precisar instanciar um objeto.

---

## 🏆 Desafio

### **Parte 1: Criando uma classe `Calculadora`**
Crie uma classe chamada `Calculadora` com os seguintes métodos **estáticos**:

1. `somar(a, b)`: Retorna a soma de `a` e `b`.
2. `subtrair(a, b)`: Retorna a diferença entre `a` e `b`.
3. `multiplicar(a, b)`: Retorna o produto de `a` e `b`.
4. `dividir(a, b)`: Retorna o resultado da divisão de `a` por `b`. Se `b` for `0`, deve lançar um erro.

---

## ✏️ Exemplo esperado:
```javascript
class Calculadora {
    static somar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static multiplicar(a, b) {
        return a * b;
    }

    static dividir(a, b) {
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        return a / b;
    }
}

console.log(Calculadora.somar(5, 3));       // 8
console.log(Calculadora.subtrair(10, 4));   // 6
console.log(Calculadora.multiplicar(2, 6)); // 12
console.log(Calculadora.dividir(9, 3));     // 3
```

---

## 🚀 Desafio Extra (Opcional)
1. Adicione um método estático `potencia(base, expoente)` que retorna `base` elevada a `expoente`.
2. Adicione um método estático `raizQuadrada(numero)`, que retorna a raiz quadrada do número informado. Se o número for negativo, deve lançar um erro.

---

## 🔎 O que você deve observar?
✔️ Criou corretamente a classe `Calculadora`?
✔️ Os métodos **não precisam** de `this`, pois são estáticos?
✔️ O tratamento de erro na **divisão por zero** está funcionando?

---

