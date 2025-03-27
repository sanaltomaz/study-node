// Arquivo com funções para manipulação de usuários.
const usuarios = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 20 },
    { nome: 'José', idade: 30 },    
    { nome: 'Ana', idade: 35 }
];

// Função para adicionar usuários.
function adicionarUsuarios(nome, idade) {
    const novoUsuario = { nome, idade };
    usuarios.push(novoUsuario);
    console.log(`Usuário ${nome} adicionado com sucesso!`);
    return [...usuarios]; // Retorna uma cópia do array atualizado
}

// Função para listar usuários.
function listarUsuarios() {
    return [...usuarios]; // Retorna uma cópia do array para evitar manipulação externa
}

// Função para buscar usuário por nome.
function buscarUsuarioPorNome(nome) {
    const usuarioEncontrado = usuarios.find(usuario => usuario.nome === nome);
    
    if (usuarioEncontrado) {
        console.log(`Usuário ${nome} encontrado!`);
        return usuarioEncontrado;
    } else {
        console.log(`Usuário ${nome} não encontrado.`);
        return null;
    }
}

// Exportando com module.exports
module.exports = { adicionarUsuarios, listarUsuarios, buscarUsuarioPorNome };
