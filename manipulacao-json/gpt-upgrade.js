/* Melhoria de código feita pelo chatGPT
============================================================================
✅ Evita erro ao tentar ler um arquivo inexistente → Retorna [] como fallback.
✅ Busca o usuário pelo id antes de atualizar a idade → Evita erro ao acessar índices inexistentes.
✅ Adiciona novos usuários corretamente ao array 
    → Substitui { ...dadosBrutos, [novoUsuario.id]: novoUsuario } por .push(novoUsuario).
✅ Evita duplicação de usuários → Garante que um ID não seja repetido antes de adicionar.
✅ Código modularizado → Funções separadas para cada responsabilidade, facilitando reutilização
============================================================================

*/
const fs = require('fs');

// Caminho do arquivo JSON
const caminhoDados = './dados.json';

// Função para ler os dados do arquivo
function lerArquivo(caminho) {
    try {
        if (!fs.existsSync(caminho)) {
            return []; // Se o arquivo não existir, retorna um array vazio
        }
        const dadosBrutos = fs.readFileSync(caminho, 'utf-8');
        return JSON.parse(dadosBrutos) || []; // Garante que retorne um array válido
    } catch (erro) {
        console.log("Erro ao tentar ler arquivo.", erro);
        return []; // Retorna array vazio em caso de erro
    }
}

// Função para escrever dados no arquivo
function escreverArquivo(caminho, dados) {
    try {
        const jsonString = JSON.stringify(dados, null, 2);
        fs.writeFileSync(caminho, jsonString);
        console.log("Arquivo atualizado com sucesso.");
    } catch (erro) {
        console.log("Falha ao escrever arquivo.", erro);
    }    
}

// Função para atualizar idade de um usuário existente
function atualizarIdade(dados, id, novaIdade) {
    const usuario = dados.find(user => user.id === id);
    if (usuario) {
        usuario.idade = novaIdade;
        return true; // Sucesso na atualização
    }
    return false; // Usuário não encontrado
}

// Função para adicionar um novo usuário
function adicionarUsuario(dados, novoUsuario) {
    const usuarioExistente = dados.find(user => user.id === novoUsuario.id);
    if (!usuarioExistente) {
        dados.push(novoUsuario); // Adiciona ao array
        return true; // Sucesso na adição
    }
    return false; // Usuário já existe
}

// Leitura dos dados do arquivo
let dadosUsuarios = lerArquivo(caminhoDados);

// Atualiza a idade de um usuário existente
const sucessoAtualizacao = atualizarIdade(dadosUsuarios, 1, 31);
if (sucessoAtualizacao) {
    console.log("Idade do usuário atualizada.");
} else {
    console.log("Usuário não encontrado.");
}

// Novo usuário a ser adicionado
const novoUsuario = {
    id: 4,
    nome: 'Maria',
    idade: 15,
};

// Adiciona um novo usuário
const sucessoAdicao = adicionarUsuario(dadosUsuarios, novoUsuario);
if (sucessoAdicao) {
    console.log("Novo usuário adicionado.");
} else {
    console.log("Usuário já existe.");
}

// Escreve os dados atualizados no arquivo
escreverArquivo(caminhoDados, dadosUsuarios);
