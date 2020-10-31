"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evento_controller_1 = require("../controllers/evento.controller");
const multer_1 = __importDefault(require("../libs/multer"));
let eventoController = new evento_controller_1.EventoController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorEvento = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorEvento.route('/evento').get(eventoController.listarEvento);
enrutadorEvento.route('/evento').post(multer_1.default.array('imagenes_evento'), eventoController.guardarEvento);
enrutadorEvento.route('/evento/:id').delete(eventoController.eliminarEvento);
enrutadorEvento.route('/evento/:id').put(eventoController.actualizarEvento);
enrutadorEvento.route('/evento/:id').get(eventoController.obtenerEvento);
exports.default = enrutadorEvento;
