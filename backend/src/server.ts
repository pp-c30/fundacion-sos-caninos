import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import enrutadorIndex from "./routes/index.routes";
import enrutadorLocalidades from "./routes/localidades.routes";
import enrutadorPerro from "./routes/perros.routes";
import enrutadorFormularioA from "./routes/formulario_adopcion.routes";
import enrutadorEvento from "./routes/evento.routes";
import enrutadorProvincia from "./routes/provincia.routes";
import enrutadorRequisito from "./routes/requisito.routes";
import enrutadorCategoria from "./routes/cat_donacion.routes";
import enrutadorDonaciones from "./routes/donaciones.routes";


//Creo la clase server
export class server {
    
//Le asignamos a la varieble como tipo Application para que tenga la capacidad de guardar las funcionalidades de express
    app:Application; 

    constructor()
    {
        this.app = express(); //Todas las funcionalidades de express estan almacenadas en la variable app
        this.configuracion(); //Ejecuto la configuracion del puerto
        //Luego de middleware se ejecutan las rutas
        this.middleware();
        this.routes();
        
    }

    configuracion()
    {
        //Estoy llamando la funcionalidad de express port y guardando el puerto disponible a nivel de sistema o por defecto el puerto 3000
        this.app.set('port', process.env.port || 4200);
    }

    routes()
    {
        this.app.use(enrutadorIndex);
        this.app.use(enrutadorLocalidades);
        this.app.use(enrutadorFormularioA);
        this.app.use(enrutadorPerro);
        this.app.use(enrutadorEvento);
        this.app.use(enrutadorProvincia);
        this.app.use(enrutadorRequisito);
        this.app.use(enrutadorCategoria);
        this.app.use(enrutadorDonaciones);
        //configura el server para que pueda leer la carpeta y leer las img
        this.app.use('/uploads',express.static(path.resolve('uploads')));
    }

    middleware()
    {
        //muestreo de las peticiones
        this.app.use(morgan('dev'));
        this.app.use(express.json()); //Nuestra aplicacion usa para el envio de datos el formato json
        this.app.use(cors());
    }

    //Le da arranque al servidor bajo un determinado puerto
    listen()
    {
        this.app.listen(this.app.get('port')); // Ejecutamos el servidor desde port
        console.log('Servidor corriendo en el puerto 4200');
    }

}