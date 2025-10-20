# Guia — Qualidade (QA)
← [Voltar ao README geral](../../README.md) · [Índice do tutorial](../README.md)

## Objetivo
Garantir que o que foi feito **funcione de ponta a ponta** e esteja de acordo com o combinado.

## O que fazemos no MVP
- Criar **casos de teste** por história
- Manter **collection do Postman** (ambiente `API_URL`)
- Rodar **smoke test** nas integrações (qua/sex)
- Registrar bugs com passos, esperado e observado

## Entregáveis deste bimestre
- [ ] Collection Postman com testes 200/400/401/403
- [ ] Roteiro de testes por módulo
- [ ] Relatório de bugs da semana

## Definition of Done (QA)
- Cenários críticos cobertos (login, CRUDs, matrícula, notas)
- Smoke da integração passou
- Bugs documentados e linkados a issues

## Rotina da semana
1. Atualizar collection conforme contrato da API  
2. Executar smoke e reportar  
3. Verificar correções antes da review

## Ferramentas
- Postman, GitHub Issues

## Primeiras tarefas
- [ ] Collection base (auth, alunos, turmas)
- [ ] Ambiente com `API_URL`
- [ ] Testes de status e conteúdo mínimo
