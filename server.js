import express from 'express';
import bruxoRoutes from './src/routes/comidaRoutes.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '🏰 API de Hogwarts - MVC Edition (ES Modules)',
    endpoints: {
      listar: 'GET /bruxos',
      buscar: 'GET /bruxos/:id',
      criar: 'POST /bruxos',
      atualizar: 'PUT /bruxos/:id',
      deletar: 'DELETE /bruxos/:id'
    }
  });
});

app.use('/bruxos', bruxoRoutes);

app.listen(PORT, () => {
  console.log(`🪄 API em http://localhost:${PORT}`);
});