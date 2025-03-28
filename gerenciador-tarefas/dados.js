import fs from 'fs';

export function lerDadosJSON(caminho) {
    if (!fs.existsSync(caminho)) {
        return []; // Retorna um array vazio se o arquivo não existir
    }
    const dados = fs.readFileSync(caminho, 'utf-8'); // Lê o arquivo JSON
    try {
        return JSON.parse(dados); // Retorna os dados como um array
    } catch (error) {
        throw new Error('Erro ao analisar o arquivo JSON. Verifique o formato.');
    }
}

export function escreverDadosJSON(caminho, dados) {
    // Converte o Map para um array antes de salvar
    const json = JSON.stringify([...dados.values()], null, 2);
    fs.writeFileSync(caminho, json, 'utf-8'); // Escreve os dados no arquivo JSON
    console.log('Dados salvos com sucesso!'); // Mensagem de sucesso
}