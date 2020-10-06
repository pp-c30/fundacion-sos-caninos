"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var donaciones_controller_1 = require("../controllers/donaciones.controller");
var donacionesController = new donaciones_controller_1.DonacionesController;
//Guardo dentro de enrutador la funcionalidad Router de express
var enrutadorDonaciones = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorDonaciones.route('/donaciones').get(donacionesController.listarDonaciones);
enrutadorDonaciones.route('/donaciones').post(donacionesController.guardarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').delete(donacionesController.eliminarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').put(donacionesController.actualizarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').get(donacionesController.obtenerDonaciones);
exports.default = enrutadorDonaciones;
