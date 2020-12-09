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
exports.DonacionesController = void 0;
const database_1 = require("../database");
const cloudinary_1 = __importDefault(require("cloudinary"));
const fs_extra_1 = __importDefault(require("fs-extra"));
//conectarse a cloudinary
cloudinary_1.default.v2.config({
    cloud_name: 'dylbe29a5',
    api_key: '488978864977245',
    api_secret: 'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
});
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
            try {
                const files = req.files;
                const descripcion = req.body.descripcion;
                const contacto = req.body.contacto;
                const direccion = req.body.direccion;
                const categoria_donaciones = req.body.categoria_donaciones;
                const base = yield database_1.con();
                const unaDonacion = {
                    descripcion: descripcion,
                    contacto: contacto,
                    direccion: direccion,
                    categoria_donaciones: categoria_donaciones,
                };
                const resultado = yield base.query("insert into donaciones set ?", [unaDonacion]);
                for (let i = 0; i < files.length; i++) {
                    //le especificamos el path(la ruta) de la imagen guardado en uploads
                    const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                    //obtiene la ubicacion exacta de la img
                    const img_donaciones = {
                        id_donaciones: resultado.insertId,
                        imagen_url: resultado_cloudinary.url,
                        public_id: resultado_cloudinary.public_id
                    };
                    yield base.query('insert into imagenes_donaciones set ?', [img_donaciones]);
                    yield fs_extra_1.default.unlink(files[i].path);
                }
                return res.json('La donacion fue guardada');
            }
            catch (_a) {
                res.json('Error al guardar una donacion');
            }
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
            try {
                const base = yield database_1.con();
                let id_donaciones = req.params.id_donaciones;
                let nuevos_datos_donaciones = req.body;
                yield base.query("update donaciones set ? where id_donaciones = ?", [nuevos_datos_donaciones, id_donaciones]);
                return res.json('Se actualizo correctamente');
            }
            catch (_a) {
                res.json('Error al actualizar');
            }
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
