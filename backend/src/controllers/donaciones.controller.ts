import { con } from "../database";

import {  Request, Response} from "express";

import { Idonaciones } from "../models/donaciones";
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
        const base = await con();

       
        let donaciones :Idonaciones = req.body;
        
        await base.query("insert into donaciones set ?",[donaciones]);
        
        return res.json('Guardado con exito');

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