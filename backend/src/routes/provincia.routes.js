"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var provincia_controller_1 = require("../controllers/provincia.controller");
var provinciaController = new provincia_controller_1.ProvinciaController;
//Guardo dentro de enrutador la funcionalidad Router de express
var enrutadorProvincia = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorProvincia.route('/provincia').get(provinciaController.listarProvincia);
enrutadorProvincia.route('/provincia').post(provinciaController.guardarProvincia);
enrutadorProvincia.route('/provincia/:id').delete(provinciaController.eliminarProvincia);
enrutadorProvincia.route('/provincia/:id').put(provinciaController.actualizarProvincia);
enrutadorProvincia.route('/provincia/:id').get(provinciaController.obtenerProvincia);
exports.default = enrutadorProvincia;
