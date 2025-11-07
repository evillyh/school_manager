const fs = require('fs');
const path = require('path');

const usuariosPath = path.join(__dirname, '..', 'mock', 'usuarios.json');

function readUsers() {
    try {
        const raw = fs.readFileSync(usuariosPath, 'utf8');
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function writeUsers(users) {
    fs.writeFileSync(usuariosPath, JSON.stringify(users, null, 2), 'utf8');
}

exports.login = (req, res) => {
    const { email, senha } = req.body;
    const users = readUsers();
    const user = users.find(u => u.email === email && u.senha === senha);
    if (!user) return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    // Em produção, retornar token JWT
    res.json({ mensagem: 'Login bem-sucedido', usuario: { id: user.id, email: user.email } });
};

exports.register = (req, res) => {
    const novo = req.body;
    const users = readUsers();
    novo.id = users.length ? users[users.length - 1].id + 1 : 1;
    users.push(novo);
    writeUsers(users);
    res.status(201).json({ mensagem: 'Usuário registrado', usuario: novo });
};

