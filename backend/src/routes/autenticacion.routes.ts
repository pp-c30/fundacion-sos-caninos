import { Router } from "express";
import { AutenticacionController } from "../controllers/autenticacion.controller";


const autenticacionController = new AutenticacionController();

const enrutadorAut = Router();

enrutadorAut.route('/registro').post(autenticacionController.registrar);
enrutadorAut.route('/ingresar').post(autenticacionController.ingresar);

export default enrutadorAut;