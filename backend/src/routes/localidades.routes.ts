import { Router } from "express";

import { LocalidadesController } from "../controllers/localidades.controller";

let localidadesController = new LocalidadesController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorLocalidades = Router();


//Defino las rutas de cada funcion 
enrutadorLocalidades.route('/localidades').get(localidadesController.listarLocalidades);
enrutadorLocalidades.route('/localidades/:provincia_id').get(localidadesController.listLocalidades);
enrutadorLocalidades.route('/localidades').post(localidadesController.guardarLocalidades);
enrutadorLocalidades.route('/localidades/:id').delete(localidadesController.eliminarLocalidades);
enrutadorLocalidades.route('/localidades/:id').put(localidadesController.actualizarLocalidades);
enrutadorLocalidades.route('/localidades/:id').get(localidadesController.obtenerLocalidades);

export default enrutadorLocalidades;

