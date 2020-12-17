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
    establecerPortada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_ie = req.params.id_ie;
            let id_evento = req.params.id_evento;
            const base = yield database_1.con();
            //Primero ponemos todas las imagenes como portada = 0
            const portadasEnEstadocero = {
                portada: 0
            };
            yield base.query('update imagenes_evento set ?', [portadasEnEstadocero, id_evento]);
            //Establecer como portada una imagen
            const datosImagenesEvento = {
                portada: 1
            };
            yield base.query('update imagenes_evento set ? where id_ie = ?', [datosImagenesEvento, id_ie]);
            const unaFila = yield base.query('select * from imagenes_evento where id_ie = ?', [id_ie]);
            let datosEvento = {
                imagen_portada: unaFila[0].imagen_url
            };
            yield base.query('update evento set ? where id_evento = ?', [datosEvento, id_evento]);
            res.json('Se establecio la portada');
        });
    }
    actualizarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.files) {
                let unEvento = req.body;
                const updateEvento = {
                    titulo: req.body.titulo,
                    descripcion: req.body.descripcion,
                    contacto: req.body.contacto,
                    ubicacion: req.body.ubicacion,
                    fecha_hora: req.body.fecha_hora
                };
                const base = yield database_1.con();
                yield base.query('update evento set ? where id_evento = ?', [updateEvento, req.body.id_evento]);
                res.json("Actualización Exitosa");
            }
        });
    }
    listarEventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base 
            const base = yield database_1.con();
            let evento = yield base.query('select *, DATE_FORMAT(fecha_hora, "%d/%m/%Y") as fh_formateada from evento');
            return res.json(evento);
        });
    }
    //guardar eventos
    guardarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const files = req.files;
                console.log(req.body);
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
                const resultado = yield base.query('insert into evento set ?', [unEvento]);
                for (let i = 0; i < files.length; i++) {
                    //le especificamos el path(la ruta) de la imagen guardado en uploads
                    const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                    //obtiene la ubicacion exacta de la img
                    const imagenes_evento = {
                        id_evento: resultado.insertId,
                        imagen_url: resultado_cloudinary.url,
                        public_id: resultado_cloudinary.public_id
                    };
                    yield base.query('insert into imagenes_evento set ?', [imagenes_evento]);
                    yield fs_extra_1.default.unlink(files[i].path);
                }
                return res.json('El evento fue guardado');
            }
            catch (err) {
                res.json(err);
            }
        });
    }
    obtenerEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_evento = req.params.id_evento;
            let unEvento = yield base.query('select * from evento where id_evento = ?', [id_evento]);
            return res.json(unEvento[0]);
        });
    }
    listarImagenesEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //listamos todas las imagenes pertenecientes a un evento. ESte metodo va a tener que recibir como parametro
            //la id de un evento
            let id_evento = req.params.id_evento; //la ruta recoje este parametro para posteriormente hacer jquery- obtener imagens
            const base = yield database_1.con();
            //la lista que obtenemos a traves de query la guardamos en la variable lista_imagenes_evento
            let listar_imagenes_evento = yield base.query('select * from imagenes_evento where id_evento = ?', [id_evento]);
            //retornamos lo almacenado en la variable
            res.json(listar_imagenes_evento);
        });
    }
    agregarImagenesEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            let id_evento = req.params.id_evento;
            const base = yield database_1.con();
            for (let index = 0; index < files.length; index++) {
                const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(files[index].path);
                const imagen_evento = {
                    id_evento: id_evento,
                    imagen_url: resultado_cloud.url,
                    public_id: resultado_cloud.public_id
                };
                yield base.query('insert into imagenes_evento set ?', [imagen_evento]);
                yield fs_extra_1.default.unlink(files[index].path); //con esto logro ubicar la imagen para poder eliminarla
            }
            res.json("Se agregaron las imagenes de manera exitosa");
        });
    }
    eliminarImagenEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //debo recibir el id de la imagen ya que
            //necesito eliminar desde el id de la imagen, no del evento
            let id_ie = req.params.id_ie; //cuando consuma la ruta voy a eliminar desde el id
            let public_id = req.params.public_id; //necesitamos el public id para eliminarlo desde cloudinary evitando ocupar espacio innecesario.
            const base = yield database_1.con();
            yield base.query('delete from imagenes_evento where id_ie = ?', [id_ie]);
            yield cloudinary_1.default.v2.uploader.destroy(public_id);
            res.json("se elimino exitosamente");
        });
    }
    eliminarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_evento = req.params.id_evento;
            let lista_imagenes_evento = yield base.query('select * from imagenes_evento where id_evento =?', [id_evento]); //Selecciono todas las imagenes de un evento en particular
            yield base.query('delete from evento where id_evento =?', [id_evento]);
            for (let index = 0; index < lista_imagenes_evento.length; index++) {
                yield cloudinary_1.default.v2.uploader.destroy(lista_imagenes_evento[index].public_id); //A medida que recorre el for y cumple un ciclo obtiene el public_id y elimino la imagen desde cloud
            }
            yield base.query('delete from imagenes_evento where id_evento =?', [id_evento]);
            return res.json('El evento se elimino completamente');
        });
    }
}
exports.EventoController = EventoController;
