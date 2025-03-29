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

function menu() {
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
                    rl.question('Digite o status da tarefa: ', (status) => {
                        gerenciador.adicionarTarefa(new Tarefa(nome, status));
                        console.log('Tarefa adicionada com sucesso!');
                        menu();
                    });
                });
                break;
            // Remover tarefa
            case '2':
                rl.question('Gostaria de listar as tarefas antes de remover? (s/n): ', (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        console.log('Tarefas: ');
                        console.log(gerenciador.listasTodasTarefas());
                    }
                });
                // Lê o nome da tarefa a ser removida
                rl.question('Digite o nome da tarefa para remover: ', (nome) => {
                    gerenciador.removerTarefa(nome);
                    console.log('Tarefa removida com sucesso!');
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
                    2 - Modificar status da tarefa`);
                // Lê a opção do usuário
                rl.question('Escolha uma opção: ', (opcao) => {
                    switch (opcao) {
                        // Modifica o nome da tarefa
                        case '1':
                            rl.question('Digite o nome da tarefa: ', (nome) => {
                                rl.question('Digite o novo nome: ', (novoNome) => {
                                    gerenciador.alterarNome(nome, novoNome);
                                    console.log('Nome alterado com sucesso!');
                                    menu();
                                })
                            })
                            break;
                        // Modifica o status da tarefa
                        case '2':
                            rl.question('Digite o nome da tarefa: ', (nome) => {
                                // Mostra as opções de status
                                console.log(`
                                    Status disponíveis:
                                    1 - Pendente
                                    2 - Em andamento
                                    3 - Concluída
                                `);
                                rl.question('Digite o novo status: ', (status) => {
                                    console.log('tarefas filtradas: ');
                                    if (status === '1') {
                                        status = 'pendente';
                                    } else if (status === '2') {
                                        status = 'em andamento';
                                    } else if (status === '3') {
                                        status = 'concluído';
                                    }
                                    gerenciador.alterarStatus(nome, status);
                                    console.log('Status alterado com sucesso!');
                                    menu();
                                })
                            })
                            break;
                        // Qualquer outro valor
                        default:
                            console.log('Opção inválida!');
                            menu();
                            break;
                    }
                })
            // Filtrar tarefas por status
            case '5':
                // Mostra as opções de status
                console.log(`
                    Status disponíveis para filtrar:
                    1 - Pendente
                    2 - Em andamento
                    3 - Concluída
                `);
                rl.question('Digite o status para filtar: ', (status) => {
                    console.log('tarefas filtradas: ');
                    // Válida a opção do usuário
                    if (status !== '1' && status !== '2' && status !== '3') {
                        console.log('Opção inválida!');
                        menu();
                        return;
                    }
                    // Converte o status para o formato correto
                    if (status === '1') {
                        status = 'pendente';
                    } else if (status === '2') {
                        status = 'em andamento';
                    } else if (status === '3') {
                        status = 'concluído';
                    }
                    // Lista de acordo com o status
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

menu();

