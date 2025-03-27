const { 
    adicionarUsuarios, 
    listarUsuarios, 
    buscarUsuarioPorNome,
    removerUsuario,
} = require('./usuarios');

// Importando o módulo readline para interagir com o usuário
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,   // Entrada do teclado
    output: process.stdout  // Saída no terminal
});

// Criando uma função para aguardar a resposta do usuário
function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

// Criando uma função para pausar a execução do programa
function pausar() {
    return new Promise((resolve) => {
        rl.question('Pressione Enter para continuar...', () => {
            resolve();
        });
    });
}

// Função para mostrar o menu com opções
function mostrarMenu(){
    console.log('\n===== Menu =====');
    console.log("'1' - Listar usuários");
    console.log("'2' - Adicionar um novo usuário");
    console.log("'3' - Buscar usuário por nome");
    console.log("'4' - Remover usuário");
    console.log("'0' - Sair do sistema");
}

// Exemplo de uso
async function iniciar() {
    console.log('Bem-vindo ao sistema de usuários!');

    let escolha;

    do {
        mostrarMenu();
        escolha = await perguntar('Escolha uma opção: ');

        if (escolha == 1) { // Lista o usuários cadastrados.
            const usuarios = await listarUsuarios();

            for (let i = 0; i < usuarios.length; i++) {
                const usuario = usuarios[i];
                console.log('Nome: ' + usuario.nome + ', Idade: ' + usuario.idade);
            }
            await pausar();

        } else if (escolha == 2) { // Adiciona um novo usuário.
            const nome = await perguntar('Digite o nome do usuário: ');
            const idade = parseInt(await perguntar('Digite a idade do usuário: '));
            await adicionarUsuarios(nome, idade);
            await pausar();

        } else if (escolha == 3) { // Busca um usuário por nome.
            const nome = await perguntar ('Digite o nome do usuário: ');
            const usuario = await buscarUsuarioPorNome(nome);
            console.log(usuario);
            await pausar();

        } else if (escolha == 4) { // Remove um usuário.
            const nome = await perguntar('Digite o nome do usuário: ');
            await removerUsuario(nome);
            await pausar();

        } else if (escolha == 0) {
            console.log('Saindo do sistema...');
            await pausar();

        } else {
            console.log('Opção inválida!');
            await pausar();

        }
    } while (escolha != 0);

    rl.close();
}

iniciar();
