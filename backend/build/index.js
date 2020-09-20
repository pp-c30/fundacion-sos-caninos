"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
//Creo la funcion
function principal() {
    //se crea la instancia de la clase
    const servidor = new server_1.server();
    servidor.listen(); //Ejecuto el metodo listen
}
//Invoco la funcion principal()
principal();
