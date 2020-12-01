import { con } from "../database";
import {  Request, Response } from "express";
import { IEvento } from "../models/Evento";
import cloudinary from "cloudinary";
import  fs from "fs-extra";


//conectarse a cloudinary
cloudinary.v2.config({
    cloud_name:'dylbe29a5',
    api_key:'488978864977245',
    api_secret:'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
})

export class EventoController {

    async actualizarEvento(req:Request,res:Response)
    {
       if(req.files)
       {
           let unEvento = req.body;         

           const updateEvento = {
               nombre_evento:req.body.nombre_evento,
               titulo:req.body.titulo,
               descripcion:req.body.descripcion,
               contacto:req.body.contacto,
               ubicacion:req.body.ubicacion,
               fecha_hora:req.body.fecha_hora
           }
           const base = await con();
           await base.query('update evento set ? where id_evento = ?',[updateEvento,req.body.id_evento])
           
           res.json("Se actualizo correctamente");
        }
      
    }


    public async listarEventos(req:Request,res:Response)
    {
        //Logro la conexion con la base 
        const base = await con();

        let evento = await base.query('select * from evento');
             
        return res.json(evento);
        
    }
    //guardar eventos
    public  async guardarEvento(req:Request,res:Response) 
    {
        try{
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
        
        const resultado = await base.query('insert into evento set ?',[unEvento]);

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
    } catch{
        res.json('Error al guardar un evento');
    }
    }
   
     

    public async obtenerEvento(req:Request,res:Response)
    {
        const base = await con();

        let id_evento = req.params.id_evento;

        let unEvento = await base.query('select * from evento where id_evento = ?',[id_evento]);

        return res.json(unEvento[0]);
    }

    public async listarImagenesEvento(req:Request,res:Response)
    {
        //listamos todas las imagenes pertenecientes a un evento. ESte metodo va a tener que recibir como parametro
        //la id de un evento

        let id_evento = req.params.id_evento; //la ruta recoje este parametro para posteriormente hacer jquery- obtener imagens

        const base = await con();
        //la lista que obtenemos a traves de query la guardamos en la variable lista_imagenes_evento
       
        let listar_imagenes_evento = await base.query('select * from imagenes_evento where id_evento = ?',[ id_evento]);
       
        //retornamos lo almacenado en la variable

        res.json (listar_imagenes_evento);
    }

    async agregarImagenesEvento(req:Request,res:Response)
    {
        const files:any = req.files;

        let id_evento = req.params.id_evento;

        const base = await con ();


        for (let index = 0; index < files.length; index++) {
           
            const resultado_cloud = await cloudinary.v2.uploader.upload(files[index].path);

            const imagen_evento = {

                id_evento:id_evento,
                imagen_url:resultado_cloud.url,
                public_id:resultado_cloud.public_id
            }

            await base.query('insert into imagenes_evento set ?', [imagen_evento]);

            await fs.unlink(files[index].path); //con esto logro ubicar la imagen para poder eliminarla
        }
        
        res.json("Se agregaron las imagenes de manera exitosa");
        
    }

    async eliminarImagenEvento(req:Request,res:Response) 
    {
        //debo recibir el id de la imagen ya que
        //necesito eliminar desde el id de la imagen, no del evento
        let id_ie = req.params.id_ie; //cuando consuma la ruta voy a eliminar desde el id
        let public_id = req.params.public_id; //necesitamos el public id para eliminarlo desde cloudinary evitando ocupar espacio innecesario.
        
        const base = await con();
        await base.query ('delete from imagenes_evento where id_ie = ?', [id_ie]);
        await cloudinary.v2.uploader.destroy(public_id);

        res.json("se elimino exitosamente");
    }

   async eliminarEvento(req:Request,res:Response)
    {
        const base = await con();

        let id_evento =req.params.id_evento
        let lista_imagenes_evento = await base.query('select * from imagenes_evento where id_evento =?', [id_evento]); //Selecciono todas las imagenes de un evento en particular
        await base.query('delete from evento where id_evento =?',[id_evento]);
       

        for (let index = 0; index < lista_imagenes_evento.length; index++) {
          
            await cloudinary.v2.uploader.destroy(lista_imagenes_evento[index].public_id); //A medida que recorre el for y cumple un ciclo obtiene el public_id y elimino la imagen desde cloud
            
        }
        
        await base.query('delete from imagenes_evento where id_evento =?', [id_evento]);
        
        return res.json('El evento se elimino completamente');
    }
}