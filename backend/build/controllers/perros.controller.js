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
exports.CaninoController = void 0;
const database_1 = require("../database");
const cloudinary_1 = __importDefault(require("cloudinary"));
const fs_extra_1 = __importDefault(require("fs-extra"));
//conectarse en cloudinary
cloudinary_1.default.v2.config({
    cloud_name: 'dylbe29a5',
    api_key: '488978864977245',
    api_secret: 'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
});
class CaninoController {
    establecerPortada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_ic = req.params.id_ic;
            let id_canino = req.params.id_canino;
            const base = yield database_1.con();
            //Primero ponemos todas las imagenes como portada = 0
            const portadasEnEstadocero = {
                portada: 0
            };
            yield base.query('update imagenes_canino set ? where id_canino = ?', [portadasEnEstadocero, id_canino]);
            //Establecer como portada una imagen
            const datosImagenesCanino = {
                portada: 1
            };
            yield base.query('update imagenes_canino set ? where id_ic = ?', [datosImagenesCanino, id_ic]);
            const unaFila = yield base.query('select * from imagenes_canino where id_ic = ?', [id_ic]);
            let datosCanino = {
                imagen_portada: unaFila[0].imagen_url
            };
            yield base.query('update canino set ? where id_canino = ?', [datosCanino, id_canino]);
            res.json('Se establecio la portada');
        });
    }
    actualizarCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.files) {
                let unCanino = req.body;
                const updateCanino = {
                    nombre: req.body.nombre,
                    fecha_nacimiento: req.body.fecha_nacimiento,
                    edad: Number(req.body.edad),
                    sexo: Number(req.body.sexo),
                    tamanio: Number(req.body.tamanio),
                    castrado: Number(req.body.castrado),
                    desparasitado: Number(req.body.desparasitado),
                    vacunado: Number(req.body.vacunado),
                    descripcion: req.body.descripcion,
                    estado_adopcion: Number(req.body.estado_adopcion),
                    fecha_adopcion: req.body.fecha_adopcion
                };
                const base = yield database_1.con();
                yield base.query('update canino set ? where id_canino = ?', [updateCanino, req.body.id_canino]);
                res.json("Se actualizo correctamente");
            }
        });
    }
    listarCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base 
            const base = yield database_1.con();
            let canino = yield base.query('select *, DATE_FORMAT(fecha_adopcion, "%d/%m/%Y") as fa_formateada, DATE_FORMAT(fecha_nacimiento, "%d/%m/%Y") as fn_formateada from canino');
            return res.json(canino);
        });
    }
    listarCaninoHome(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base 
            const base = yield database_1.con();
            let canino = yield base.query('select *, DATE_FORMAT(fecha_adopcion, "%d/%m/%Y") as fa_formateada, DATE_FORMAT(fecha_nacimiento, "%d/%m/%Y") as fn_formateada from canino order by id_canino DESC limit 6');
            return res.json(canino);
        });
    }
    //guardar eventos
    guardarCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const files = req.files;
                console.log(req.body);
                const nombre_canino = req.body.nombre;
                const fecha_nacimiento = req.body.fecha_nacimiento;
                const edad = Number(req.body.edad);
                const sexo = Number(req.body.sexo);
                const tamanio = Number(req.body.tamanio);
                const castrado = Number(req.body.castrado);
                const desparasitado = Number(req.body.desparasitado);
                const vacunado = Number(req.body.vacunado);
                const descripcion = req.body.descripcion;
                const estado_adopcion = Number(req.body.estado_adopcion);
                const fecha_adopcion = req.body.fecha_adopcion;
                const base = yield database_1.con();
                const unCanino = {
                    nombre: nombre_canino,
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
                for (let i = 0; i < files.length; i++) {
                    //le especificamos el path(la ruta) de la imagen guardado en uploads
                    const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                    //obtiene la ubicacion exacta de la img
                    const imagenes_canino = {
                        id_canino: resultado.insertId,
                        imagen_url: resultado_cloudinary.url,
                        public_id: resultado_cloudinary.public_id
                    };
                    yield base.query('insert into imagenes_canino set ?', [imagenes_canino]);
                    yield fs_extra_1.default.unlink(files[i].path);
                }
                return res.json('El canino fue guardado');
            }
            catch (err) {
                res.json(err);
            }
        });
    }
    obtenerCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_canino = req.params.id_canino;
            let unCanino = yield base.query('select *, DATE_FORMAT(fecha_adopcion, "%d/%m/%Y")as fa_formateada from canino where id_canino = ?', [id_canino]);
            return res.json(unCanino[0]);
        });
    }
    listarImagenesCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //listamos todas las imagenes pertenecientes a un evento. ESte metodo va a tener que recibir como parametro
            //la id de un evento
            let id_canino = req.params.id_canino; //la ruta recoje este parametro para posteriormente hacer jquery- obtener imagens
            const base = yield database_1.con();
            //la lista que obtenemos a traves de query la guardamos en la variable lista_imagenes_evento
            let listar_imagenes_canino = yield base.query('select * from imagenes_canino where id_canino = ?', [id_canino]);
            //retornamos lo almacenado en la variable
            res.json(listar_imagenes_canino);
        });
    }
    agregarImagenesCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            let id_canino = req.params.id_canino;
            const base = yield database_1.con();
            for (let index = 0; index < files.length; index++) {
                const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(files[index].path);
                const imagen_canino = {
                    id_canino: id_canino,
                    imagen_url: resultado_cloud.url,
                    public_id: resultado_cloud.public_id
                };
                yield base.query('insert into imagenes_canino set ?', [imagen_canino]);
                yield fs_extra_1.default.unlink(files[index].path); //con esto logro ubicar la imagen para poder eliminarla
            }
            res.json("Se agregaron las imagenes de manera exitosa");
        });
    }
    eliminarImagenCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //debo recibir el id de la imagen ya que
            //necesito eliminar desde el id de la imagen, no del evento
            let id_ic = req.params.id_ic; //cuando consuma la ruta voy a eliminar desde el id
            let public_id = req.params.public_id; //necesitamos el public id para eliminarlo desde cloudinary evitando ocupar espacio innecesario.
            const base = yield database_1.con();
            yield base.query('delete from imagenes_canino where id_ic = ?', [id_ic]);
            yield cloudinary_1.default.v2.uploader.destroy(public_id);
            res.json("se elimino exitosamente");
        });
    }
    eliminarCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_canino = req.params.id_canino;
            let listar_imagenes_canino = yield base.query('select * from imagenes_canino where id_canino =?', [id_canino]); //Selecciono todas las imagenes de un evento en particular
            yield base.query('delete from canino where id_canino =?', [id_canino]);
            for (let index = 0; index < listar_imagenes_canino.length; index++) {
                yield cloudinary_1.default.v2.uploader.destroy(listar_imagenes_canino[index].public_id); //A medida que recorre el for y cumple un ciclo obtiene el public_id y elimino la imagen desde cloud
            }
            yield base.query('delete from imagenes_canino where id_canino =?', [id_canino]);
            return res.json('El canino se elimino completamente');
        });
    }
    listarUnCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_canino = req.params.id_canino;
            const base = yield database_1.con();
            const unCanino = yield base.query('select * from canino where id_canino = ?', [id_canino]);
            res.json(unCanino[0]);
        });
    }
    obtenerImagenesUnCanino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_canino = req.params.id_canino;
            const base = yield database_1.con();
            const listar_imagenes_un_canino = yield base.query('select * from imagenes_canino where id_canino = ?', [id_canino]);
            res.json(listar_imagenes_un_canino);
        });
    }
}
exports.CaninoController = CaninoController;
