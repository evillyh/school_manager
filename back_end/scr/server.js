const app = require('./app');
const port = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`🚀 Servidor rodando na porta ${port}`);
        console.log(`📱 Acesse: http://localhost:${port}`);
    });
}

module.exports = app;
