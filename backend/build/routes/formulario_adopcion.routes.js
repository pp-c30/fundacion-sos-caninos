"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verificarToken_1 = require("../libs/verificarToken");
const formulario_adopcion_controller_1 = require("../controllers/formulario_adopcion.controller");
let formularioAController = new formulario_adopcion_controller_1.FormularioAController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorFormularioA = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorFormularioA.route('/formulario_adopcion').get(verificarToken_1.validarToken, formularioAController.listarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion').post(formularioAController.guardarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion/:id').delete(formularioAController.eliminarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion/:id').put(formularioAController.actualizarFormularioA);
enrutadorFormularioA.route('/formulario_adopcion/:id').get(formularioAController.obtenerFormularioA);
exports.default = enrutadorFormularioA;
