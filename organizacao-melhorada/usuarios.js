// Arquivo com funções para manipulação de usuários.
const fs = require('fs').promises;

async function lerUsuarios(caminho) {
    // Usa fs.readFileSync para ler o arquivo
    try {
        const usuariosData = await fs.readFile(caminho, 'utf8');
        return JSON.parse(usuariosData);
    } catch (error) {
        console.log("Erro ao ler o arquivo do usuário", error);
        return [];
    }
}

async function salvarUsuarios(caminho, dados) {
    // Usa fs.writeFileSync para salvar o arquivo
    try {
        const jsonString = JSON.stringify(dados, null, 2);
        await fs.writeFile(caminho, jsonString);
        console.log('Arquivo atualizado com sucesso!');
    } catch (error) {
        console.log("Erro ao salvar o arquivo do usuário", error);
    }
}

async function usuarioExistente(nome, idade, caminho = 'usuarios.json') {
    const usuarios = await lerUsuarios(caminho);
    return usuarios.some(usuario => usuario.nome === nome && usuario.idade === idade);
}

// Função para adicionar usuários.
async function adicionarUsuarios(nome, idade, caminho = 'usuarios.json') {
    const usuarioExiste = await usuarioExistente(nome, idade, caminho);
    if (usuarioExiste) {
        console.log('Usuário já existe!');
        return [];
    } else {
        const usuarios = await lerUsuarios(caminho);
        const novoUsuario = {nome, idade}
        usuarios.push(novoUsuario);
        await salvarUsuarios(caminho, usuarios);
        console.log('Usuário adicionado com sucesso!');
        return usuarios;
    }
}

// Função para listar usuários.
async function listarUsuarios(caminho = 'usuarios.json') {
    return await lerUsuarios(caminho);
}

// Função para buscar usuário por nome.
async function buscarUsuarioPorNome(nome, caminho = 'usuarios.json') {
    const usuarios = await lerUsuarios(caminho);
    const usuario = usuarios.find(usuario => usuario.nome === nome);
    
    if (usuario) {
        console.log('Usuário encontrado!');
        console.log(usuario.nome + ' ' + usuario.idade);
        return usuario;
    } else {
        console.log('Usuário não encontrado!');
        return null;
    }
}

// Função para remover usuário.
async function removerUsuario(nome, idade, caminho = 'usuarios.json') {
    const usuarios = await lerUsuarios(caminho);
    const usuariosAtualizados = usuarios.filter(usuario => !(usuario.nome === nome && usuario.idade === idade));

    if (usuarios.length === usuariosAtualizados.length) {
        console.log('Usuário não encontrado!');
        return null;
    }

    await salvarUsuarios(caminho, usuariosAtualizados);
    console.log('Usuário removido com sucesso!');
    return usuariosAtualizados;
}



// Exportando com module.exports
module.exports = { 
    adicionarUsuarios, 
    listarUsuarios, 
    buscarUsuarioPorNome,
    removerUsuario,
};

