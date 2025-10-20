# Guia — Back-end (Node + Express)
← [Voltar ao README geral](../../README.md) · [Índice do tutorial](../README.md)

## Objetivo
Entregar a API do MVP com regras de negócio, autenticação e dados persistidos.

## O que fazemos no MVP
- **Auth (JWT)**: `POST /auth/login`, `GET /auth/me`
- **Alunos**: CRUD
- **Turmas**: CRUD
- **Matrículas**: criar/listar (impedir duplicidade)
- **Notas/Boletim**: lançar e consultar

## Entregáveis deste bimestre
- [ ] Rotas do MVP funcionando
- [ ] Validação de entrada e erros padronizados
- [ ] Documentação simples da API (Swagger/OpenAPI)
- [ ] Testes básicos (Jest + Supertest em rotas críticas)

## Definition of Done (BE)
- Request validado e erro tratado
- Resposta padronizada `{ message, code, details? }`
- JWT protegendo rotas necessárias
- Teste de integração mínimo por módulo

## Rotina da semana
1. Conferir mudanças no **contrato da API**  
2. Implementar/validar rota → escrever teste → atualizar Swagger  
3. Publicar *seeds* de dados para o FE/QA

## Ferramentas
- Node.js, Express, Mongoose, Jest, Supertest, Swagger

## Primeiras tarefas
- [ ] `/auth/login` e `/auth/me`
- [ ] CRUD `/alunos`
- [ ] CRUD `/turmas`
- [ ] `POST /matriculas` (unicidade aluno+turma)
