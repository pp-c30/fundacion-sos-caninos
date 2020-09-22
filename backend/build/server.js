"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const perros_routes_1 = __importDefault(require("./routes/perros.routes"));
const evento_routes_1 = __importDefault(require("./routes/evento.routes"));
const requisito_routes_1 = __importDefault(require("./routes/requisito.routes"));
//Creo la clase server
class server {
    constructor() {
        this.app = express_1.default(); //Todas las funcionalidades de express estan almacenadas en la variable app
        this.configuracion(); //Ejecuto la configuracion del puerto
        //Luego de middleware se ejecutan las rutas
        this.middleware();
        this.routes();
    }
    configuracion() {
        //Estoy llamando la funcionalidad de express port y guardando el puerto disponible a nivel de sistema o por defecto el puerto 3000
        this.app.set('port', process.env.port || 4200);
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use(perros_routes_1.default);
        this.app.use(evento_routes_1.default);
        this.app.use(requisito_routes_1.default);
    }
    middleware() {
        this.app.use(express_1.default.json()); //Nuestra aplicacion usa para el envio de datos el formato json
    }
    //Le da arranque al servidor bajo un determinado puerto
    listen() {
        this.app.listen(this.app.get('port')); // Ejecutamos el servidor desde port
        console.log('Servidor corriendo en el puerto 4200');
    }
}
exports.server = server;
