"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class CdonacionController {
    listarCdonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let cat_donacion = yield base.query('select * from categoria_donacion');
            return res.json(cat_donacion);
        });
    }
    //guardar formulario
    guardarCdonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let cat_donacion = req.body;
            yield base.query("insert into categoria_donacion set ?", [cat_donacion]);
            return res.json('Guardado con exito');
        });
    }
    eliminarCdonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_categoria_donacion = req.params.id_categoria_donacion;
            yield base.query("delete from categoria_donacion where id_categoria_donacion =?", [id_categoria_donacion]);
            return res.json('Se elimino correctamente');
        });
    }
    actualizarCdonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_categoria_donacion = req.params.id_categoria_donacion;
            let nuevos_datos_Cdonacion = req.body;
            yield base.query("update categoria_donacion set ? where id_categoria_donacion = ?", [nuevos_datos_Cdonacion, id_categoria_donacion]);
            return res.json('Se actualizo correctamente');
        });
    }
    obtenerCdonacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_categoria_donacion = req.params.id_categoria_donacion;
            let unCdonacion = yield base.query("select * from categoria_donacion where id_categoria_donacion = ?", [id_categoria_donacion]);
            return res.json(unCdonacion[0]);
        });
    }
}
exports.CdonacionController = CdonacionController;
