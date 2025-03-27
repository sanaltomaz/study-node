// Importando o módulo node-fetch para realizar requisições HTTP.
import fetch from 'node-fetch';

// Função para buscar todos os posts de uma API.
// Por padrão, utiliza a URL 'https://jsonplaceholder.typicode.com/posts'.
async function buscarTodosPosts(apiUrl = 'https://jsonplaceholder.typicode.com/posts') {
    // Realiza a requisição HTTP para a API.
    const response = await fetch(apiUrl);
    // Verifica se a resposta foi bem-sucedida.
    if (!response.ok) {
        throw new Error('Erro ao buscar posts.'); // Lança um erro caso a resposta não seja válida.
    }
    // Retorna os dados da resposta no formato JSON.
    return await response.json();
}

// Função para filtrar os posts de um usuário específico.
// Recebe um array de posts e o ID do usuário.
function filtrarPostsPorUsuario(posts, userId) {
    return posts
        .filter(post => post.userId === userId) // Filtra os posts pelo userId.
        .map(post => post.title); // Retorna apenas os títulos dos posts.
}

// Função que busca os posts de um usuário a partir do ID.
// Retorna um array com os títulos dos posts do usuário.
async function buscarPosts(id) {
    // Valida se o ID informado é válido (número inteiro maior que 0).
    if (!id || typeof id !== 'number' || id <= 0 || !Number.isInteger(id)) {
        throw new Error('Informe um id válido. (número inteiro maior que 0)');
    }

    // Busca todos os posts da API.
    const posts = await buscarTodosPosts();
    // Filtra os posts pelo ID do usuário e retorna os títulos.
    return filtrarPostsPorUsuario(posts, id);
}

// Função que imprime todos os posts de um usuário a partir do ID.
// Retorna uma mensagem de sucesso ou erro.
async function imprimirTodosPosts(id) {
    // Busca os títulos dos posts do usuário.
    const titulos = await buscarPosts(id);
    // Verifica se há posts para o usuário.
    if (!titulos || titulos.length === 0) {
        return `Nenhum post encontrado para o usuário: ${id}.`; // Retorna mensagem caso não haja posts.
    }

    // Imprime os títulos dos posts no console.
    console.log(`Buscando posts do usuário: ${id}:`);
    titulos.forEach(titulo => {
        console.log(`Título: ${titulo}`);
    });
    // Retorna uma mensagem de sucesso.
    return `Posts do usuário ${id} impressos com sucesso!`;
}

// Função que imprime os 5 primeiros posts de um usuário a partir do ID.
// Retorna uma mensagem de sucesso ou erro.
async function imprimirPrimeirosPosts(id) {
    // Busca os títulos dos posts do usuário.
    const titulos = await buscarPosts(id);
    // Verifica se há posts para o usuário.
    if (!titulos || titulos.length === 0) {
        return `Nenhum post encontrado para o usuário: ${id}.`; // Retorna mensagem caso não haja posts.
    }
    
    // Imprime os 5 primeiros títulos dos posts no console.
    console.log(`Buscando pelos 5 primeiros posts do usuário: ${id}:`);
    for (let i = 0; i < 5; i++) {
        console.log(`Título: ${titulos[i]}`);
    }
    // Retorna uma mensagem de sucesso.
    return `Posts do usuário ${id} impressos com sucesso!`;
}

// Área de testes:
(async () => {
    try {
        const resultado = await imprimirTodosPosts(2);
        const resultado2 = await imprimirPrimeirosPosts(1);

        console.log(resultado);
        console.log(resultado2);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    }
})();