// Importando as funções do arquivo usuarios.js
const { adicionarUsuarios, listarUsuarios, buscarUsuarioPorNome } = require('./usuarios');

// Listando todos os usuários
console.log("Lista de usuários:");
console.log(listarUsuarios());

// Buscando um usuário pelo nome
console.log("Buscando usuário 'Maria':");
console.log(buscarUsuarioPorNome('Maria'));

// Tentando buscar um usuário inexistente
console.log("Buscando usuário 'Carlos':");
console.log(buscarUsuarioPorNome('Carlos'));

// Adicionando um novo usuário
console.log("Adicionando usuário 'Pedro':");
console.log(adicionarUsuarios('Pedro', 40));
