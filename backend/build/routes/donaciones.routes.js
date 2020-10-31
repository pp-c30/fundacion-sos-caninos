"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donaciones_controller_1 = require("../controllers/donaciones.controller");
const multer_1 = __importDefault(require("../libs/multer"));
let donacionesController = new donaciones_controller_1.DonacionesController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorDonaciones = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorDonaciones.route('/donaciones').get(donacionesController.listarDonaciones);
enrutadorDonaciones.route('/donaciones').post(multer_1.default.array('imagenes_donaciones'), donacionesController.guardarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').delete(donacionesController.eliminarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').put(donacionesController.actualizarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').get(donacionesController.obtenerDonaciones);
exports.default = enrutadorDonaciones;
