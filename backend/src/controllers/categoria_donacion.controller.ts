import { con } from "../database";

import {  Request, Response} from "express";

import { ICat_donacion } from "../models/categoria_donacion";
export class CdonacionController
{
    static listarCdonacion(listarCdonacion: any) {
        throw new Error("Method not implemented.");
    }


    public async listarCdonacion(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let cat_donacion = await base.query('select * from categoria_donacion');
             
        return res.json(cat_donacion);
        
    }
    //guardar formulario
    public  async guardarCdonacion(req:Request, res:Response) 
    {
        const base = await con();

       
        let cat_donacion:ICat_donacion = req.body;
        
        await base.query("insert into categoria_donacion set ?",[cat_donacion]);
        
        return res.json('Guardado con exito');

    }
  
    public async eliminarCdonacion(req:Request,res:Response)
    {
        const base = await con();

        let id_categoria_donacion =req.params.id_categoria_donacion

        await base.query("delete from categoria_donacion where id_categoria_donacion =?",[id_categoria_donacion]);

        return res.json('Se elimino correctamente');
    }

    public async actualizarCdonacion(req:Request,res:Response)
    {
        const base = await con();

        let id_categoria_donacion = req.params.id_categoria_donacion;
        let nuevos_datos_Cdonacion = req.body;

        await base.query("update categoria_donacion set ? where id_categoria_donacion = ?", [nuevos_datos_Cdonacion,id_categoria_donacion]);

        return res.json('Se actualizo correctamente');
    }

    public async obtenerCdonacion(req:Request,res:Response)
    {
        const base = await con();

        let id_categoria_donacion = req.params.id_categoria_donacion;

        let unCdonacion = await base.query("select * from categoria_donacion where id_categoria_donacion = ?",[id_categoria_donacion]);

        return res.json(unCdonacion[0]);
    }
}