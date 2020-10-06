"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_routes_1 = __importDefault(require("./routes/index.routes"));
var localidades_routes_1 = __importDefault(require("./routes/localidades.routes"));
var perros_routes_1 = __importDefault(require("./routes/perros.routes"));
var formulario_adopcion_routes_1 = __importDefault(require("./routes/formulario_adopcion.routes"));
var evento_routes_1 = __importDefault(require("./routes/evento.routes"));
var provincia_routes_1 = __importDefault(require("./routes/provincia.routes"));
var requisito_routes_1 = __importDefault(require("./routes/requisito.routes"));
provincia_routes_1.default;
//Creo la clase server
var server = /** @class */ (function () {
    function server() {
        this.app = express_1.default(); //Todas las funcionalidades de express estan almacenadas en la variable app
        this.configuracion(); //Ejecuto la configuracion del puerto
        //Luego de middleware se ejecutan las rutas
        this.middleware();
        this.routes();
    }
    server.prototype.configuracion = function () {
        //Estoy llamando la funcionalidad de express port y guardando el puerto disponible a nivel de sistema o por defecto el puerto 3000
        this.app.set('port', process.env.port || 4200);
    };
    server.prototype.routes = function () {
        this.app.use(index_routes_1.default);
        this.app.use(localidades_routes_1.default);
        this.app.use(formulario_adopcion_routes_1.default);
        this.app.use(perros_routes_1.default);
        this.app.use(evento_routes_1.default);
        this.app.use(provincia_routes_1.default);
        this.app.use(requisito_routes_1.default);
    };
    server.prototype.middleware = function () {
        this.app.use(express_1.default.json()); //Nuestra aplicacion usa para el envio de datos el formato json
    };
    //Le da arranque al servidor bajo un determinado puerto
    server.prototype.listen = function () {
        this.app.listen(this.app.get('port')); // Ejecutamos el servidor desde port
        console.log('Servidor corriendo en el puerto 4200');
    };
    return server;
}());
exports.server = server;
