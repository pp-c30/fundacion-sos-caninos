"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enrutadorAut = express_1.Router();
enrutadorAut.route("/registrar").post();
enrutadorAut.route("/ingresar").post();
exports.default = enrutadorAut;
