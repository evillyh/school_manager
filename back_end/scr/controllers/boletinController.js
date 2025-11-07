// Controller mínimo para boletim
exports.getBoletimAluno = (req, res) => {
    res.json({ mensagem: `Boletim do aluno ${req.params.alunoId}`, notas: [] });
};

exports.generate = (req, res) => {
    // Geração de boletim (exemplo)
    res.json({ mensagem: 'Boletim gerado (exemplo)' });
};
