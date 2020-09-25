"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evento_controller_1 = require("../controllers/evento.controller");
let eventoController = new evento_controller_1.EventoController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorEvento = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorEvento.route('/evento').get(eventoController.listarEvento);
enrutadorEvento.route('/evento').post(eventoController.guardarEvento);
enrutadorEvento.route('/evento/:id').delete(eventoController.eliminarEvento);
enrutadorEvento.route('/evento/:id').put(eventoController.actualizarEvento);
enrutadorEvento.route('/evento/:id').get(eventoController.obtenerEvento);
exports.default = enrutadorEvento;
