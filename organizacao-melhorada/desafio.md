# 🚀 Desafio: Salvando Usuários em Arquivo JSON

## 📌 Objetivo
Modificar o sistema anterior para que os usuários sejam armazenados **de forma persistente** em um arquivo `usuarios.json`.

---

## 🔹 Requisitos
1. Criar um arquivo `usuarios.json` para armazenar os usuários.
2. Atualizar o módulo `usuarios.js` para **ler e escrever** no arquivo JSON em vez de manter os dados em um array na memória.
3. As funções devem agora manipular o arquivo JSON:
   - `adicionarUsuario(nome, idade)`: Lê o arquivo, adiciona um novo usuário e salva os dados.
   - `listarUsuarios()`: Lê e retorna os usuários do arquivo.
   - `buscarUsuarioPorNome(nome)`: Lê o arquivo e busca um usuário pelo nome.
4. O `index.js` continua responsável por testar as funções.

---

## 📝 Estrutura de Arquivos
```
/meuProjeto
 ├── index.js        # Arquivo principal
 ├── usuarios.js     # Módulo de gerenciamento de usuários
 ├── usuarios.json   # Arquivo para armazenar os usuários
```

---

## 🛠 Dicas para Implementação
- Use `fs.readFileSync` para **ler** os dados do `usuarios.json`.
- Use `fs.writeFileSync` para **salvar** os dados no `usuarios.json`.
- Certifique-se de **tratar erros** caso o arquivo JSON esteja vazio ou corrompido.

---

## 🎯 Extra (se quiser um desafio maior!)
- Criar um **menu interativo no terminal** para adicionar e listar usuários.
- Usar `fs.promises` e `async/await` em vez de `fs.readFileSync` e `fs.writeFileSync`.
- Criar uma opção para **remover usuários** pelo nome.

