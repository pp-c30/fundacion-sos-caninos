"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var evento_controller_1 = require("../controllers/evento.controller");
var eventoController = new evento_controller_1.EventoController;
//Guardo dentro de enrutador la funcionalidad Router de express
var enrutadorEvento = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorEvento.route('/evento').get(eventoController.listarEvento);
enrutadorEvento.route('/evento').post(eventoController.guardarEvento);
enrutadorEvento.route('/evento/:id').delete(eventoController.eliminarEvento);
enrutadorEvento.route('/evento/:id').put(eventoController.actualizarEvento);
enrutadorEvento.route('/evento/:id').get(eventoController.obtenerEvento);
exports.default = enrutadorEvento;
