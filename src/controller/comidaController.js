import * as comidaModels from './../models/comidaModels.js';

export const listarTodos = async (req, res) => {
  try {
    const comida = await comidaModels.findAll();
    res.json({
      total: comida.length,
      mensagem: 'comida convocados com sucesso!',
      comida
    });
  } catch (error) {
    res.status(500).json({ 
      erro: 'A Sala Precisa está temporariamente indisponível',
      detalhes: error.message 
    });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const comida = await comidaModels.findById(id);
    
    if (!comida) {
      return res.status(404).json({ 
        erro: 'comida não encontrado no Registro de Hogwarts',
        sugestao: 'Verifique se o ID está correto'
      });
    }
    
    res.json({
      mensagem: `comida ${comida.nome} encontrado!`,
      comida
    });
  } catch (error) {
    res.status(500).json({ 
      erro: 'Erro ao buscar comida',
      detalhes: error.message 
    });
  }
};

export const criar = async (req, res) => {
  try {
    const { nome, tipo, preco, descricao } = req.body;
    
    if (!nome || !tipo || !preco || !descricao) {
      return res.status(400).json({ 
        erro: 'campos obrigatórios faltando',
        camposObrigatorios: ['nome', 'tipo', 'preco', 'descricao']
      });
    }
    
    const novaComida = await comidaModels.criar(req.body);
    
    res.status(201).json({
      mensagem: ` ${nome} foi matriculado(a) em ${tipo} com sucesso!`,
      comida: novaComida
    });
  } catch (error) {
    res.status(500).json({ 
      erro: 'Erro ao matricular comida',
      detalhes: error.message 
    });
  }
};

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params;

    const comidaExiste = await comidaModels.findById(id);
    
    if (!comidaExiste) {
      return res.status(404).json({ 
        erro: 'comida não encontrado no Livro de Registros',
        sugestao: 'Não é possível reparar o que não existe'
      });
    }
    
  
    
    const comiddaAtalizada = await comidaModels.update(id, req.body);
    
    res.json({
      mensagem: `✨ Registro de ${comiddaAtalizada.nome} reparado!`,
      comida: comiddaAtalizada
    });
  } catch (error) {
    res.status(500).json({ 
      erro: 'Erro ao atualizar comida',
      detalhes: error.message 
    });
  }
};

export const deletar = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Verifica se comida existe
    const comidaExiste = await comidaModels.findById(id);
    
    if (!comidaExiste) {
      return res.status(404).json({ 
        erro: 'comida não encontrado no Registro',
        sugestao: 'Não se pode expulsar quem não está matriculado'
      });
    }
    
    await comidaModels.deletar(id);
    
    res.json({
      mensagem: `⚠️ ${comidaExiste.nome} foi removido do Registro`,
      aviso: 'Esta ação é irreversível!',
      comidaRemovida: comidaExiste
    });
  } catch (error) {
    res.status(500).json({ 
      erro: 'Erro ao remover comida',
      detalhes: error.message 
    });
  }
};