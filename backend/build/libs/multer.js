"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const storage = multer_1.default.diskStorage({
    //destino de la img 
    destination: 'uploads',
    //configurar el nombre de la img y se mantiene la extencion 
    filename: (req, file, cb) => {
        cb(null, uuid_1.v4() + path_1.default.extname(file.originalname));
    }
});
//exportamos la libreria multer agregando el destino y el nombre de las imagenes 
exports.default = multer_1.default({ storage });
