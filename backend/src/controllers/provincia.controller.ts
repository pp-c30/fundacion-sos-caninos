import { con } from "../database";

import {  Request, Response} from "express";

import { IProvincia } from "../models/Provincia";
export class ProvinciaController
{


    public async listarProvincia(req:Request, res:Response)
    {
        //Realizo la conexion con la base de datos
        const base = await con();

        let provincia = await base.query('select * from provincia');
             
        return res.json(provincia);
        
    }
    //guardar provincia
    public  async guardarProvincia(req:Request, res:Response) 
    {
        const base = await con();

       
        let provincia:IProvincia = req.body;
        
        await base.query("insert into provincia set ?",[provincia]);
        
        return res.json('La provincia fue guardada');

    }

    //eliminar provincia
    public async eliminarProvincia(req:Request,res:Response)
    {
        const base = await con();

        let id =req.params.id

        await base.query("delete from provincia where id_provincia = ?",[id]);

        return res.json('La provincia se elimino correctamente');
    }

    public async actualizarProvincia(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;
        let nuevos_datos_provincia = req.body;

        await base.query("update provincia set ? where id_provincia = ?", [nuevos_datos_provincia,id]);

        return res.json('La provincia se actualizo correctamente');
    } 

    public async obtenerProvincia(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;

        let unProvincia = await base.query("select * from provincia where id_provincia = ?",[id]);

        return res.json(unProvincia[0]); 
    }
}