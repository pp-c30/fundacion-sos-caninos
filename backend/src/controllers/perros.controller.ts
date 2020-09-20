import { con } from "../database";

import {  Request, Response} from "express";

import { IPerro } from "../models/Perro";
export class PerroController
{


    public async listarPerro(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let perro = await base.query('select * from perro');
             
        return res.json(perro);
        
    }
    //guardar perros
    public  async guardarPerro(req:Request, res:Response) 
    {
        const base = await con();

       
        let perro:IPerro = req.body;
        
        await base.query("insert into perro set ?",[perro]);
        
        return res.json('El perro fue guardado');

    }
    public async eliminarPerro(req:Request,res:Response)
    {
        const base = await con();

        let id =req.params.id

        await base.query("delete from perro where id_perro =?",[id]);

        return res.json('El perro se elimino correctamente');
    }

    public async actualizarPerro(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;
        let nuevos_datos_perro = req.body;

        await base.query("update perro set ? where id_perro = ?", [nuevos_datos_perro,id]);

        return res.json('El perro se actualizo correctamente');
    }

    public async obtenerPerro(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;

        let unPerro = await base.query("select * from perro where id_perro = ?",[id]);

        return res.json(unPerro[0]);
    }
}