const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.list);
router.get('/:id', alunoController.getById);
router.post('/', alunoController.create);
router.put('/:id', alunoController.update);
router.delete('/:id', alunoController.remove);

module.exports = router;
