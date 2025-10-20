# Guia — Banco de Dados (MongoDB)
← [Voltar ao README geral](../../README.md) · [Índice do tutorial](../README.md)

## Objetivo
Oferecer **modelagem de dados** e boas práticas para que as equipes entreguem rápido e sem retrabalho.

## O que fazemos no MVP
- Definir **schemas** (Usuario, Aluno, Turma, Matricula, Nota)
- Criar **índices** (ex.: unicidade aluno+turma)
- Preparar **seed** de dados para demos
- Revisar PRs relacionados a dados

## Entregáveis deste bimestre
- [ ] Schemas Mongoose publicados
- [ ] Índices criados
- [ ] `seed.js` com dados do MVP
- [ ] Guia curto de backup/export

## Definition of Done (DB)
- Schema descrito no guia e no código
- Índice necessário criado/testado
- Seed roda com 1 comando
- Compatível com o contrato da API

## Rotina da semana
1. Confirmar campos/relacionamentos com BE/FE  
2. Atualizar schemas/índices/seed  
3. Revisar PRs e ajustar consultas lentas

## Ferramentas
- MongoDB, Mongoose

## Primeiras tarefas
- [ ] Schema `Usuario` (papel, email unique)
- [ ] Schema `Aluno`, `Turma`
- [ ] Índice único `Matricula(alunoId, turmaId)`
- [ ] Seed inicial (2 turmas, 5 alunos, 1 professor)
