// Importando os módulos necessários
import readline from 'readline';
import GerenciadorTarefas from "./GerenciadorTarefas.js";
import Tarefa from "./Tarefa.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dados = "./dados.json";
const gerenciador = new GerenciadorTarefas(dados);

function statusDisponiveis() {
    console.log(`
        Status disponíveis:
        1 - Pendente
        2 - Em andamento
        3 - Concluída
    `);
}

function validarStatus(status) {
    switch (status) {
        case '1':
            return status = 'pendente';
        case '2':
            return status = 'em andamento';
        case '3':
            return status = 'concluído';
    }
}

export default function menu() {
    // Mostra o menu
    console.log(`
        Gerenciador de Tarefas:
        1 - Adicionar tarefa
        2 - Remover tarefa
        3 - Listar tarefas 
        4 - Modificar tarefa
        5 - Filtrar tarefas
        0 - Sair
        `);
        
    // Lê a opção do usuário
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            // Adicionar tarefa
            case '1': 
                rl.question('Digite o nome da tarefa: ', (nome) => {
                    if (!nome || nome.trim().length === 0) {
                        console.log('O nome da tarefa é obrigatório.');
                        menu();
                        return;
                    }

                    // Mostra as opções de status
                    statusDisponiveis();
                    rl.question('Digite o status para a tarefa: ', (status) => {
                        if (status !== '1' && status !== '2' && status !== '3') {
                            console.log('Opção inválida!');
                            menu();
                            return;
                        }

                        // Converte o status para o formato correto
                        status = validarStatus(status);
                        try {
                            gerenciador.adicionarTarefa(new Tarefa(nome, status));
                            console.log('Tarefa adicionada com sucesso!');
                        } catch (error) {
                            console.error('Erro ao adicionar tarefa: ', error.message);
                        }
                        menu();
                    });
                });
                break;

            // Remover tarefa
            case '2':
                // Lê o nome da tarefa a ser removida
                rl.question('Digite o nome da tarefa para remover: ', (nome) => {
                    // Verifica se a tarefa existe
                    if (!gerenciador.tarefas.has(nome)) {
                        console.log('Tarefa não encontrada!');
                        menu();
                        return;
                    }

                    try {
                        gerenciador.removerTarefa(nome);
                        console.log('Tarefa removida com sucesso!');
                    } catch (error) {
                        console.error('Erro ao remover tarefa: ', error.message);
                    }
                    menu();
                });
                break;

            // Listar tarefas
            case '3':
                console.log('Tarefas:');
                console.log(gerenciador.listasTodasTarefas());
                menu();
                break;

            // Modifica tarefa
            case '4':
                // Mostra as opções de modificação
                console.log(`
                    O que você deseja modificar?
                    1 - Modificar nome da tarefa
                    2 - Modificar status da tarefa
                    3 - Voltar ao menu`);

                // Lê a opção do usuário
                rl.question('Escolha uma opção: ', (opcao) => {
                    switch (opcao) {
                        // Modifica o nome da tarefa
                        case '1':
                            rl.question('Digite o nome da tarefa: ', (nome) => {
                                // Verifica se a tarefa existe
                                if (!gerenciador.tarefas.has(nome)) {
                                    console.log('Tarefa não encontrada!');
                                    menu();
                                    return;
                                }
                                rl.question('Digite o novo nome: ', (novoNome) => {
                                    // Verifica se o novo nome é válido
                                    if (!novoNome || novoNome.trim().length === 0) {
                                        console.log('O novo nome da tarefa deve ser uma string não vazia.');
                                        menu();
                                        return;
                                    }
                                    try {
                                        gerenciador.alterarNome(nome, novoNome);
                                        console.log('Nome alterado com sucesso!');
                                    } catch (error) {
                                        console.error('Erro ao modificar o nome da tarefa: ', error.message);
                                    }
                                    menu();
                                })
                            })
                            break;

                        // Modifica o status da tarefa
                        case '2':
                            rl.question('Digite o nome da tarefa: ', (nome) => {
                                // Verifica se a tarefa existe
                                if (!gerenciador.tarefas.has(nome)) {
                                    console.log('Tarefa não encontrada!');
                                    menu();
                                    return;
                                }

                                // Mostra as opções de status
                                statusDisponiveis();

                                rl.question('Digite o novo status: ', (status) => {
                                    status = validarStatus(status); // Converte o status para o formato correto
                                    try {
                                        gerenciador.alterarStatus(nome, status);
                                        console.log('Status alterado com sucesso!');
                                    } catch (error) {
                                        console.error('Erro ao modificar status da tarefa: ', error.message);
                                    }
                                    menu();
                                })
                            })
                            break;

                        case '3':
                            menu();
                            break;

                        // Qualquer outro valor
                        default:
                            console.log('Opção inválida!');
                            menu();
                            break;

                    }
                })
                break;

            // Filtrar tarefas por status
            case '5':
                // Mostra as opções de status
                statusDisponiveis();
                rl.question('Digite o status para filtar: ', (status) => {
                    console.log('tarefas filtradas: ');
                    // Válida a opção do usuário
                    if (status !== '1' && status !== '2' && status !== '3') {
                        console.log('Opção inválida!');
                        menu();
                        return;
                    }
                    status = validarStatus(status); // Converte o status para o formato correto
                    console.log(gerenciador.listarTarefasPorStatus(status)); 
                    menu();
                });
                break;

            // Sair
            case '0':
                console.log('Saindo...');
                rl.close();
                break;

            // Qualquer outro valor
            default:    
                console.log('Opção inválida!');
                menu();
                break;
        }
    });    
}

