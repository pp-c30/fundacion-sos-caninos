import { Router } from "express";

import { EventoController } from "../controllers/evento.controller";

let eventoController = new EventoController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorEvento = Router();

//Defino las rutas de cada funcion 
enrutadorEvento.route('/evento').get(eventoController.listarEvento);
enrutadorEvento.route('/evento').post(eventoController.guardarEvento);
enrutadorEvento.route('/evento/:id').delete(eventoController.eliminarEvento);
enrutadorEvento.route('/evento/:id').put(eventoController.actualizarEvento);
enrutadorEvento.route('/evento/:id').get(eventoController.obtenerEvento);

export default enrutadorEvento;
