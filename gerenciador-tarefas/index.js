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
    console.log(`
        Gerenciador de Tarefas:
        1 - Adicionar tarefa
        2 - Remover tarefa
        3 - Listar tarefas 
        4 - Alterar status
        5 - Filtrar tarefas
        0 - Sair
        `);
    
        rl.question('Escolha uma opção: ', (opcao) => {
            switch (opcao) {
                case '1':
                    rl.question('Digite o nome da tarefa: ', (nome) => {
                        rl.question('Digite o status da tarefa: ', (status) => {
                            gerenciador.adicionarTarefa(new Tarefa(nome, status));
                            console.log('Tarefa adicionada com sucesso!');
                            menu();
                        });
                    });
                    break;
                case '2':
                    rl.question('Digite o nome da tarefa para remover: ', (nome) => {
                        gerenciador.removerTarefa(nome);
                        console.log('Tarefa removida com sucesso!');
                        menu();
                    });
                    break;
                case '3':
                    console.log('Tarefas:');
                    console.log(gerenciador.listasTodasTarefas());
                    menu();
                    break;
                case '4':
                    rl.question('Digite o nome da tarefa: ', (nome) => {
                        rl.question('Digite o novo status: ', (status) => {
                            gerenciador.alterarStatus(nome, status);
                            console.log('Status alterado com sucesso!');
                            menu();
                        });
                    });
                    break;
                case '5':
                    rl.question('Digite o status para filtar: ', (status) => {
                        console.log('tarefas filtradas: ');
                        console.log(gerenciador.listarTarefasPorStatus(status));
                        menu();
                    });
                    break;
                case '0':
                    console.log('Saindo...');
                    rl.close();
                    break;
                default:    
                    console.log('Opção inválida!');
                    menu();
                    break;
        }
    });    
}

menu();

