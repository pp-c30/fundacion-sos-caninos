"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const perros_controller_1 = require("../controllers/perros.controller");
let perroController = new perros_controller_1.PerroController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorPerro = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorPerro.route('/perro').get(perroController.listarPerro);
enrutadorPerro.route('/perro').post(perroController.guardarPerro);
enrutadorPerro.route('/perro/:id').delete(perroController.eliminarPerro);
enrutadorPerro.route('/perro/:id').put(perroController.actualizarPerro);
enrutadorPerro.route('/perro/:id').get(perroController.obtenerPerro);
exports.default = enrutadorPerro;
