import { con } from "../database";

import {  Request, Response} from "express";

import { ILocalidades } from "../models/Localidades";
export class LocalidadesController
{

    public async listLocalidades(req:Request, res:Response)
    {
        //Realizo la conexion con la base de datos
        const base = await con();

        const provincia_id = req.params.provincia_id;

        let lista = await base.query('select * from localidades where provincia_id =?',[provincia_id]);
             
        return res.json(lista);
        
    }
    
    public async listarLocalidades(req:Request, res:Response)
    {
        //Realizo la conexion con la base de datos
        const base = await con();

        let localidades = await base.query('select *, (select nombre from provincia where id = l.provincia_id) as provincia_id from localidades l');
             
        return res.json(localidades);
        
    }
    //guardar localidad
    public  async guardarLocalidades(req:Request, res:Response) 
    {
        const base = await con();

        let localidades:ILocalidades = req.body;
        
        await base.query("insert into localidades set ?",[localidades]);
        
        return res.json('La localidad fue guardada');

    }

    //eliminar localidad
    public async eliminarLocalidades(req:Request,res:Response)
    {
        const base = await con();

        let id =req.params.id

        await base.query("delete from localidades where id_localidad =?",[id]);

        return res.json('La localidad se elimino correctamente');
    }

    public async actualizarLocalidades(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;
        let nuevos_datos_localidades = req.body;

        await base.query("update localidades set ? where id_localidad = ?", [nuevos_datos_localidades,id]);

        return res.json('La localidad se actualizo correctamente');
    } 
   
    public async obtenerLocalidades(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;

        let unLocalidades = await base.query("select * from localidades where id_localidad = ?",[id]);

        return res.json(unLocalidades[0]); 
    }
}