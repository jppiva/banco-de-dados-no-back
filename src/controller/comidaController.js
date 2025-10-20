import * as comidaModels from '../models/comidaModels.js';

export const listarTodos = async (req, res) => {
  try {
    const comidas = await comidaModels.findAll();
    res.json({
      total: comidas.length,
      mensagem: 'comida convocados com sucesso!',
      comidas
    });
  } catch (error) {
    res.status(500).json({ 
      erro: 'A Sala Precisa está temporariamente indisponível',
      detalhes: error.message 
    });
  }
};