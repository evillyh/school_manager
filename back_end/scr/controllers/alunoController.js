// scr/controllers/alunoRoutes.js
const express = require('express');
const router = express.Router();


const fs = require('fs');
const path = require('path');

const alunosPath = path.join(__dirname, '..', 'mock', 'alunos.json');

function readAlunos() {
    try {
        const raw = fs.readFileSync(alunosPath, 'utf8');
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function writeAlunos(alunos) {
    fs.writeFileSync(alunosPath, JSON.stringify(alunos, null, 2), 'utf8');
}

exports.list = (req, res) => {
    const alunos = readAlunos();
    res.json(alunos);
};

exports.getById = (req, res) => {
    const alunos = readAlunos();
    const a = alunos.find(x => String(x.id) === String(req.params.id));
    if (!a) return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    res.json(a);
};

exports.create = (req, res) => {
    const alunos = readAlunos();
    const novo = req.body;
    novo.id = alunos.length ? alunos[alunos.length - 1].id + 1 : 1;
    alunos.push(novo);
    writeAlunos(alunos);
    res.status(201).json(novo);
};

exports.update = (req, res) => {
    const alunos = readAlunos();
    const idx = alunos.findIndex(x => String(x.id) === String(req.params.id));
    if (idx === -1) return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    alunos[idx] = { ...alunos[idx], ...req.body };
    writeAlunos(alunos);
    res.json(alunos[idx]);
};

exports.remove = (req, res) => {
    let alunos = readAlunos();
    const idx = alunos.findIndex(x => String(x.id) === String(req.params.id));
    if (idx === -1) return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    const removed = alunos.splice(idx, 1)[0];
    writeAlunos(alunos);
    res.json({ mensagem: 'Aluno removido', removed });
};
