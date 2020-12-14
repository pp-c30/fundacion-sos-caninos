import { Router } from "express";

import { EventoController } from "../controllers/evento.controller";
import multer from "../libs/multer";


let eventoController = new EventoController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorEvento = Router();

//Defino las rutas de evento
enrutadorEvento.route('/evento').get(eventoController.listarEventos);

enrutadorEvento.route('/evento').post(multer.array('img_evento'),eventoController.guardarEvento);

enrutadorEvento.route('/eliminar-evento/:id_evento').delete(eventoController.eliminarEvento);

enrutadorEvento.route('/evento/:id_evento').put(eventoController.actualizarEvento);

enrutadorEvento.route('/evento/:id_evento').get(eventoController.obtenerEvento);


//Defino las rutas de detalle evento
enrutadorEvento.route('/listar-imagenes-evento/:id_evento').get(eventoController.listarImagenesEvento);

enrutadorEvento.route('/agregar-imagenes-evento/:id_evento').put(multer.array('img_evento'),eventoController.agregarImagenesEvento);

enrutadorEvento.route('/eliminar-imagen-evento/:id_ie/:public_id').delete(eventoController.eliminarImagenEvento);

enrutadorEvento.route('/evento-portada/:id_ie/:id_evento').get(eventoController.establecerPortada);


export default enrutadorEvento;
