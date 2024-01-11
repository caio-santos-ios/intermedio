// app.js
import axios from 'axios';
import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors())
const port = 3000;

const api = axios.create({
  baseURL: ""
})

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
