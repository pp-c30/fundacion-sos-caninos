"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var formulario_adopcion_controller_1 = require("../controllers/formulario_adopcion.controller");
var formularioAController = new formulario_adopcion_controller_1.FormularioAController;
//Guardo dentro de enrutador la funcionalidad Router de express
var enrutadorFormularioA = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorFormularioA.route('/formulario_adopcion').get(formularioAController.listarFormularioA);
enrutadorFormularioA.route('/formularioA').post(formularioAController.guardarFormularioA);
enrutadorFormularioA.route('/formularioA/:id').delete(formularioAController.eliminarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion/:id').put(formularioAController.actualizarFormularioA);
enrutadorFormularioA.route('/formularioA/:id').get(formularioAController.obtenerFormularioA);
exports.default = enrutadorFormularioA;
