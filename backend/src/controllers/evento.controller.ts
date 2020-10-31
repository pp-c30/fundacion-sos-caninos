import { con } from "../database";
import {  Request, Response} from "express";
import { IEvento } from "../models/Evento";
import cloudinary from "cloudinary";
import  fs from "fs-extra";


//conectarse a cloudinary
cloudinary.v2.config({
    cloud_name:'dylbe29a5',
    api_key:'488978864977245',
    api_secret:'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
})


export class EventoController
{


    public async listarEvento(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let evento = await base.query('select * from evento');
             
        return res.json(evento);
        
    }
    //guardar eventos
    public  async guardarEvento(req:Request, res:Response) 
    {
        const files:any = req.files;

        const titulo = req.body.titulo;
        const descripcion = req.body.descripcion;
        const contacto= req.body.contacto;
        const ubicacion = req.body.ubicacion;
        const fecha_hora = req.body.fecha_hora;
    
        const base = await con();

        const unEvento = {
            titulo:titulo,
            descripcion:descripcion,
            contacto:contacto,
            ubicacion:ubicacion,
            fecha_hora:fecha_hora,
         }
        
        const resultado = await base.query("insert into evento set ?",[unEvento]);

        for (let i = 0; i < files.length; i++) {

            //le especificamos el path(la ruta) de la imagen guardado en uploads
            const resultado_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);

            //obtiene la ubicacion exacta de la img
            const imagen_evento = {
                id_evento:resultado.insertId,
                imagen_url:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id
            }
        
            await base.query('insert into imagenes_evento set ?',[imagen_evento]);
            await fs.unlink(files[i].path);


        }
        
        return res.json('El evento fue guardado');

    }
    public async eliminarEvento(req:Request,res:Response)
    {
        const base = await con();

        let id =req.params.id

        await base.query("delete from evento where id_evento =?",[id]);

        return res.json('El evento se elimino correctamente');
    }

    public async actualizarEvento(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;
        let nuevos_datos_evento = req.body;

        await base.query("update evento set ? where id_evento = ?", [nuevos_datos_evento,id]);

        return res.json('El evento se actualizo correctamente');
    }

    public async obtenerEvento(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;

        let unEvento = await base.query("select * from evento where id_evento = ?",[id]);

        return res.json(unEvento[0]);
    }
}