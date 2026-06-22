# 🎮 Prateleira de Jogos

## 📌 Identificação

**Nome do Projeto:** Prateleira de Jogos

**Descrição:**
A Prateleira de Jogos é uma aplicação web desenvolvida em React, focada na organização e visualização de jogos digitais. O sistema permite aos usuários listar jogos, visualizar detalhes individuais e gerenciar uma lista de favoritos, utilizando o armazenamento local do navegador (localStorage) para persistência. Além disso, o projeto integra a API RAWG para realizar buscas de jogos em tempo real, proporcionando uma experiência de navegação moderna e interativa.

## ⚙️ Funcionalidades

As principais funcionalidades da aplicação incluem:

*   **Listagem de jogos:** Exibição de uma coleção de jogos na página inicial.
*   **Visualização de detalhes:** Acesso a informações detalhadas de cada jogo.
*   **Gerenciamento de favoritos:** Funcionalidades para adicionar e remover jogos da lista de favoritos.
*   **Persistência de dados:** Utilização do `localStorage` para manter a lista de favoritos salva entre as sessões do navegador.
*   **Navegação:** Implementação de rotas dinâmicas para uma navegação fluida entre as páginas.
*   **Busca de jogos:** Integração com a API RAWG para pesquisa de jogos em tempo real.
*   **Responsividade:** Estrutura preparada para adaptação a diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **React Router DOM:** Gerenciamento de rotas na aplicação React.
*   **JavaScript ES6+:** Linguagem de programação para a lógica da aplicação.
*   **SCSS/Sass:** Pré-processador CSS para estilização dos componentes.
*   **Vite:** Ferramenta de build e desenvolvimento rápido.
*   **RAWG API:** Fonte de dados para a busca e exibição de informações sobre jogos.

## ▶️ Instruções de Execução

Para configurar e executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
    ```
2.  **Acesse a pasta do projeto:**
    ```bash
    cd Prateleira-de-Jogos
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute o projeto:**
    ```bash
    npm run dev
    ```
5.  **Acesse no navegador:**
    A aplicação estará disponível em `http://localhost:5173`.

    **Observação:** Caso a porta `5173` esteja ocupada, o Vite pode iniciar em outra porta (ex: `4000`). Para fixar a porta, configure o arquivo `vite.config.js` adicionando o seguinte trecho:
    ```javascript
    server: {
      port: 5173,
      strictPort: true
    }
    ```

## 🗂️ Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```
Prateleira-de-Jogos/
│
├── src/
│   ├── pages/             # Páginas principais da aplicação (Home, GamePage, Favorites)
│   │   ├── Home/
│   │   ├── GamePage/
│   │   └── Favorites/
│   │
│   ├── components/        # Componentes reutilizáveis (Button, CardGame, FavoriteIcon, Loader)
│   │   ├── Button/
│   │   ├── CardGame/
│   │   ├── FavoriteIcon/
│   │   └── Loader/
│   │
│   ├── services/          # Funções auxiliares (ex: gerenciamento de favoritos com localStorage)
│   │   └── favorites.js
│   │
│   ├── App.jsx            # Configuração das rotas da aplicação
│   ├── main.jsx           # Ponto de entrada do React
│   └── index.css          # Estilos globais
│
├── public/                # Arquivos estáticos
├── package.json           # Metadados e dependências do projeto
└── README.md              # Documentação do projeto
```

## 🚀 Considerações Finais

Este projeto serve como uma demonstração de conceitos importantes no desenvolvimento front-end moderno, incluindo:

*   Organização em componentes reutilizáveis.
*   Navegação com rotas dinâmicas.
*   Manipulação de estado com React.
*   Persistência de dados no navegador.
*   Integração com API externa (RAWG).

### Possíveis Evoluções Futuras:

*   **Filtros avançados de busca:** Implementação de opções de filtragem mais robustas para a pesquisa de jogos.
*   **Autenticação de usuários:** Adição de um sistema de login e registro para personalização da experiência.
*   **Deploy em produção:** Publicação da aplicação em plataformas como GitHub Pages ou Vercel.

## 👨‍💻 Autor

Desenvolvido por Rafael C. Barros
