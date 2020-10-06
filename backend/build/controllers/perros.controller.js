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
exports.PerroController = void 0;
const database_1 = require("../database");
class PerroController {
    listarPerro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let perro = yield base.query('select * from canino');
            return res.json(perro);
        });
    }
    //guardar perros
    guardarPerro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let perro = req.body;
            yield base.query("insert into canino set ?", [perro]);
            return res.json('El perro fue guardado');
        });
    }
    eliminarPerro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            yield base.query("delete from canino where id_canino =?", [id]);
            return res.json('El perro se elimino correctamente');
        });
    }
    actualizarPerro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let nuevos_datos_perro = req.body;
            yield base.query("update canino set ? where id_canino = ?", [nuevos_datos_perro, id]);
            return res.json('El perro se actualizo correctamente');
        });
    }
    obtenerPerro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let unPerro = yield base.query("select * from canino where id_canino = ?", [id]);
            return res.json(unPerro[0]);
        });
    }
}
exports.PerroController = PerroController;
