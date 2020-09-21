import { con } from "../database";

import {  Request, Response} from "express";

import { ICanino } from "../models/Perro";
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
    public  async guardarPerro(req:Request, res:Response) 
    {
        const base = await con();

       
        let perro:ICanino = req.body;
        
        await base.query("insert into canino set ?",[perro]);
        
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