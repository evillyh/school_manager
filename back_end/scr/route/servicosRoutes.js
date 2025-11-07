const express = require('express');
const router = express.Router();

// Importa as rotas existentes para reaproveitar os handlers
const boletinRoutes = require('./boletinRoutes');
const frequenciaRoutes = require('./frequenciaRoutes');
const calendarioRoutes = require('./calendarioRoutes');
const cursoRoutes = require('./cursoRoutes');

// Rota principal de /api/servicos retorna os serviços disponíveis
router.get('/', (req, res) => {
    res.json({
        servicos: ['boletin', 'frequencia', 'calendario', 'cursos'],
        routes: {
            boletin: '/api/servicos/boletin',
            frequencia: '/api/servicos/frequencia',
            calendario: '/api/servicos/calendario',
            cursos: '/api/servicos/cursos'
        }
    });
});

// Monta as rotas existentes sob /api/servicos
router.use('/boletin', boletinRoutes);
router.use('/frequencia', frequenciaRoutes);
router.use('/calendario', calendarioRoutes);
router.use('/cursos', cursoRoutes);

module.exports = router;
