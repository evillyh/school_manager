const express = require('express');
const router = express.Router();
const controller = require('../controllers/boletinController');

router.get('/aluno/:alunoId', controller.getBoletimAluno);
router.post('/generate', controller.generate);

module.exports = router;
