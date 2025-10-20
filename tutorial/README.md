# Tutorial do Projeto — **Índice para Iniciantes**

> **Como usar:** este é o ponto de partida. Clique nos links para abrir os guias de cada equipe e os passos da semana.

---

## 🔗 Links rápidos

* **README geral (voltar)**: `../../README.md`
* **PM / Gerente de Projeto** → `guias/gerente-de-projeto.md`
* **Front‑end (React)** → `guias/front-end.md`
* **Back‑end (Node + Express)** → `guias/back-end.md`
* **Banco de Dados (MongoDB)** → `guias/banco-de-dados.md`
* **Qualidade (QA)** → `guias/qualidade.md`

**Referências do projeto**

* **Instalação** → `guias/instalacao.md`
* **Ambiente (.env)** → `guias/ambiente.md`
* **Requisitos funcionais (MVP)** → `guias/requisitos-funcionais.md`
* **Requisitos não funcionais** → `guias/requisitos-nao-funcionais.md`
* **Contrato da API (simples)** → `guias/contrato-api.md`
* **Fluxo do MVP (login → boletim)** → `guias/fluxo-mvp.md`
* **Ritos e Papéis** → `guias/ritos-e-papeis.md`
* **Glossário** → `guias/glossario.md`
* **FAQ** → `guias/faq.md`
* **Como contribuir (PR/branches)** → `guias/contribuicao.md`

---

## 📅 Calendário do bimestre (8 semanas)

> **Ritmo fixo:** Quarta = Aulas 1–2 (2×45 min) • Sexta = Aulas 3–4 (2×45 min).
> **Regra de ouro:** passos **simples** e **pequenos**. Cada item abaixo cabe no tempo da aula.

### Semana 1 — Começo simples

**17/10/2025**

* Apresentação do MVP e papéis (10–15 min).
* Criar repositório e pastas: `api/`, `web/`, `tutorial/` (15 min).
* Ler guias do seu time (15 min) → `guias/*.md`.
* **Saída da aula:** times formados, repositório pronto.

**22/10/2025**

* **Instalação** (Node, Git, Mongo) com `guias/instalacao.md` (25 min).
* **Ambiente**: criar `api/.env` e `web/.env` usando os exemplos (20 min).
* **Hello World**:

  * BE: rota GET `/` retornando `{ ok: true }` (15 min).
  * FE: app React (Vite) renderizando “Olá, Escola” (15 min).
* **Saída:** API e Web rodando localmente.

### Semana 2 — Autenticação básica

**24/10/2025**

* BE: `POST /auth/login` (usuário fixo do seed) → devolve token (45 min).
* FE: tela de login + chamada ao endpoint (45 min).
* QA: cria collection “Auth” no Postman (em paralelo).

**29/10/2025**

* BE: `GET /auth/me` (token) (20 min) e middleware de proteção (25 min).
* FE: guarda de rota para áreas logadas (30 min).
* **Smoke de Auth** (10 min).

### Semana 3 — Alunos (CRUD simples)

**Quarta**: BE `GET/POST /alunos` com validação mínima; FE lista + formulário de cadastro.
**Sexta**: BE `PUT/DELETE /alunos`; FE edição/remoção; QA testa 200/400.

### Semana 4 — Turmas (CRUD)

**Quarta**: BE `GET/POST /turmas`; FE lista + cadastro.
**Sexta**: BE `PUT/DELETE /turmas`; FE edição/remoção; **Integração parcial** (aluno ↔ turma visual).

### Semana 5 — Matrículas

**Quarta**: BE `POST /matriculas` (índice único aluno+turma); FE tela de matrícula (autocomplete).
**Sexta**: BE `GET /matriculas?turma=...`; FE listagem por turma; **E2E Aluno→Turma**.

### Semana 6 — Notas e Boletim

**Quarta**: BE `POST /notas` (faixa 0–10); FE tela de lançamento (por turma).
**Sexta**: BE `GET /boletins/:alunoId`; FE tela de **Boletim**; **Smoke geral**.

### Semana 7 — Qualidade e Documentação

**Quarta**: revisar **mensagens de erro**, validações e **OpenAPI**; QA amplia Postman.
**Sexta**: **Bug bash** (testar tudo, registrar e corrigir bugs prioritários).

### Semana 8 — Apresentação

**Quarta**: ensaio do **pitch** (5–7 min) + roteiro de demo (login → boletim).
**Sexta**: **Demo final** + retrospectiva curta (o que continuar/parar/começar).

---

## ✅ Checklists rápidos (colar no quadro)

* **Pronto =** funciona, tem mensagem de erro clara, foi revisado e testado (smoke).
* **Integração** (qua/sex): FE e BE juntam, QA roda Postman; o que quebrou vira issue.
* **Pequeno sempre:** se uma tarefa passar de 45 min, **quebre em 2**.

---

## 🆘 Como pedir ajuda

1. Descreva **o que tentou** e **o que aconteceu**.
2. Cole o **trecho de erro** (se houver) e diga em qual **passo** do guia está.
3. Marque seu **líder** e, se for bug, **abra uma issue**.

---

## 🧪 Dados de exemplo (seed) — mínimo

* Usuário admin: `admin@escola.local` / `123456`
* 2 turmas (2A manhã, 2B tarde) • 5 alunos de exemplo

> O script de seed fica descrito em: `guias/banco-de-dados.md`.

---

## 🎯 Objetivo do bimestre

Entregar o **MVP funcionando**: Login/Perfis, Alunos, Turmas, Matrículas e Notas/Boletim — com apresentação final. Foco em **passos simples**, **tempo de aula** e **trabalho em equipe**.
