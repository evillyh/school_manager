# 🧠 Projeto Integrador – Back-End

## 📚 Descrição do Projeto

Este repositório contém o **Back-End** do projeto integrado, que simula o sistema **Net Escola**.  
O sistema permitirá que **professores** lancem notas e frequência, e que **alunos** visualizem informações como:
- Notas
- Frequência
- Perfil
- Matrícula

O projeto completo é dividido entre vários grupos:
- 🧠 **Back-End (nosso grupo):** criação da API e regras de negócio.

---

## ⚙️ Responsabilidades do Grupo Back-End

Nosso grupo será responsável por:
- Criar a **API REST** para comunicação com o Front-End.
- Fazer a **integração com o banco de dados**.
- Implementar o **login de alunos e professores**.
- Criar rotas para:
  - Cadastro e autenticação de usuários.
  - Lançamento de notas e frequência (professor).
  - Consulta de boletim e perfil (aluno).
- Garantir a **segurança e validação dos dados**.

---

## 🧰 Tecnologias que serão utilizadas

- **Node.js** com **Express**
- **PostgreSQL** (banco de dados relacional)
- **Sequelize** (ORM)
- **JWT** para autenticação
- **Dotenv** para variáveis de ambiente
- **Nodemon** para desenvolvimento

---

## 🚀 Etapas do Desenvolvimento

1. **Configuração do ambiente**
   - Criar estrutura base do projeto Node.js
   - Instalar dependências

2. **Conexão com o banco**
   - Configurar Sequelize
   - Criar models e migrations

3. **Criação das rotas**
   - Rotas de login e cadastro
   - Rotas de notas e frequência
   - Rotas de perfil e matrícula

4. **Testes e integração**
   - Testar requisições com Postman
   - Garantir a integração com o Front-End

---

## 🔗 Comunicação com os Outros Grupos

- O **Front-End** vai consumir os endpoints criados por nós.
- O **Banco de Dados** vai fornecer o modelo e o script SQL que usaremos.
- Vamos combinar o formato dos dados (JSON) e as rotas principais.

---

## 👥 Integrantes do Grupo Back-End

| Nome | Função | GitHub |
|------|--------|--------|
| Gabriel F| Desenvolvedor Back-End | [@Gabriel](https://github.com/Gabriel) |
| Ryan P   | Líder  Back-End | [@RyanPDMatos](https://github.com/RyanPDMatos) |
| Marcos V  | Vice Líder Back-End | [@64saraiva](https://github.com/64Saraiva) |
| João V  | Desenvolvedor Back-End | [@galocego1707](https://github.com/galocego1707) |
| Victtor  | Desenvolvedor Back-End | [@victtorsousa064](https://github.com/victtorsousa064) |

---

## 📅 Status do Projeto
📌 Em desenvolvimento  
📆 Etapa atual: Planejamento e definição das rotas da API

---

## 📄 Observações
Este README será atualizado conforme o desenvolvimento do projeto avança.








🧩 ETAPAS INICIAIS DO GRUPO BACK-END
🥇 1. Planejar
Antes de programar, o grupo precisa entender o que vai ser feito:
O sistema é tipo Net Escola, então precisa ter:
Login de aluno e professor
Cadastro de notas e frequência (professor)
Consulta de boletim, matrícula e perfil (aluno)
Anotem quais dados serão necessários: alunos, professores, turmas, disciplinas, notas, frequência etc.
Combinar com o grupo do banco de dados: quais tabelas eles vão criar.



📝 Dica: façam um mini “mapa” com as rotas que vocês vão precisar:

Ação	Método	Rota	Quem usa
Login	POST	/api/login	Aluno/Professor
Ver perfil	GET	/api/usuario/:id	Todos
Lançar notas	POST	/api/notas	Professor
Ver boletim	GET	/api/notas/:alunoId	Aluno



🥈 2. Criar o Repositório
Um integrante cria um repositório no GitHub chamado por exemplo backend-net-escola
Compartilha o link com os outros (adiciona como colaboradores)



🥉 3. Criar o Projeto Node.js

Dentro da pasta do projeto (no computador de vocês):

mkdir backend-net-escola
cd backend-net-escola
npm init -y





Isso cria o package.json, que define o projeto Node.

🧱 4. Instalar Dependências

Esses pacotes são os básicos para começar:

npm install express cors dotenv jsonwebtoken bcryptjs sequelize pg pg-hstore
npm install --save-dev nodemon

⚙️ 5. Configurar o Servidor

Crie um arquivo app.js (ou server.js) com o básico:

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do Sistema Escolar está rodando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));





Agora, testem:
"npm run dev"


👉 (mas antes, adicionem o script no package.json):

"scripts": {
  "dev": "nodemon app.js"
}


Se aparecer “Servidor rodando na porta 3000”, deu certo ✅

🗄️ 6. Integrar com o Banco

Quando o grupo do banco de dados terminar o modelo (tabelas e colunas), vocês configuram o Sequelize para conectar.
Criem os models (Aluno, Professor, Nota, Frequencia...).

🔐 7. Criar o Sistema de Login
Criar rota /api/login
Usar bcryptjs para senhas e jsonwebtoken (JWT) para autenticação.

🧪 8. Testar com Postman

Usem o Postman ou Insomnia para testar as rotas.
Cada vez que criarem uma rota nova, testem se está salvando e retornando dados corretamente.

📘 9. Escrever o README (no GitHub)

Quando tiverem o planejamento pronto, façam o README explicando:

O que o back-end faz
Como rodar
Quais tecnologias usa
Quem faz parte do grupo
(Posso te ajudar a montar esse README depois que o grupo definir os nomes e a linguagem usada)

🧩 10. Conectar com o Front-End
Quando o grupo do Front-End tiver pronto o site/aplicativo, eles vão consumir as rotas criadas por vocês (por exemplo: /api/notas, /api/login etc.)
