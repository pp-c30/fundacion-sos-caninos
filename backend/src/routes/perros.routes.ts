import { Router } from "express";
import multer from "../libs/multer";

import { PerroController } from "../controllers/perros.controller";

const perroController = new PerroController();
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorPerro = Router();

//Defino las rutas de cada funcion 
enrutadorPerro.route('/canino').get(perroController.listarPerro);
enrutadorPerro.route('/canino').post(multer.array('imagenes_canino'),perroController.guardarPerro);
enrutadorPerro.route('/canino/:id').delete(perroController.eliminarPerro);
enrutadorPerro.route('/canino/:id').put(perroController.actualizarPerro);
enrutadorPerro.route('/canino/:id').get(perroController.obtenerPerro);

export default enrutadorPerro;

