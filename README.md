# 🎮 Prateleira de Jogos

## 📌 5.1 Identificação

**Nome do projeto:**
Prateleira de Jogos

**Descrição:**
A Prateleira de Jogos é uma aplicação web desenvolvida com foco na organização e visualização de jogos digitais. O sistema permite listar jogos, visualizar detalhes individuais e gerenciar uma lista de favoritos utilizando armazenamento local do navegador (*localStorage*).

O projeto tem como objetivo praticar conceitos de desenvolvimento front-end moderno, incluindo componentização, roteamento e persistência de dados no cliente.

---

## ⚙️ 5.2 Funcionalidades

* 📋 Listagem de jogos na página inicial
* 🔎 Visualização de detalhes de um jogo específico
* ⭐ Adição de jogos à lista de favoritos
* ❌ Remoção de jogos dos favoritos
* 💾 Persistência dos favoritos utilizando **localStorage**
* 🔄 Navegação entre páginas utilizando rotas dinâmicas
* 📱 Estrutura preparada para responsividade

---

## 🛠️ 5.3 Tecnologias Utilizadas

* **React** – Biblioteca principal para construção da interface
* **React Router DOM** – Gerenciamento de rotas da aplicação
* **JavaScript (ES6+)** – Lógica da aplicação
* **CSS / SCSS (Sass)** – Estilização dos componentes
* **Vite (ou bundler equivalente)** – Ferramenta de build e desenvolvimento

---

## ▶️ 5.4 Instruções de Execução

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Acesse a pasta do projeto

```bash
cd Prateleira-de-Jogos
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

### 5. Acesse no navegador

```bash
http://localhost:5173
```

---

## 🗂️ 5.5 Estrutura do Projeto

```
Prateleira-de-Jogos/
│
├── src/
│   ├── pages/
│   │   ├── Home/
│   │   ├── GamePage/
│   │   └── Favorites/
│   │
│   ├── components/
│   │   └── (componentes reutilizáveis)
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── public/
├── package.json
└── README.md
```

**Descrição da estrutura:**

* `pages/` → Contém as páginas principais da aplicação
* `components/` → Componentes reutilizáveis (caso existam)
* `App.jsx` → Configuração das rotas da aplicação
* `main.jsx` → Ponto de entrada do React
* `styles` → Arquivos de estilização

---

## 🚀 Considerações Finais

Este projeto demonstra a aplicação de conceitos importantes do desenvolvimento front-end, como:

* Organização de código em componentes
* Navegação com rotas dinâmicas
* Manipulação de estado com React
* Persistência de dados no navegador

Além disso, serve como base para evoluções futuras, como:

* Integração com APIs externas
* Sistema de busca e filtros
* Autenticação de usuários
* Deploy em produção

---

## 👨‍💻 Autor

Desenvolvido por **Rafael C. Barros**
