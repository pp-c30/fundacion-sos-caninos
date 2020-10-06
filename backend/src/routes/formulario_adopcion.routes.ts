import { Router } from "express";

import { FormularioAController } from "../controllers/formulario_adopcion.controller";

let formularioAController = new FormularioAController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorFormularioA = Router();

//Defino las rutas de cada funcion 
enrutadorFormularioA.route('/formularioA').get(formularioAController.listarFormularioA);
enrutadorFormularioA.route('/formularioA').post(formularioAController.guardarFormularioA);
enrutadorFormularioA.route('/formularioA/:id').delete(formularioAController.eliminarFormularioA);
enrutadorFormularioA.route('/formularioA/:id').put(formularioAController.actualizarFormularioA);
enrutadorFormularioA.route('/formularioA/:id').get(formularioAController.obtenerFormularioA);



export default enrutadorFormularioA;