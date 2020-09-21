import { Router } from "express";

import { FormularioAController } from "../controllers/formulario_adopcion.controller";

let formularioAController = new FormularioAController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorFormularioA = Router();

//Defino las rutas de cada funcion 
