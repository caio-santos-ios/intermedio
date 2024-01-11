// app.js
import axios from 'axios';
import express from 'express';
import cors from 'cors';

const app = express()

app.use(cors())
const port = 3000;

const api = axios.create({
  baseURL: "https://controle-veiculo-c89a5c476b29.herokuapp.com"
})

// Middleware para tratar JSON
app.use(express.json());

// Rota de exemplo
app.post('/owners', async (req, res) => {
  try {
    const owner = await api.post("/owners", req.body) 
    res.json(req.body);
  } catch (error) {
    console.log(error)
  }
})

app.get('/owners', async (req, res) => {
  try {
    const owners = await api.get("/owners") 
    res.json(owners.data);
  } catch (error) {
    console.log(error)
  }
})

app.get('/owners/:id', async (req, res) => {
  try {
    const owners = await api.get(`/owners/${req.params.id}`) 
    res.json(owners.data);
  } catch (error) {
    console.log(error)
  }
})

app.patch('/owners/:id', async (req, res) => {
  try {
    const owners = await api.patch(`/owners/${req.params.id}`, req.body) 
    res.json(owners.data);
  } catch (error) {
    console.log(error)
  }
})

app.delete('/owners/:id', async (req, res) => {
  try {
    const owners = await api.delete(`/owners/${req.params.id}`) 
    res.json(owners.data);
  } catch (error) {
    console.log(error)
  }
})


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
