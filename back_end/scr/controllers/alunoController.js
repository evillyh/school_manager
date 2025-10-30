// scr/controllers/alunoRoutes.js
const express = require('express');
const router = express.Router();

// Mock de dados (em produção, você deve conectar com um banco de dados)
const alunos = require('../mock/alunos.json');

// Rota para obter todos os alunos
router.get('/', (req, res) => {
    res.json(alunos);
});

// Rota para adicionar um novo aluno
router.post('/', (req, res) => {
    const novoAluno = req.body;
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

// Outros endpoints podem ser criados conforme necessário...

module.exports = router;
