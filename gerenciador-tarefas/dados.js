import fs from 'fs';

export function lerDadosJSON(caminho) {
    try {
        if (!fs.existsSync(caminho)) {
            return [];
        }
        const dados = fs.readFileSync(caminho, 'utf-8');
        return JSON.parse(dados); 
    } catch (error) {
        console.log(`Erro ao ler o arquivo: ${error}`);
        return [];
    }
}

export function escreverDadosJSON(caminho, dados) {
    try {
        dados = JSON.stringify(dados, null, 2);
        fs.writeFileSync(caminho, dados);
        console.log('Dados salvos com sucesso!');
    } catch (error) {
        console.log(`Erro ao salvar os dados: ${error.message}`);
    }
}

export default {
    lerDadosJSON,
    escreverDadosJSON
}