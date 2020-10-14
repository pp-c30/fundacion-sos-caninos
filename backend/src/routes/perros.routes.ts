import { Router } from "express";

import { PerroController } from "../controllers/perros.controller";

let perroController = new PerroController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorPerro = Router();

//Defino las rutas de cada funcion 
enrutadorPerro.route('/canino').get(perroController.listarPerro);
enrutadorPerro.route('/canino').post(perroController.guardarPerro);
enrutadorPerro.route('/canino/:id').delete(perroController.eliminarPerro);
enrutadorPerro.route('/canino/:id').put(perroController.actualizarPerro);
enrutadorPerro.route('/canino/:id').get(perroController.obtenerPerro);

export default enrutadorPerro;

