"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const localidades_routes_1 = __importDefault(require("./routes/localidades.routes"));
const perros_routes_1 = __importDefault(require("./routes/perros.routes"));
const formulario_adopcion_routes_1 = __importDefault(require("./routes/formulario_adopcion.routes"));
const evento_routes_1 = __importDefault(require("./routes/evento.routes"));
const provincia_routes_1 = __importDefault(require("./routes/provincia.routes"));
const requisito_routes_1 = __importDefault(require("./routes/requisito.routes"));
const cat_donacion_routes_1 = __importDefault(require("./routes/cat_donacion.routes"));
const donaciones_routes_1 = __importDefault(require("./routes/donaciones.routes"));
const autenticacion_routes_1 = __importDefault(require("./routes/autenticacion.routes"));
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
        this.app.use(localidades_routes_1.default);
        this.app.use(formulario_adopcion_routes_1.default);
        this.app.use(perros_routes_1.default);
        this.app.use(evento_routes_1.default);
        this.app.use(provincia_routes_1.default);
        this.app.use(requisito_routes_1.default);
        this.app.use(cat_donacion_routes_1.default);
        this.app.use(donaciones_routes_1.default);
        this.app.use(autenticacion_routes_1.default);
        //configura el server para que pueda leer la carpeta y leer las img
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
    }
    middleware() {
        //muestreo de las peticiones
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json()); //Nuestra aplicacion usa para el envio de datos el formato json
        this.app.use(cors_1.default());
    }
    //Le da arranque al servidor bajo un determinado puerto
    listen() {
        this.app.listen(this.app.get('port')); // Ejecutamos el servidor desde port
        console.log('Servidor corriendo en el puerto 4200');
    }
}
exports.server = server;
