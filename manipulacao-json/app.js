const fs = require('fs');

// Indica o caminho que os dados serão lidos e escritos 
const caminhoDados = './dados.json';

// Função de leitura de arquivos
function lerArquivo(caminho) {
    try {
        const dadosBrutos = fs.readFileSync(caminho, 'utf-8'); // Lê como texto
        return JSON.parse(dadosBrutos); // Retorna obj convertido em objeto JS
    } catch (erro) {
        console.log("Erro ao tentar ler arquivo.", erro);
        return null;
    }
}

// Função para escrever dados no arquivo
function escreverArquivo(caminho, dados) {
    try {
        const jsonString = JSON.stringify(dados, null, 2); // Converte para JSON formatado 
        fs.writeFileSync(caminho, jsonString);
        console.log("Arquivo atualizado.");
    } catch (erro) {
        console.log("Falha ao escrever arquivo.", erro);
    }    
}

// Usuário que será registrado 
const novoUsuario = {
    id: 4,
    nome: 'Maria',
    idade: 15,
};

// Lê os dados do arquivo
const dadosBrutos = lerArquivo(caminhoDados);

// Atualizar idade, ou qualquer outro usuario já existente
dadosBrutos[1].idade = 31; // Atualiza a idade do usuário com id 1

// Concatena o novo usuário aos dados existentes
const dadosAtualizados = { ...dadosBrutos, [novoUsuario.id]: novoUsuario }; // Adiciona o novo usuário

console.log(dadosAtualizados);

// Escreve os dados atualizados no arquivo
escreverArquivo(caminhoDados, dadosAtualizados);
