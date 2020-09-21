import { Router } from "express";

import { FormularioAController } from "../controllers/formulario_adopcion.controller";

let perroController = new FormularioAController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorPerro = Router();

//Defino las rutas de cada funcion 
