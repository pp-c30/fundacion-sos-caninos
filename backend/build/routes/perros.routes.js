"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const perros_controller_1 = require("../controllers/perros.controller");
let perroController = new perros_controller_1.PerroController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorPerro = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorPerro.route('/canino').get(perroController.listarPerro);
enrutadorPerro.route('/canino').post(perroController.guardarPerro);
enrutadorPerro.route('/canino/:id').delete(perroController.eliminarPerro);
enrutadorPerro.route('/canino/:id').put(perroController.actualizarPerro);
enrutadorPerro.route('/canino/:id').get(perroController.obtenerPerro);
exports.default = enrutadorPerro;
