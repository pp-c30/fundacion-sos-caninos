import express, {Application} from "express";

import enrutadorIndex from "./routes/index.routes";
import enrutadorPerro from "./routes/perros.routes";



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
        this.app.use(enrutadorPerro);
    }

    middleware()
    {
        this.app.use(express.json()); //Nuestra aplicacion usa para el envio de datos el formato json
    }

    //Le da arranque al servidor bajo un determinado puerto
    listen()
    {
        this.app.listen(this.app.get('port')); // Ejecutamos el servidor desde port
        console.log('Servidor corriendo en el puerto 4200');
    }

}