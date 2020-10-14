"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var requisito_controller_1 = require("../controllers/requisito.controller");
var requisitoController = new requisito_controller_1.RequisitoController;
//Guardo dentro de enrutador la funcionalidad Router de express
var enrutadorRequisito = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorRequisito.route('/requisito').get(requisitoController.listarRequisito);
enrutadorRequisito.route('/requisito').post(requisitoController.guardarRequisito);
enrutadorRequisito.route('/requisito/:id').delete(requisitoController.eliminarRequisito);
enrutadorRequisito.route('/requisito/:id').put(requisitoController.actualizarRequisito);
enrutadorRequisito.route('/requisito/:id').get(requisitoController.obtenerRequisito);
exports.default = enrutadorRequisito;
