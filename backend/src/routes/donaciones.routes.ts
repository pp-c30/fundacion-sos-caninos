import { Router } from "express";
import { DonacionesController } from "../controllers/donaciones.controller";
import multer from "../libs/multer";

let donacionesController = new DonacionesController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorDonaciones = Router();

//Defino las rutas de cada funcion 
enrutadorDonaciones.route('/donaciones').get(donacionesController.listarDonaciones);
enrutadorDonaciones.route('/donaciones').post(multer.array('img_donaciones'),donacionesController.guardarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').delete(donacionesController.eliminarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').put(donacionesController.actualizarDonaciones);
enrutadorDonaciones.route('/donaciones/:id_donaciones').get(donacionesController.obtenerDonaciones);

export default enrutadorDonaciones;