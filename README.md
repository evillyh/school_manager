# Sistema Escolar — **README Geral (Instrutivo)**

> **Para quem é este arquivo?** Para toda a turma. Ele explica **quem faz o quê**, **o que vamos entregar** e **onde estão os guias**. É a porta de entrada do projeto.

---

## 🧭 Como navegar

* Tudo que é explicação e passo a passo fica na pasta **`tutorial/guias/`**.
* Use os links abaixo para abrir cada manual específico (como num site).

> Dica: no GitHub, os links entre `.md` funcionam como páginas web (é só clicar).

---
## 🧩 Tecnologias por equipe

### Back-end
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" height="32" />
  <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/jwt.svg" alt="JWT" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" height="32" />
</p>

### Front-end
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" height="32" />
  <img src="https://img.shields.io/badge/React%20Router-fff?logo=reactrouter&logoColor=CA4245" alt="React Router" height="20" />
  <img src="https://img.shields.io/badge/Axios-fff?logo=axios&logoColor=5A29E4" alt="Axios" height="20" />
</p>

### Banco de Dados
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" height="32" />
</p>

### Qualidade (QA) e Integração
<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg" alt="Postman" height="32" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-plain.svg" alt="GitHub Actions" height="32" />
</p>


## 👥 Quem é quem (hierarquia funcional)

**Supervisor / Gerente de Projeto (PM)**

* **Responsável geral** pelo cronograma, prioridades e integração entre equipes.
* **Nome:** *Hevilly*
* **Manual do cargo:** [`tutorial/guias/gerente-de-projeto.md`](tutorial/guias/gerente-de-projeto.md)

**Líder — Front-end**

* Cuida do andamento do time de telas e navegação.
* **Nome:** *Helen*
* **Manual do cargo:** [`tutorial/guias/front-end.md`](tutorial/guias/front-end.md)

**Líder — Back-end**

* Cuida do andamento do time de regras e APIs.
* **Nome:** *Ryan*
* **Manual do cargo:** [`tutorial/guias/back-end.md`](tutorial/guias/back-end.md)

**Líder — Banco de Dados (Guilda/Consultoria)**

* Define modelos de dados, índices e *seed*; revisa PRs relacionados a dados.
* **Nome:** *Luismar*
* **Manual do cargo:** [`tutorial/guias/banco-de-dados.md`](tutorial/guias/banco-de-dados.md)

**Analistas de Qualidade (QA)** *(2 alunos, reportam direto ao PM)*

* Criam casos de teste, executam *smoke test* nas integrações e registram bugs.
* **Nomes:** *Emilly* / *Lucas*
* **Manual do cargo:** [`tutorial/guias/qualidade.md`](tutorial/guias/qualidade.md)

> **Fluxo de reporte:** ( QA → PM ) | ( Líderes de equipe ↔ PM ) | ( Todos os membros ↔ seus líderes )

---

## 🎯 O que vamos entregar (escopo do MVP)

* **Login/Perfis** (Admin, Secretaria, Professor, Aluno – leitura)
* **Alunos** (cadastro, edição, listagem)
* **Turmas** (criação com ano/turno/professor)
* **Matrículas** (vincular aluno à turma sem duplicar)
* **Notas/Boletim** (lançar por bimestre e visualizar boletim simples)

> **Fluxo do usuário:** Login → Cadastrar Aluno → Criar Turma → Matricular → Lançar Nota → Ver Boletim.

---

## 🔧 Como vamos trabalhar (resumo simples)

* **Ritos:** *daily* curta (10 min), *planning* semanal, integração **Quarta e sexta**, *review* e *retro* ao final da aula.
* **Quadro:** Kanban (Backlog → Em andamento → Em revisão → Testes → Pronto).
* **Regra de ouro:** tarefa só vai para **Pronto** com checklist (DoD) marcada.
* **Contratos:** termos de API, erros e permissões ficam no guia correspondente (links abaixo).

---

## 📚 Referências (tudo dentro de `/guia`)

* **Guia de instalação e primeiro uso** → [`tutorial/guias/instalacao.md`](tutorial/guias/instalacao.md)
* **Requisitos funcionais (MVP)** → [`tutorial/guias/requisitos-funcionais.md`](tutorial/guias/requisitos-funcionais.md)
* **Requisitos não funcionais** (qualidade, validação, mensagens de erro) → [`tutorial/guias/requisitos-nao-funcionais.md`](tutorial/guias/requisitos-nao-funcionais.md)
* **Contrato de API / Padrão de respostas** (explicado de forma simples) → [`tutorial/guias/contrato-api.md`](tutorial/guias/contrato-api.md)
* **Fluxo do MVP (do login ao boletim)** → [`tutorial/guias/fluxo-mvp.md`](tutorial/guias/fluxo-mvp.md)
* **Ritos e papéis (passo a passo)** → [`tutorial/guias/ritos-e-papeis.md`](tutorial/guias/ritos-e-papeis.md)
* **Glossário (tradução de termos)** → [`gtutorial/guias/glossario.md`](tutorial/guias/glossario.md)
* **Dúvidas frequentes (FAQ)** → [`tutorial/guias/faq.md`](tutorial/guias/faq.md)

> **Como contribuir (PR/branches)** → [`tutorial/guias/contribuicao.md`](tutorial/guias/contribuicao.md) • **Ambiente/variáveis** → [`tutorial/guias/ambiente.md`](tutorial/guias/ambiente.md)

---

## 🚀 Primeiros passos (hoje)

1. **Leia o papel do seu time** no guia correspondente (links acima).
2. **PM apresenta o quadro** e define as 3 primeiras tarefas de cada equipe.
3. **Cada time abre suas issues** pequenas (ex.: “Listar alunos”, “Criar turma”, “Matricular aluno”).
4. **Marcar a próxima integração** (terça e quinta).

---

## ✅ Definition of Done (DoD) — versão simples

* Tem validação básica e mensagem de erro clara.
* Foi revisada por alguém do time (ou QA, se for tela/teste).
* Foi demonstrada em *review* e documentada no guia/README do time se necessário.

---

## 🗂️ Estrutura do repositório (sugerida)

```
repo/
  README.md
  tutorial/
    README.md            # índice do tutorial (opcional)
    guias/
      gerente-de-projeto.md
      front-end.md
      back-end.md
      banco-de-dados.md
      qualidade.md
      instalacao.md
      requisitos-funcionais.md
      requisitos-nao-funcionais.md
      contrato-api.md
      fluxo-mvp.md
      ritos-e-papeis.md
      glossario.md
      faq.md
      contribuicao.md
      ambiente.md
  api/
  web/
```

---

## 📝 Hierarquia

* PM: *Hevilly*
* Líder FE: *Helen*
* Líder BE: *Ryan*
* Líder DB: *Luismar*
* QA: *Emilly* e *Lucas*

---

## 📣 Regras de convivência (curtas)

* **Respeito sempre.** Errou? tudo bem — peça ajuda cedo.
* **Comunicação conta.** Avise bloqueios no *daily*.
* **Entrega pequena e frequente.** Melhor simples funcionando do que complexo prometido.

---

## 🏁 Objetivo do bimestre

Entregar o **MVP funcionando** com os 5 módulos e apresentar em **demo final** (com o PM guiando o pitch).
*Se sobrar tempo, melhoramos a qualidade e a experiência — sem aumentar escopo.*

> **Voltar ao topo:** [clique aqui](#sistema-escolar-%E2%80%94-readme-geral-instrutivo)
