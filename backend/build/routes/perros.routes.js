"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../libs/multer"));
const perros_controller_1 = require("../controllers/perros.controller");
const caninoController = new perros_controller_1.CaninoController();
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorCanino = express_1.Router();
//Defino las rutas de canino
enrutadorCanino.route('/canino').get(caninoController.listarCanino);
enrutadorCanino.route('/canino').post(multer_1.default.array('img_canino'), caninoController.guardarCanino);
enrutadorCanino.route('/eliminar-canino/:id_canino').delete(caninoController.eliminarCanino);
enrutadorCanino.route('/canino/:id_canino').put(caninoController.actualizarCanino);
enrutadorCanino.route('/canino/:id_canino').get(caninoController.obtenerCanino);
//Defino las rutas de detalle canino
enrutadorCanino.route('/listar-imagenes-canino/:id_canino').get(caninoController.listarImagenesCanino);
enrutadorCanino.route('/agregar-imagenes-canino/:id_canino').put(multer_1.default.array('img_canino'), caninoController.agregarImagenesCanino);
enrutadorCanino.route('/eliminar-imagen-canino/:id_ic/:public_id').delete(caninoController.eliminarImagenCanino);
enrutadorCanino.route('/canino-portada/:id_ic/:id_canino').get(caninoController.establecerPortada);
enrutadorCanino.route('/canino/:id_canino').get(caninoController.listarUnCanino);
enrutadorCanino.route('/listar-imagenes-un-canino/:id_canino').get(caninoController.listarImagenesUnCanino);
exports.default = enrutadorCanino;
