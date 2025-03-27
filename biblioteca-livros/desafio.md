# Desafio 8: Sistema de Biblioteca 📚

## Objetivo:
Criar um sistema para gerenciar livros em uma biblioteca. O sistema deve permitir adicionar livros, emprestá-los e devolvê-los.

## Requisitos:
1. Criar uma classe `Livro` com os atributos:
   - `titulo` (string)
   - `autor` (string)
   - `anoPublicacao` (número)
   - `emprestado` (boolean, começa como `false`)

2. Criar uma classe `Biblioteca` que:
   - Armazena os livros em um array.
   - Possui um método `adicionarLivro(livro)`, que adiciona um livro à biblioteca.
   - Possui um método `emprestarLivro(titulo)`, que define o livro como emprestado, se disponível.
   - Possui um método `devolverLivro(titulo)`, que marca o livro como disponível novamente.
   - Possui um método `listarLivrosDisponiveis()`, que retorna uma lista de livros não emprestados.

## Exemplo de Uso:
```js
const biblioteca = new Biblioteca();

const livro1 = new Livro("1984", "George Orwell", 1949);
const livro2 = new Livro("Dom Casmurro", "Machado de Assis", 1899);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

console.log(biblioteca.listarLivrosDisponiveis()); // Mostra os livros disponíveis

biblioteca.emprestarLivro("1984");
console.log(biblioteca.listarLivrosDisponiveis()); // Mostra apenas "Dom Casmurro"

biblioteca.devolverLivro("1984");
console.log(biblioteca.listarLivrosDisponiveis()); // "1984" aparece novamente na lista
```

### Desafio Extra 🔥:
- Adicione um sistema de registro de histórico de empréstimos.
- Permita a busca de livros por autor.

Boa sorte! 🚀

