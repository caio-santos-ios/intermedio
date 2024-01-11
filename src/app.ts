// app.js
import express from 'express';

const app = express()

const port = 3000;

// Middleware para tratar JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à minha API!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
