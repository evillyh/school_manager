// Controller mínimo para curso
exports.list = (req, res) => {
    res.json({ mensagem: 'Lista de cursos (exemplo)' });
};

exports.create = (req, res) => {
    res.status(201).json({ mensagem: 'Curso criado', curso: req.body });
};

exports.getById = (req, res) => {
    res.json({ mensagem: `Detalhes do curso ${req.params.id}` });
};
