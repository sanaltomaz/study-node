class Calculadora {
    // Método privado para verificar se os argumentos são números.
    static #verificarNumeros(...args) {
        for (const arg of args) {
            if (typeof arg !== 'number') {
                throw new Error("Apenas números são permitidos");
            }
        }
    }

    // Métodos estáticos para realizar as operações matemáticas.

    static somar(a, b) {
        this.#verificarNumeros(a, b);
        return a + b;
    }

    static subtrair(a, b) {
        this.#verificarNumeros(a, b);
        return a - b;
    }

    static multiplicar(a, b) {
        this.#verificarNumeros(a, b);
        return a * b;
    }

    static dividir(a, b) {
        this.#verificarNumeros(a, b);
        if (b === 0) {
            throw new Error("Divisão por zero");
        }
        return a / b;
    }

    static potencia(a, b) {
        this.#verificarNumeros(a, b);
        return a ** b;
    }

    static raizQuadrada(a) {
        this.#verificarNumeros(a);
        return Math.sqrt(a);
    }
}


// Testando a classe Calculadora.
try {
    console.log(Calculadora.somar(5, 3));       // 8
    console.log(Calculadora.subtrair(10, 4));   // 6
    console.log(Calculadora.multiplicar(2, 6)); // 12
    console.log(Calculadora.dividir(9, 3));     // 3
    console.log(Calculadora.potencia(3, 2));    // 9
    console.log(Calculadora.raizQuadrada(9));   // 3
    console.log(Calculadora.dividir(10, 0));
} catch (error) {
    console.log(error.message);
}