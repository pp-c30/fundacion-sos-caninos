import { Router } from "express";

import { PerroController } from "../controllers/perros.controller";

let perroController = new PerroController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorPerro = Router();

//Defino las rutas de cada funcion 
enrutadorPerro.route('/perro').get(perroController.listarPerro);
enrutadorPerro.route('/perro').post(perroController.guardarPerro);
enrutadorPerro.route('/perro/:id').delete(perroController.eliminarPerro);
enrutadorPerro.route('/perro/:id').put(perroController.actualizarPerro);
enrutadorPerro.route('/perro/:id').get(perroController.obtenerPerro);

export default enrutadorPerro;

