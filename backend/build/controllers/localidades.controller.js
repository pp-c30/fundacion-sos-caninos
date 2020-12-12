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
exports.LocalidadesController = void 0;
const database_1 = require("../database");
class LocalidadesController {
    listLocalidades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Realizo la conexion con la base de datos
            const base = yield database_1.con();
            const provincia_id = req.params.provincia_id;
            let lista = yield base.query('select * from localidades where provincia_id =?', [provincia_id]);
            return res.json(lista);
        });
    }
    listarLocalidades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Realizo la conexion con la base de datos
            const base = yield database_1.con();
            let localidades = yield base.query('select * from localidades');
            return res.json(localidades);
        });
    }
    //guardar localidad
    guardarLocalidades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let localidades = req.body;
            yield base.query("insert into localidades set ?", [localidades]);
            return res.json('La localidad fue guardada');
        });
    }
    //eliminar localidad
    eliminarLocalidades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            yield base.query("delete from localidades where id_localidad =?", [id]);
            return res.json('La localidad se elimino correctamente');
        });
    }
    actualizarLocalidades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let nuevos_datos_localidades = req.body;
            yield base.query("update localidades set ? where id_localidad = ?", [nuevos_datos_localidades, id]);
            return res.json('La localidad se actualizo correctamente');
        });
    }
    obtenerLocalidades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let unLocalidades = yield base.query("select * from localidades where id_localidad = ?", [id]);
            return res.json(unLocalidades[0]);
        });
    }
}
exports.LocalidadesController = LocalidadesController;
