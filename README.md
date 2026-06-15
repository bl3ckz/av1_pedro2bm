# 🎬 PedroCine - Sistema de Catálogo de Filmes

Um sistema web completo para gerenciamento de catálogo de filmes, desenvolvido com **React**, **Node.js**, **Express**, **Prisma ORM** e **MySQL**.

## 📋 Índice

- [Features](#features)
- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [API REST](#api-rest)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autores](#autores)

## ✨ Features

- ✅ Cadastro de filmes com informações completas
- ✅ Edição e exclusão de filmes
- ✅ Listagem completa de filmes
- ✅ Busca por título
- ✅ Filtro por gênero (21 gêneros disponíveis)
- ✅ Classificação indicativa de idade
- ✅ Sistema de disponibilidade
- ✅ Avaliações e notas
- ✅ Interface moderna e responsiva
- ✅ Tema inspirado em plataformas de streaming premium

## 🛠️ Tecnologias

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Prisma ORM** - ORM para banco de dados
- **MySQL** - Banco de dados relacional
- **Dotenv** - Variáveis de ambiente

### Frontend
- **React 19** - Biblioteca UI
- **Vite** - Build tool
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Framework CSS utility-first

## 📦 Requisitos

- **Node.js** (v18 ou superior)
- **npm** (v9 ou superior)
- **MySQL** (v5.7 ou superior) ou **MariaDB**
- **Git**

## 🚀 Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/av1-dsw-nome-sobrenome-2bimestre.git
cd av1-dsw-nome-sobrenome-2bimestre
```

### 2. Configurar Backend

```bash
cd backend
npm install
```

### 3. Configurar Frontend

```bash
cd ../frontend
npm install
```

## ⚙️ Configuração

### Backend - Variáveis de Ambiente

Crie um arquivo `.env` na pasta `backend/`:

```env
# Servidor
PORT=3000

# Banco de Dados
DATABASE_URL=mysql://root:sua_senha@localhost:3306/pedrocine
```

**Exemplo com XAMPP:**
```env
PORT=3000
DATABASE_URL=mysql://root:@localhost:3306/pedrocine
```

### Criar Banco de Dados

Você pode criar o banco de dados manualmente ou deixar o Prisma fazer isso:

**Via MySQL CLI:**
```sql
CREATE DATABASE pedrocine;
```

**Via phpMyAdmin (XAMPP):**
1. Abra http://localhost/phpmyadmin
2. Clique em "Novo"
3. Digite `pedrocine` como nome do banco
4. Clique em "Criar"

### Prisma - Migrations

No diretório `backend/`, execute:

```bash
# Gerar cliente Prisma
npm run prisma:generate

# Executar migrations (criar tabelas)
npm run prisma:migrate

# Abrir Prisma Studio (UI para visualizar dados)
npm run prisma:studio
```

## 🎯 Execução

### Backend

```bash
cd backend

# Desenvolvimento (com hot-reload)
npm run dev

# Produção
npm start
```

O servidor estará disponível em: `http://localhost:3000`

### Frontend

```bash
cd frontend

# Desenvolvimento
npm run dev

# Build para produção
npm build

# Preview da build de produção
npm run preview
```

O frontend estará disponível em: `http://localhost:5173`

## 📡 API REST

### Base URL
```
http://localhost:3000/movies
```

### Endpoints

#### 1. Listar Todos os Filmes
```
GET /movies
```

**Response:**
```json
[
  {
    "id": 1,
    "titulo": "Interestelar",
    "genero": "Ficção Científica",
    "descricao": "Uma equipe de astronautas...",
    "diretor": "Christopher Nolan",
    "elenco": "Matthew McConaughey, Anne Hathaway",
    "duracao": 169,
    "anoLancamento": 2014,
    "classificacao": "12 anos",
    "imagem": "https://...",
    "nota": 9.5,
    "disponivel": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### 2. Obter Filme por ID
```
GET /movies/:id
```

**Exemplo:**
```
GET /movies/1
```

#### 3. Criar Novo Filme
```
POST /movies
Content-Type: application/json
```

**Body:**
```json
{
  "titulo": "Interestelar",
  "genero": "Ficção Científica",
  "descrição": "Uma equipe de astronautas viaja através de um buraco de minhoca...",
  "diretor": "Christopher Nolan",
  "elenco": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
  "duracao": 169,
  "anoLancamento": 2014,
  "classificacao": "12 anos",
  "imagem": "https://...",
  "nota": 9.5,
  "disponivel": true
}
```

#### 4. Atualizar Filme
```
PUT /movies/:id
Content-Type: application/json
```

**Exemplo:**
```
PUT /movies/1
```

#### 5. Deletar Filme
```
DELETE /movies/:id
```

**Exemplo:**
```
DELETE /movies/1
```

#### 6. Buscar por Título
```
GET /movies/search/:titulo
```

**Exemplo:**
```
GET /movies/search/Interestelar
```

#### 7. Filtrar por Gênero
```
GET /movies/genre/:genero
```

**Exemplo:**
```
GET /movies/genre/Ficção Científica
```

## 🎬 Gêneros Disponíveis

- Ação
- Aventura
- Comédia
- Comédia Romântica
- Drama
- Ficção Científica
- Fantasia
- Terror
- Suspense
- Mistério
- Animação
- Documentário
- Romance
- Crime
- Guerra
- Musical
- Super-Herói
- Anime
- Biografia
- Família
- Pós-Apocalíptico

## 📂 Estrutura do Projeto

```
av1-dsw-nome-sobrenome-2bimestre/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── prisma.js
│   │   ├── controllers/
│   │   │   └── filmeController.js
│   │   ├── models/
│   │   │   └── filmeModel.js
│   │   ├── routes/
│   │   │   └── filmeRoutes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── Footer/
│   │   │   ├── MovieCard/
│   │   │   ├── MovieForm/
│   │   │   ├── SearchBar/
│   │   │   ├── GenreFilter/
│   │   │   ├── Loading/
│   │   │   ├── ErrorMessage/
│   │   │   └── ModalDelete/
│   │   ├── pages/
│   │   │   ├── HomePage/
│   │   │   ├── MovieListPage/
│   │   │   ├── CreateMoviePage/
│   │   │   ├── EditMoviePage/
│   │   │   ├── MovieDetailsPage/
│   │   │   └── NotFoundPage/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── README.md
```

## 🎨 Paleta de Cores

- **Azul Escuro Primário:** `#0F172A`
- **Vermelho Destaque:** `#DC2626`
- **Amarelo Secundário:** `#FACC15`
- **Branco:** `#FFFFFF`
- **Cinza:** `#1A1F35` (fundo secundário)

## 🔄 Fluxo de Dados

```
User Interface (React)
        ↓
   Axios Request
        ↓
   Express API
        ↓
   Prisma ORM
        ↓
   MySQL Database
```

## 📝 Modelagem de Dados

### Movie (Filme)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | Int (PK) | ID único |
| titulo | String | Nome do filme |
| genero | String | Gênero do filme |
| descricao | Text | Sinopse completa |
| diretor | String | Nome do diretor |
| elenco | Text | Atores principais |
| duracao | Int | Duração em minutos |
| anoLancamento | Int | Ano de lançamento |
| classificacao | String | Classificação indicativa |
| imagem | Text | URL da imagem do pôster |
| nota | Float | Avaliação (0-10) |
| disponivel | Boolean | Status de disponibilidade |
| createdAt | DateTime | Data de criação |
| updatedAt | DateTime | Data de última atualização |

## 🧪 Testando com Ferramentas

### Postman ou Insomnia

1. Abra a ferramenta de teste de API
2. Configure a base URL: `http://localhost:3000`
3. Teste os endpoints conforme documentado acima

**Exemplo de teste POST:**
```
Método: POST
URL: http://localhost:3000/movies
Headers: Content-Type: application/json
Body (JSON):
{
  "titulo": "Teste",
  "genero": "Ação",
  "diretor": "Seu Nome",
  "duracao": 120,
  "anoLancamento": 2024,
  "classificacao": "12 anos",
  "nota": 8.0,
  "disponivel": true
}
```

## 🚨 Troubleshooting

### Erro: "Conexão recusada" no banco de dados
- Verifique se MySQL/MariaDB está rodando
- Verifique a URL de conexão no `.env`
- Certifique-se que o banco existe

### Erro: "Port 3000 já está em uso"
- Mude a PORT no arquivo `.env`
- Ou feche a aplicação que está usando a porta

### Erro: "Módulos não encontrados"
- Execute `npm install` novamente
- Delete `node_modules` e `package-lock.json`, depois reinstale

### Erro: "CORS"
- Verifique a configuração de origem no frontend
- Certifique-se que backend está rodando

## 📚 Scripts Disponíveis

### Backend

```bash
npm run start        # Executa em produção
npm run dev         # Executa em desenvolvimento
npm run prisma:generate   # Gera cliente Prisma
npm run prisma:migrate    # Executa migrations
npm run prisma:studio     # Abre Prisma Studio UI
```

### Frontend

```bash
npm run dev          # Modo desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build
npm run lint         # Análise de código
```

## 🔐 Variáveis de Ambiente

### Backend (.env)

```env
# Servidor
PORT=3000
NODE_ENV=development

# Banco de Dados
DATABASE_URL=mysql://usuario:senha@host:porta/database
```

## 📱 Responsividade

O projeto é totalmente responsivo e funciona perfeitamente em:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (até 767px)

## 📄 Licença

Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## 👥 Autores

- **Pedro Dantas** - Desenvolvimento completo

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

**Desenvolvido com ❤️ para a disciplina de Desenvolvimento de Sistemas Web (DSW)**
