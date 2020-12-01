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
//Defino las rutas de evento
enrutadorEvento.route('/evento').get(eventoController.listarEventos);
enrutadorEvento.route('/evento').post(multer_1.default.array('img_evento'), eventoController.guardarEvento);
enrutadorEvento.route('/eliminar-evento/:id_evento').delete(eventoController.eliminarEvento);
enrutadorEvento.route('/evento/:id_evento').put(eventoController.actualizarEvento);
enrutadorEvento.route('/evento/:id_evento').get(eventoController.obtenerEvento);
//Defino las rutas de detalle evento
enrutadorEvento.route('/listar-imagenes-evento/:id_evento').get(eventoController.listarImagenesEvento);
enrutadorEvento.route('/agregar-imagenes-evento/:id_evento').put(multer_1.default.array('img_evento'), eventoController.agregarImagenesEvento);
enrutadorEvento.route('/eliminar-imagen-evento/:id_ie/:public_id').delete(eventoController.eliminarImagenEvento);
exports.default = enrutadorEvento;
