// filepath: /home/sanal/Workspace/projetosNode/study-node/gerenciador-tarefas/dados.js
import fs from 'fs';

export function lerDadosJSON(caminho) {
    if (!fs.existsSync(caminho)) {
        return []; // Retorna um array vazio se o arquivo não existir
    }
    const dados = fs.readFileSync(caminho, 'utf-8');
    try {
        return JSON.parse(dados); // Certifique-se de que o JSON é válido
    } catch (error) {
        throw new Error('Erro ao analisar o arquivo JSON. Verifique o formato.');
    }
}

export function escreverDadosJSON(caminho, dados) {
    const json = JSON.stringify([...dados.values()], null, 2);
    fs.writeFileSync(caminho, json, 'utf-8');
}