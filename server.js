// server.js (na raiz)
const express = require('express');
const comidaRoutes = require('./src/routes/comidaRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '🏰 API de comida - MVC Edition',
    endpoints: {
      listar: 'GET /comida',
      buscar: 'GET /comida/:id',
      criar: 'POST /comida',
      atualizar: 'PUT /comida/:id',
      deletar: 'DELETE /comida/:id'
    }
  });
});

app.use('/comida', bruxoRoutes);

app.listen(PORT, () => {
  console.log(`🪄 API em http://localhost:${PORT}`);
});