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
exports.PerroController = void 0;
const database_1 = require("../database");
const cloudinary_1 = __importDefault(require("cloudinary"));
const fs_extra_1 = __importDefault(require("fs-extra"));
//conectarse en cloudinary
cloudinary_1.default.v2.config({
    cloud_name: 'dylbe29a5',
    api_key: '488978864977245',
    api_secret: 'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
});
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
            try {
                //Se accede a los archivos recibidos
                const files = req.files;
                //se accede a los datos recibidos
                const nombre = req.body.nombre;
                const fecha_nacimiento = req.body.fecha_nacimiento;
                const edad = req.body.edad;
                const sexo = req.body.sexo;
                const tamanio = req.body.tamanio;
                const castrado = req.body.castrado;
                const desparasitado = req.body.desparasitado;
                const vacunado = req.body.vacunado;
                const descripcion = req.body.descripcion;
                const estado_adopcion = req.body.estado_adopcion;
                const fecha_adopcion = req.body.fecha_adopcion;
                //conexion  a la base de datos
                const base = yield database_1.con();
                //envio de los datos a la base
                const unCanino = {
                    nombre: nombre,
                    fecha_nacimiento: fecha_nacimiento,
                    edad: edad,
                    sexo: sexo,
                    tamanio: tamanio,
                    castrado: castrado,
                    desparasitado: desparasitado,
                    vacunado: vacunado,
                    descripcion: descripcion,
                    estado_adopcion: estado_adopcion,
                    fecha_adopcion: fecha_adopcion
                };
                const resultado = yield base.query('insert into canino set ?', [unCanino]);
                //console.log(resultado);
                //recorre los archicos recibidos
                for (let i = 0; i < files.length; i++) {
                    //le especificamos el path(la ruta) de la imagen guardado en uploads
                    const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                    //obtiene la ubicacion exacta de la img
                    const imagen_canino = {
                        id_canino: resultado.insertId,
                        imagen_url: resultado_cloudinary.url,
                        public_id: resultado_cloudinary.public_id
                    };
                    yield base.query('insert into imagenes_canino set ?', [imagen_canino]);
                    yield fs_extra_1.default.unlink(files[i].path);
                }
                res.json('El perro fue guardado');
            }
            catch (_a) {
                res.json('Error al guardar un canino');
            }
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
