import { con } from "../database";
import {  Request, Response} from "express";
import cloudinary from "cloudinary";
import  fs from "fs-extra";
import { ICanino } from "../models/Perro";
import { decodeBase64 } from "bcryptjs";


//conectarse en cloudinary

cloudinary.v2.config({
    cloud_name:'dylbe29a5',
    api_key:'488978864977245',
    api_secret:'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
})
export class CaninoController {

    async establecerPortada(req:Request,res:Response)
    {
        let id_ic = req.params.id_ic;
        let id_canino = req.params.id_canino;

        const base = await con();

        //Primero ponemos todas las imagenes como portada = 0
        const portadasEnEstadocero = {
            portada:0
        }
        await base.query('update imagenes_canino set ? where id_canino = ?',[portadasEnEstadocero,id_canino]);

        
        //Establecer como portada una imagen
        const datosImagenesCanino = {
            portada:1
        }
        await base.query('update imagenes_canino set ? where id_ic = ?',[datosImagenesCanino,id_ic]);
        
        const unaFila = await base.query('select * from imagenes_canino where id_ic = ?',[id_ic]);

        let datosCanino = {
            imagen_portada:unaFila[0].imagen_url
        }

        await base.query('update canino set ? where id_canino = ?',[datosCanino,id_canino]);
        res.json ('Se establecio la portada');
    }

    async actualizarCanino(req:Request,res:Response)
    {
       if(!req.files)
       {
           let unCanino = req.body;         

           const updateCanino = {
               nombre:req.body.nombre,
               fecha_nacimiento:req.body.fecha_nacimiento,
               edad:Number(req.body.edad),
               sexo:Number(req.body.sexo),
               tamanio:Number(req.body.tamanio),
               castrado:Number(req.body.castrado),
               desparasitado:Number(req.body.desparasitado),
               vacunado:Number(req.body.vacunado),
               descripcion:req.body.descripcion,
               estado_adopcion:Number(req.body.estado_adopcion),
               fecha_adopcion:req.body.fecha_adopcion
           }
           const base = await con();
           await base.query('update canino set ? where id_canino = ?',[updateCanino,req.body.id_canino])
           
           res.json("Se actualizo correctamente");
        }
    }


    public async listarCanino(req:Request,res:Response)
    {
        //Logro la conexion con la base 
        const base = await con();

        let canino = await base.query('select *, DATE_FORMAT(fecha_adopcion, "%d/%m/%Y") as fa_formateada, DATE_FORMAT(fecha_nacimiento, "%d/%m/%Y") as fn_formateada from canino');
             
        return res.json(canino);
        
    }
    //guardar eventos
    public  async guardarCanino(req:Request,res:Response) 
    {
        try{
        const files:any = req.files;
        console.log(req.body);

        const nombre_canino = req.body.nombre;
        const fecha_nacimiento = req.body.fecha_nacimiento;
        const edad= Number(req.body.edad);
        const sexo = Number(req.body.sexo);
        const tamanio = Number(req.body.tamanio);
        const castrado = Number(req.body.castrado);
        const desparasitado = Number(req.body.desparasitado);
        const vacunado = Number(req.body.vacunado);
        const descripcion = req.body.descripcion;
        const estado_adopcion = Number(req.body.estado_adopcion);
        const fecha_adopcion = req.body.fecha_adopcion;
    
        const base = await con();

        const unCanino = {
               nombre:nombre_canino,
               fecha_nacimiento:fecha_nacimiento,
               edad:edad,
               sexo:sexo,
               tamanio:tamanio,
               castrado:castrado,
               desparasitado:desparasitado,
               vacunado:vacunado,
               descripcion:descripcion,
               estado_adopcion:estado_adopcion,
               fecha_adopcion:fecha_adopcion
         }
        
        const resultado = await base.query('insert into canino set ?',[unCanino]);

        for (let i = 0; i < files.length; i++) {

            //le especificamos el path(la ruta) de la imagen guardado en uploads
            const resultado_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);

            //obtiene la ubicacion exacta de la img
            const imagenes_canino = {
                id_canino:resultado.insertId,
                imagen_url:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id
            }
        
            await base.query('insert into imagenes_canino set ?',[imagenes_canino]);
            await fs.unlink(files[i].path);


        }
        
        return res.json('El canino fue guardado');
    } catch(err){
        res.json(err);
    }
    }
   
     

    public async obtenerCanino(req:Request,res:Response)
    {
        const base = await con();

        let id_canino = req.params.id_canino;

        let unCanino = await base.query('select * from canino where id_canino = ?',[id_canino]);

        return res.json(unCanino[0]);
    }

    public async listarImagenesCanino(req:Request,res:Response)
    {
        //listamos todas las imagenes pertenecientes a un evento. ESte metodo va a tener que recibir como parametro
        //la id de un evento

        let id_canino = req.params.id_canino; //la ruta recoje este parametro para posteriormente hacer jquery- obtener imagens

        const base = await con();
        //la lista que obtenemos a traves de query la guardamos en la variable lista_imagenes_evento
       
        let listar_imagenes_canino = await base.query('select * from imagenes_canino where id_canino = ?',[ id_canino]);
       
        //retornamos lo almacenado en la variable

        res.json (listar_imagenes_canino);
    }

    async agregarImagenesCanino(req:Request,res:Response)
    {
        const files:any = req.files;

        let id_canino = req.params.id_canino;

        const base = await con ();


        for (let index = 0; index < files.length; index++) {
           
            const resultado_cloud = await cloudinary.v2.uploader.upload(files[index].path);

            const imagen_canino = {

                id_canino:id_canino,
                imagen_url:resultado_cloud.url,
                public_id:resultado_cloud.public_id
            }

            await base.query('insert into imagenes_canino set ?', [imagen_canino]);

            await fs.unlink(files[index].path); //con esto logro ubicar la imagen para poder eliminarla
        }
        
        res.json("Se agregaron las imagenes de manera exitosa");
        
    }

    async eliminarImagenCanino(req:Request,res:Response) 
    {
        //debo recibir el id de la imagen ya que
        //necesito eliminar desde el id de la imagen, no del evento
        let id_ic = req.params.id_ic; //cuando consuma la ruta voy a eliminar desde el id
        let public_id = req.params.public_id; //necesitamos el public id para eliminarlo desde cloudinary evitando ocupar espacio innecesario.
        
        const base = await con();
        await base.query ('delete from imagenes_canino where id_ic = ?', [id_ic]);
        await cloudinary.v2.uploader.destroy(public_id);

        res.json("se elimino exitosamente");
    }

   async eliminarCanino(req:Request,res:Response)
    {
        const base = await con();

        let id_canino =req.params.id_canino
        let listar_imagenes_canino = await base.query('select * from imagenes_canino where id_canino =?', [id_canino]); //Selecciono todas las imagenes de un evento en particular
        await base.query('delete from canino where id_canino =?',[id_canino]);
       

        for (let index = 0; index < listar_imagenes_canino.length; index++) {
          
            await cloudinary.v2.uploader.destroy(listar_imagenes_canino[index].public_id); //A medida que recorre el for y cumple un ciclo obtiene el public_id y elimino la imagen desde cloud
            
        }
        
        await base.query('delete from imagenes_canino where id_canino =?', [id_canino]);
        
        return res.json('El canino se elimino completamente');
    }

    async listarUnCanino(req:Request,res:Response)
    {
        let id_canino =req.params.id_canino;

        const base = await con();

        const unCanino = await base.query('select * from canino where id_canino = ?',[id_canino]);

        res.json(unCanino[0]);

    }

    async obtenerImagenesUnCanino(req:Request, res:Response) 
    {
            let id_canino = req.params.id_canino;

            const base = await con();

            const listar_imagenes_un_canino = await base.query('select * from imagenes_canino where id_canino = ?', [id_canino]);
            
            res.json(listar_imagenes_un_canino);
    }
       
    
}