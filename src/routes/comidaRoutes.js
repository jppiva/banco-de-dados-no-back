import { Router } from 'express';
import * as comidaController from './../controller/comidaController.js';

const router = Router();

router.get('/', comidaController.listarTodos);
router.get('/:id', comidaController.buscarPorId);
router.post('/', comidaController.criar);
router.put('/:id', comidaController.atualizar);
router.delete('/:id', comidaController.deletar)

export default router;