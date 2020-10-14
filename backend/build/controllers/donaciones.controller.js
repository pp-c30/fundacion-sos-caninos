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
class DonacionesController {
    static listarDonaciones(listarDonaciones) {
        throw new Error("Method not implemented.");
    }
    listarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let donaciones = yield base.query('select * from donaciones');
            return res.json(donaciones);
        });
    }
    //guardar formulario
    guardarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let donaciones = req.body;
            yield base.query("insert into donaciones set ?", [donaciones]);
            return res.json('Guardado con exito');
        });
    }
    eliminarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.con();
            let id_donaciones = req.params.id_donaciones;
            yield db.query('delete from donaciones where id_donaciones = ?', [id_donaciones]);
            return res.json('Se eliminada con exito');
        });
    }
    actualizarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_donaciones = req.params.id_donaciones;
            let nuevos_datos_donaciones = req.body;
            yield base.query("update donaciones set ? where id_donaciones = ?", [nuevos_datos_donaciones, id_donaciones]);
            return res.json('Se actualizo correctamente');
        });
    }
    obtenerDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_donaciones = req.params.id_donaciones;
            let unDonaciones = yield base.query("select * from donaciones where id_donaciones = ?", [id_donaciones]);
            return res.json(unDonaciones[0]);
        });
    }
}
exports.DonacionesController = DonacionesController;
