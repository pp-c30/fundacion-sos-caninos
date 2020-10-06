"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categoria_donacion_controller_1 = require("../controllers/categoria_donacion.controller");
var Cat_donacionController = new categoria_donacion_controller_1.CdonacionController;
//Guardo dentro de enrutador la funcionalidad Router de express
var enrutadorCategoria = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorCategoria.route('/categoria_donacion').get(Cat_donacionController.listarCdonacion);
enrutadorCategoria.route('/categoria_donacion').post(Cat_donacionController.guardarCdonacion);
enrutadorCategoria.route('/categoria_donacion/:id_categoria_donacion').delete(Cat_donacionController.eliminarCdonacion);
enrutadorCategoria.route('/categoria_donacion/:id_categoria_donacion').put(Cat_donacionController.actualizarCdonacion);
enrutadorCategoria.route('/categoria_donacion/:id_categoria_donacion').get(Cat_donacionController.obtenerCdonacion);
exports.default = enrutadorCategoria;
