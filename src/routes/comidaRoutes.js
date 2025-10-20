import { Router } from 'express';
import * as comidaController from '../controller/comidaController.js';

const router = Router();

router.get('/', comidaController.listarTodos);

export default router;