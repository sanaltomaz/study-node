## 👉 **Desafio 10: Buscando Dados de uma API**

### 🌟 **Objetivo**  
Criar um sistema em **Node.js** que consuma a API pública do JSONPlaceholder para buscar e exibir **posts de usuários**.  

### 🖊️ **Requisitos**  
1. Criar uma função assíncrona que faça uma requisição para a API:  
   - Endpoint: `https://jsonplaceholder.typicode.com/posts`  
2. Exibir os títulos dos **primeiros 5 posts**.  
3. Implementar um **tratamento de erros** para falhas na requisição.  

### 🔹 **Bônus (Desafio Extra)**  
- Criar uma função que receba um **ID de usuário** e retorne apenas os posts daquele usuário.  
- Caso o usuário não tenha posts, exibir uma mensagem apropriada.  

---

## 📈 **Exemplo de Saída Esperada**  
```  
Buscando posts...  
1. Sunt aut facere repellat provident occaecati excepturi optio reprehenderit  
2. Qui est esse  
3. Ea molestias quasi exercitationem repellat qui ipsa sit aut  
4. Eum et est occaecati  
5. Nesciunt quas odio  
```

Se for buscar os posts de um usuário específico (por exemplo, `userId = 1`):  
```  
Posts do usuário 1:  
1. Sunt aut facere repellat provident occaecati excepturi optio reprehenderit  
2. Qui est esse  
...  
```

---

## 🔥 **Dicas**  
- Use `fetch` ou `axios` para consumir a API.  
- Utilize `async/await` para lidar com chamadas assíncronas.  
- Trate erros com `try/catch`.  

---
