const express = require('express');
const router = express.Router();
const controller = require('../controllers/frequenciaController');

router.get('/', controller.list);
router.post('/', controller.mark);
router.get('/aluno/:alunoId', controller.getByAluno);

module.exports = router;
