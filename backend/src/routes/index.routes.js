"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controller_1 = require("../controllers/index.controller");
var enrutadorIndex = express_1.Router();
enrutadorIndex.route('/').get(index_controller_1.mensaje_bienvenida);
exports.default = enrutadorIndex;
