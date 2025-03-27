const { 
    adicionarUsuarios, 
    listarUsuarios, 
    buscarUsuarioPorNome,
    removerUsuario,
} = require('./usuarios');

console.log(buscarUsuarioPorNome('Maria')); // Busca um usuario por nome.

// Adiciona um novo usuario.
adicionarUsuarios('Patricia', 32);
removerUsuario('Sanal', 20);

console.log(listarUsuarios('usuarios.json'));   // Lista todos os usuarios.
