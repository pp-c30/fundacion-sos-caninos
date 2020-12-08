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
exports.FormularioAController = void 0;
const database_1 = require("../database");
class FormularioAController {
    listarFormularioA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let formularioA = yield base.query('select * from formulario_adopcion');
            return res.json(formularioA);
        });
    }
    //guardar formulario
    guardarFormularioA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let formularioA = req.body;
            yield base.query("insert into formulario_adopcion set ?", [formularioA]);
            return res.json('El formulario fue guardado');
        });
    }
    eliminarFormularioA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            yield base.query("delete from formulario_adopcion where id_formulario =?", [id]);
            return res.json('El formulario se elimino correctamente');
        });
    }
    actualizarFormularioA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let nuevos_datos_formularioA = req.body;
            yield base.query("update formulario_adopcion set ? where id_formulario = ?", [nuevos_datos_formularioA, id]);
            return res.json('El formulario se actualizo correctamente');
        });
    }
    obtenerFormularioA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id = req.params.id;
            let unFormularioA = yield base.query("select * from formulario_adopcion where id_formulario = ?", [id]);
            return res.json(unFormularioA[0]);
        });
    }
}
exports.FormularioAController = FormularioAController;
