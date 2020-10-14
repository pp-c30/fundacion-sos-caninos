"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var localidades_controller_1 = require("../controllers/localidades.controller");
var localidadesController = new localidades_controller_1.LocalidadesController;
//Guardo dentro de enrutador la funcionalidad Router de express
var enrutadorLocalidades = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorLocalidades.route('/localidades').get(localidadesController.listarLocalidades);
enrutadorLocalidades.route('/localidades').post(localidadesController.guardarLocalidades);
enrutadorLocalidades.route('/localidades/:id').delete(localidadesController.eliminarLocalidades);
enrutadorLocalidades.route('/localidades/:id').put(localidadesController.actualizarLocalidades);
enrutadorLocalidades.route('/localidades/:id').get(localidadesController.obtenerLocalidades);
exports.default = enrutadorLocalidades;
