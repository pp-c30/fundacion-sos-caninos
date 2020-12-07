import { Router } from "express";

const enrutadorAut= Router();

enrutadorAut.route("/registrar").post();
enrutadorAut.route("/ingresar").post();

export default enrutadorAut;