// Controller mínimo para horário
exports.list = (req, res) => {
    res.json({ mensagem: 'Lista de horários (exemplo)' });
};

exports.getById = (req, res) => {
    res.json({ mensagem: `Detalhes do horário ${req.params.id}` });
};

exports.create = (req, res) => {
    const horario = req.body;
    res.status(201).json({ mensagem: 'Horário criado', horario });
};
