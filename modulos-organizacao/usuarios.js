// Arquivo com funções para manipulação de usuários.
const usuarios = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 20 },
    { nome: 'José', idade: 30 },    
    { nome: 'Ana', idade: 35 }
];

// Função para adicionar usuários.
function adicionarUsuarios(nome, idade) {
    usuarios.push({ nome, idade });
    console.log('Usuário adicionado com sucesso!');
    return usuarios;
}

// Função para listar usuários.
function listarUsuarios() {
    return usuarios;
}

// Função para buscar usuário por nome.
function buscarUsuarioPorNome(nome) {
    if (usuarios.some(usuario => usuario.nome === nome)) {
        console.log('Usuário encontrado!');
    }
    return usuarios.find(usuario => usuario.nome === nome);
}

// Exportando com module.exports
module.exports = { adicionarUsuarios, listarUsuarios, buscarUsuarioPorNome };