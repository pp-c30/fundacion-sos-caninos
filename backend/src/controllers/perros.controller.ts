import { con } from "../database";
import {  Request, Response} from "express";
import cloudinary from "cloudinary";
import  fs from "fs-extra";


//conectarse en cloudinary

cloudinary.v2.config({
    cloud_name:'dylbe29a5',
    api_key:'488978864977245',
    api_secret:'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
})


export class PerroController
{


    public async listarPerro(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let perro = await base.query('select * from canino');
             
        return res.json(perro);
        
    }
    //guardar perros
   public  async guardarPerro(req:Request,res:Response) 
    {
        //Se accede a los archivos recibidos
        const files:any = req.files;
       
        //se accede a los datos recibidos
        const nombre = req.body.nombre;
        const fecha_nacimiento= req.body.fecha_nacimiento;
        const edad = req.body.edad;
        const sexo = req.body.sexo;
        const tamanio = req.body.tamanio;
        const castrado = req.body.castrado;
        const desparasitado = req.body.desparasitado;
        const vacunado = req.body.vacunado;
        const descripcion = req.body.descripcion;
        const estado_adopcion =req.body.estado_adopcion;
        const fecha_adopcion =req.body.fecha_adopcion;
      
        //conexion  a la base de datos
        const base = await con();

        //envio de los datos a la base
        const unCanino = {
            nombre:nombre,
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

       const resultado =  await base.query('insert into canino set ?',[unCanino]);

       //console.log(resultado);

        //recorre los archicos recibidos
        for (let i = 0; i < files.length; i++) {

            //le especificamos el path(la ruta) de la imagen guardado en uploads
            const resultado_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);

            //obtiene la ubicacion exacta de la img
            const imagen_canino = {
                id_canino:resultado.insertId,
                imagen_url:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id
            }
        
            await base.query('insert into imagenes_canino set ?',[imagen_canino]);
            await fs.unlink(files[i].path);


        }
        
        return res.json('El perro fue guardado');

    
    }

    public async eliminarPerro(req:Request,res:Response)
    {
        const base = await con();

        let id =req.params.id

        await base.query("delete from canino where id_canino =?",[id]);

        return res.json('El perro se elimino correctamente');
    }

    public async actualizarPerro(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;
        let nuevos_datos_perro = req.body;

        await base.query("update canino set ? where id_canino = ?", [nuevos_datos_perro,id]);

        return res.json('El perro se actualizo correctamente');
    }

    public async obtenerPerro(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;

        let unPerro = await base.query("select * from canino where id_canino = ?",[id]);

        return res.json(unPerro[0]);
    }
    
 
}