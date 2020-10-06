import { Router } from "express";

import { CdonacionController } from "../controllers/categoria_donacion.controller";

let Cat_donacionController = new CdonacionController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorCategoria = Router();

//Defino las rutas de cada funcion 
enrutadorCategoria.route('/categoria_donacion').get(Cat_donacionController.listarCdonacion);
enrutadorCategoria.route('/categoria_donacion').post(Cat_donacionController.guardarCdonacion);
enrutadorCategoria.route('/categoria_donacion/:id_categoria_donacion').delete(Cat_donacionController.eliminarCdonacion);
enrutadorCategoria.route('/categoria_donacion/:id_categoria_donacion').put(Cat_donacionController.actualizarCdonacion);
enrutadorCategoria.route('/categoria_donacion/:id_categoria_donacion').get(Cat_donacionController.obtenerCdonacion);

export default enrutadorCategoria;
