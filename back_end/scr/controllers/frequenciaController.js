// Controller mínimo para frequência
exports.list = (req, res) => {
    res.json({ mensagem: 'Lista de frequências (exemplo)' });
};

exports.mark = (req, res) => {
    const registro = req.body;
    res.status(201).json({ mensagem: 'Frequência registrada', registro });
};

exports.getByAluno = (req, res) => {
    res.json({ mensagem: `Frequência do aluno ${req.params.alunoId}` });
};
