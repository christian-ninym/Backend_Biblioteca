import { Router } from 'express';

const router = Router();
import * as libroCtrl from '../controllers/libro.controller'

router.get('/listar', libroCtrl.getLibro);
router.get('/buscar/:id', libroCtrl.getLibroId);
router.post('/insertar', libroCtrl.crearLibro);
router.put('/modificar/:id', libroCtrl.updateLibro);
router.delete('/eliminar/:id', libroCtrl.deleteLibro);

export default router;