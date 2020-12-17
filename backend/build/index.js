"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Creo la funcion
function principal() {
    //se crea la instancia de la clase
    const servidor = new server_1.server();
    servidor.listen(); //Ejecuto el metodo listen
}
//Invoco la funcion principal()
principal();
