# 🎓 School Manager - Guia de Integração Frontend e Backend

## 📋 O que foi feito

O frontend e backend foram integrados com sucesso! Agora funcionam como uma aplicação única.

### Mudanças Realizadas:

1. **Backend (Express.js)**
   - ✅ Adicionado suporte a CORS
   - ✅ Configurado para servir arquivos estáticos da pasta `public`
   - ✅ Instalação do pacote `cors` adicionada ao `package.json`
   - ✅ Todas as rotas da API continuam disponíveis em `/api/*`

2. **Frontend (HTML/CSS/JavaScript)**
   - ✅ Movido para a pasta `back_end/public/`
   - ✅ Atualizado para fazer requisições à API do backend
   - ✅ Integrado com endpoints de autenticação

3. **Estrutura de Pastas**
   ```
   back_end/
   ├── public/
   │   └── index.html          (Frontend servido daqui)
   ├── scr/
   │   ├── app.js              (Servidor Express)
   │   ├── package.json        (Dependências)
   │   └── [controllers, routes, etc...]
   └── .env                    (Configurações)
   ```

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
cd back_end\scr
npm install
```

### 2. Iniciar o Servidor
```bash
# Modo produção
npm start

# Modo desenvolvimento (com auto-reload)
npm run dev
```

### 3. Acessar a Aplicação
Abra seu navegador e acesse:
```
http://localhost:3000
```

## 📡 Estrutura de Comunicação

### Frontend
- Acessível em: `http://localhost:3000`
- Faz requisições para a API em: `/api/*`

### Backend
- API disponível em: `http://localhost:3000/api/`
- Rotas disponíveis:
  - `/api/auth/` - Autenticação
  - `/api/aluno/` - Gerenciamento de alunos
  - `/api/boletin/` - Boletins
  - `/api/calendario/` - Calendário
  - `/api/curso/` - Cursos
  - `/api/frequencia/` - Frequência
  - `/api/horario/` - Horários
  - `/api/matricula/` - Matrículas
  - `/api/perfil/` - Perfis
  - `/api/servicos/` - Serviços

## 🔐 Autenticação

O frontend agora se comunica com o backend para:
- **Login**: `POST /api/auth/login`
- **Cadastro**: `POST /api/auth/register`

O token de autenticação é armazenado em `localStorage` do navegador.

## 📝 Notas Importantes

- A pasta `frontend/` original pode ser removida (os arquivos foram copiados para `public/`)
- O arquivo `.env` foi criado com as configurações básicas
- O `cors` está ativo para permitir requisições do frontend
- Todos os arquivos estáticos (imagens, CSS) devem estar na pasta `public/`

## ❓ Problemas Comuns

### "Não consigo acessar a aplicação"
- Verifique se a porta 3000 está disponível
- Verifique se o servidor está rodando
- Tente: `http://localhost:3000`

### "Erro de CORS"
- CORS já está configurado
- Verifique se a API está respondendo em `/api/*`

### "Imagens não carregam"
- Coloque as imagens na pasta `public/`
- Atualize os caminhos no HTML conforme necessário

---

**Integração Completa! ✅**
Frontend e Backend agora funcionam juntos de forma integrada!
