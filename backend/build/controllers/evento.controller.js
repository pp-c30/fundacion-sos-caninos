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
exports.EventoController = void 0;
const database_1 = require("../database");
class EventoController {
    listarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let evento = yield base.query('select * from evento');
            return res.json(evento);
        });
    }
    //guardar eventos
    guardarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let evento = req.body;
            yield base.query("insert into evento set ?", [evento]);
            return res.json('El evento fue guardado');
        });
    }
    eliminarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            yield base.query("delete from evento where id_evento =?", [id]);
            return res.json('El evento se elimino correctamente');
        });
    }
    actualizarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let nuevos_datos_evento = req.body;
            yield base.query("update evento set ? where id_evento = ?", [nuevos_datos_evento, id]);
            return res.json('El evento se actualizo correctamente');
        });
    }
    obtenerEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let unEvento = yield base.query("select * from evento where id_evento = ?", [id]);
            return res.json(unEvento[0]);
        });
    }
}
exports.EventoController = EventoController;
