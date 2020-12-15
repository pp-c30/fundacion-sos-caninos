import { Router } from "express";

import {validarToken} from "../libs/verificarToken"

import { FormularioAController } from "../controllers/formulario_adopcion.controller";

let formularioAController = new FormularioAController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorFormularioA = Router();

//Defino las rutas de cada funcion 
enrutadorFormularioA.route('/formulario_adopcion').get(validarToken,formularioAController.listarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion').post(formularioAController.guardarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion/:id').delete(formularioAController.eliminarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion/:id').put(formularioAController.actualizarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion/:id').get(formularioAController.obtenerFormularioA);



export default enrutadorFormularioA;