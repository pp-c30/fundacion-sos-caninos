import { Router } from "express";

import { RequisitoController } from "../controllers/requisito.controller";

let requisitoController = new RequisitoController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorRequisito = Router();

//Defino las rutas de cada funcion 
enrutadorRequisito.route('/requisito').get(requisitoController.listarRequisito);
enrutadorRequisito.route('/requisito').post(requisitoController.guardarRequisito);
enrutadorRequisito.route('/requisito/:id').delete(requisitoController.eliminarRequisito);
enrutadorRequisito.route('/requisito/:id').put(requisitoController.actualizarRequisito);
enrutadorRequisito.route('/requisito/:id').get(requisitoController.obtenerRequisito);

export default enrutadorRequisito;

