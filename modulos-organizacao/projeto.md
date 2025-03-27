# 🚀 Desafio: Criando um Sistema de Cadastro de Usuários Modularizado

## 📌 Objetivo
Criar um sistema que permita **cadastrar, listar e buscar usuários**. O código deve ser modularizado, dividindo a lógica em arquivos separados.

---

## 🔹 Requisitos
1. Criar um módulo para gerenciar usuários (`usuarios.js`).
2. Criar um módulo principal (`index.js`) que interaja com `usuarios.js`.
3. O módulo de usuários deve ter as funções:
   - `adicionarUsuario(nome, idade)`: Adiciona um usuário a um array.
   - `listarUsuarios()`: Retorna todos os usuários cadastrados.
   - `buscarUsuarioPorNome(nome)`: Retorna um usuário específico.
4. Os dados devem ser mantidos em um **array na memória** (sem JSON por enquanto).
5. O `index.js` deve importar o módulo `usuarios.js` e testar as funções.

---

## 📝 Estrutura de Arquivos
```
/meuProjeto
 ├── index.js       # Arquivo principal
 ├── usuarios.js    # Módulo de gerenciamento de usuários
```

---

## 🛠 Dicas para Implementação
- No `usuarios.js`, use `module.exports` para exportar as funções.
- No `index.js`, use `require('./usuarios')` para importar o módulo.
- Teste chamando as funções no `index.js`.

---

## 🎯 Extra (se quiser um desafio maior!)
- Modificar o código para salvar os usuários em um arquivo JSON.
- Criar um menu interativo no terminal para cadastrar e listar usuários.

