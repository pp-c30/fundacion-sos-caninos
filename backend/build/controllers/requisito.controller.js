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
class RequisitoController {
    listarRequisito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let requisito = yield base.query('select * from requisito');
            return res.json(requisito);
        });
    }
    //guardar requisitos
    guardarRequisito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let requisito = req.body;
            yield base.query("insert into requisito set ?", [requisito]);
            return res.json('El requisito fue guardado');
        });
    }
    eliminarRequisito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            yield base.query("delete from requisito where id_requisito =?", [id]);
            return res.json('El requisito se elimino correctamente');
        });
    }
    actualizarRequisito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let nuevos_datos_requisito = req.body;
            yield base.query("update requisito set ? where id_requisito = ?", [nuevos_datos_requisito, id]);
            return res.json('El requisito se actualizo correctamente');
        });
    }
    obtenerRequisito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let unRequisito = yield base.query("select * from requisito where id_requisito = ?", [id]);
            return res.json(unRequisito[0]);
        });
    }
}
exports.RequisitoController = RequisitoController;
