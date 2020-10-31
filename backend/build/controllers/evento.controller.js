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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoController = void 0;
const database_1 = require("../database");
const cloudinary_1 = __importDefault(require("cloudinary"));
const fs_extra_1 = __importDefault(require("fs-extra"));
//conectarse a cloudinary
cloudinary_1.default.v2.config({
    cloud_name: 'dylbe29a5',
    api_key: '488978864977245',
    api_secret: 'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
});
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
            const files = req.files;
            const titulo = req.body.titulo;
            const descripcion = req.body.descripcion;
            const contacto = req.body.contacto;
            const ubicacion = req.body.ubicacion;
            const fecha_hora = req.body.fecha_hora;
            const base = yield database_1.con();
            const unEvento = {
                titulo: titulo,
                descripcion: descripcion,
                contacto: contacto,
                ubicacion: ubicacion,
                fecha_hora: fecha_hora,
            };
            const resultado = yield base.query("insert into evento set ?", [unEvento]);
            for (let i = 0; i < files.length; i++) {
                //le especificamos el path(la ruta) de la imagen guardado en uploads
                const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                //obtiene la ubicacion exacta de la img
                const imagen_evento = {
                    id_evento: resultado.insertId,
                    imagen_url: resultado_cloudinary.url,
                    public_id: resultado_cloudinary.public_id
                };
                yield base.query('insert into imagenes_evento set ?', [imagen_evento]);
                yield fs_extra_1.default.unlink(files[i].path);
            }
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
