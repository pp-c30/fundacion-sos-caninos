import { Router } from "express";
import multer from "../libs/multer";

import { CaninoController } from "../controllers/perros.controller";

const caninoController = new CaninoController();
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorCanino = Router();
//Defino las rutas de canino
enrutadorCanino.route('/canino').get(caninoController.listarCanino);

enrutadorCanino.route('/canino-home').get(caninoController.listarCaninoHome);

enrutadorCanino.route('/canino').post(multer.array('img_canino'),caninoController.guardarCanino);

enrutadorCanino.route('/eliminar-canino/:id_canino').delete(caninoController.eliminarCanino);

enrutadorCanino.route('/canino/:id_canino').put(caninoController.actualizarCanino);

enrutadorCanino.route('/canino/:id_canino').get(caninoController.obtenerCanino);


//Defino las rutas de detalle canino
enrutadorCanino.route('/listar-imagenes-canino/:id_canino').get(caninoController.listarImagenesCanino);

enrutadorCanino.route('/agregar-imagenes-canino/:id_canino').put(multer.array('img_canino'),caninoController.agregarImagenesCanino);

enrutadorCanino.route('/eliminar-imagen-canino/:id_ic/:public_id').delete(caninoController.eliminarImagenCanino);

enrutadorCanino.route('/canino-portada/:id_ic/:id_canino').get(caninoController.establecerPortada);

enrutadorCanino.route('/canino/:id_canino').get(caninoController.listarUnCanino);
enrutadorCanino.route('/listar-imagenes-un-canino/:id_canino').get(caninoController.obtenerImagenesUnCanino);

export default enrutadorCanino;

