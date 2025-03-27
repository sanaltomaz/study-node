# 🚀 Desafio: Criando um Menu Interativo

## 📌 Objetivo
Modificar seu código para que o usuário possa **interagir via terminal** para adicionar, listar, buscar e remover usuários.

---

## 🔹 Requisitos
1. Utilizar o módulo `readline` para capturar a entrada do usuário.
2. Criar um **menu interativo** no terminal com opções para:
   - `1` ➝ Listar usuários  
   - `2` ➝ Adicionar um novo usuário  
   - `3` ➝ Buscar usuário por nome  
   - `4` ➝ Remover um usuário  
   - `5` ➝ Sair  
3. Utilizar `async/await` para garantir que todas as funções assíncronas sejam chamadas corretamente.

---

## 📝 Estrutura de Arquivos
```
/meuProjeto
 ├── index.js        # Arquivo principal com o menu interativo
 ├── usuarios.js     # Módulo de gerenciamento de usuários
 ├── usuarios.json   # Arquivo para armazenar os usuários
```

---

## 🎯 Extra (para um desafio maior!)
- Adicionar **validação de entrada** para evitar erros.
- Melhorar a exibição da lista de usuários (exibir formatado no terminal).
- Permitir que o usuário **escolha o nome do arquivo JSON** para salvar os dados.

---

💡 **Dica:** Utilize `readline.question` dentro de uma `async function` para capturar entrada do usuário e chamar as funções certas.

