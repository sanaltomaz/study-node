const { 
    adicionarUsuarios, 
    listarUsuarios, 
    buscarUsuarioPorNome,
    removerUsuario,
} = require('./usuarios');

async function executar() {
    console.log(await buscarUsuarioPorNome('Maria')); // Busca um usuário por nome.

    // Adiciona um novo usuário.
    await adicionarUsuarios('Patricia', 32);
    
    // Remove um usuário.
    await removerUsuario('Sanal', 20);

    // Lista todos os usuários.
    console.log(await listarUsuarios());
}

// Executa as funções
executar();
