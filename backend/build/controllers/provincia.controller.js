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
class ProvinciaController {
    listarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Realizo la conexion con la base de datos
            const base = yield database_1.con();
            let provincia = yield base.query('select * from provincia');
            return res.json(provincia);
        });
    }
    //guardar provincia
    guardarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let provincia = req.body;
            yield base.query("insert into provincia set ?", [provincia]);
            return res.json('La provincia fue guardada');
        });
    }
    //eliminar provincia
    eliminarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            yield base.query("delete from provincia where id_provincia =?", [id]);
            return res.json('La provincia se elimino correctamente');
        });
    }
    actualizarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let nuevos_datos_provincia = req.body;
            yield base.query("update provincia set ? where id_provincia = ?", [nuevos_datos_provincia, id]);
            return res.json('La provincia se actualizo correctamente');
        });
    }
    obtenerProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let unProvincia = yield base.query("select * from provincia where id_provincia = ?", [id]);
            return res.json(unProvincia[0]);
        });
    }
}
exports.ProvinciaController = ProvinciaController;
