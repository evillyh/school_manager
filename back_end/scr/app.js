const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Import routes
const alunoRoutes = require('./route/alunoRoutes');
const authRoutes = require('./route/authRoutes');
const calendarioRoutes = require('./route/calendarioRoutes');
const frequenciaRoutes = require('./route/frequenciaRoutes');
const boletinRoutes = require('./route/boletinRoutes');
const cursoRoutes = require('./route/cursoRoutes');
const servicosRoutes = require('./route/servicosRoutes');
const horarioRoutes = require('./route/horarioRoutes');
const perfilRoutes = require('./route/perfilRoutes');

app.use('/api/aluno', alunoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/calendario', calendarioRoutes);
app.use('/api/frequencia', frequenciaRoutes);
app.use('/api/boletin', boletinRoutes);
app.use('/api/curso', cursoRoutes);
app.use('/api/servicos', servicosRoutes);
app.use('/api/horario', horarioRoutes);
app.use('/api/perfil', perfilRoutes);

app.get('/api', (req, res) => res.json({ mensagem: 'API School Manager funcionando' }));

// Servir o arquivo index.html para todas as rotas que não começam com /api
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (require.main === module) {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}

module.exports = app;
