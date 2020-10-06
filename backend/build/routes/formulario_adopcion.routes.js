"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formulario_adopcion_controller_1 = require("../controllers/formulario_adopcion.controller");
let formularioAController = new formulario_adopcion_controller_1.FormularioAController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorFormularioA = express_1.Router();
//Defino las rutas de cada funcion 
