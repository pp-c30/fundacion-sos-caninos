import { con } from "../database";

import {  Request, Response} from "express";
import { Idonaciones } from "../models/donaciones";
import cloudinary from "cloudinary";
import  fs from "fs-extra";


//conectarse a cloudinary

cloudinary.v2.config({
    cloud_name:'dylbe29a5',
    api_key:'488978864977245',
    api_secret:'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
})


export class DonacionesController
{
    static listarDonaciones(listarDonaciones: any) {
        throw new Error("Method not implemented.");
    }


    public async listarDonaciones(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let donaciones = await base.query('select * from donaciones');
             
        return res.json(donaciones);
        
    }

    //guardar formulario
    public  async guardarDonaciones(req:Request, res:Response) 
    {
           
        const files:any = req.files;

        const descripcion = req.body.descripcion;
        const contacto= req.body.contacto;
        const direccion = req.body.direccion;
        const categoria_donaciones = req.body.categoria_donaciones;
    
        const base = await con();

        const unaDonacion = {
            descripcion:descripcion,
            contacto:contacto,
            direccion:direccion,
            categoria_donaciones:categoria_donaciones,
         }
        
        const resultado = await base.query("insert into donaciones set ?",[unaDonacion]);

        for (let i = 0; i < files.length; i++) {

            //le especificamos el path(la ruta) de la imagen guardado en uploads
            const resultado_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);

            //obtiene la ubicacion exacta de la img
            const imagen_donacion = {
                id_donaciones:resultado.insertId,
                imagen_url:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id
            }
        
            await base.query('insert into imagenes_donaciones set ?',[imagen_donacion]);
            await fs.unlink(files[i].path);


        }
        
        return res.json('La donacion fue guardado');

    }
    
    public async  eliminarDonaciones(req:Request,res:Response)
    {
        const db = await con();

        let id_donaciones = req.params.id_donaciones;

        await db.query('delete from donaciones where id_donaciones = ?',[id_donaciones]);

        return res.json('Se eliminada con exito');
    }

    public async actualizarDonaciones(req:Request,res:Response)
    {
        const base = await con();

        let id_donaciones = req.params.id_donaciones;
        let nuevos_datos_donaciones = req.body;

        await base.query("update donaciones set ? where id_donaciones = ?", [nuevos_datos_donaciones,id_donaciones]);

        return res.json('Se actualizo correctamente');
    }

    public async obtenerDonaciones(req:Request,res:Response)
    {
        const base = await con();

        let id_donaciones = req.params.id_donaciones;

        let unDonaciones = await base.query("select * from donaciones where id_donaciones = ?",[id_donaciones]);

        return res.json(unDonaciones[0]);
    }
}