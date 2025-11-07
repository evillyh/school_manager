// Controller mínimo para calendário
exports.list = (req, res) => {
    res.json({ mensagem: 'Lista de eventos do calendário (exemplo)' });
};

exports.create = (req, res) => {
    const evento = req.body;
    // Aqui você gravaria em DB; por enquanto apenas devolve o recebido
    res.status(201).json({ mensagem: 'Evento criado', evento });
};

exports.getById = (req, res) => {
    res.json({ mensagem: `Detalhes do evento ${req.params.id}` });
};

exports.update = (req, res) => {
    res.json({ mensagem: `Evento ${req.params.id} atualizado`, dados: req.body });
};

exports.remove = (req, res) => {
    res.json({ mensagem: `Evento ${req.params.id} removido` });
};
