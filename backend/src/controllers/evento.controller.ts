import { con } from "../database";

import {  Request, Response} from "express";

import { IEvento } from "../models/Evento";
export class EventoController
{


    public async listarEvento(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let evento = await base.query('select * from evento');
             
        return res.json(evento);
        
    }
    //guardar eventos
    public  async guardarEvento(req:Request, res:Response) 
    {
        const base = await con();

       
        let evento:IEvento = req.body;
        
        await base.query("insert into evento set ?",[evento]);
        
        return res.json('El evento fue guardado');

    }
    public async eliminarEvento(req:Request,res:Response)
    {
        const base = await con();

        let id =req.params.id

        await base.query("delete from evento where id_evento =?",[id]);

        return res.json('El evento se elimino correctamente');
    }

    public async actualizarEvento(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;
        let nuevos_datos_evento = req.body;

        await base.query("update evento set ? where id_evento = ?", [nuevos_datos_evento,id]);

        return res.json('El evento se actualizo correctamente');
    }

    public async obtenerEvento(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;

        let unEvento = await base.query("select * from evento where id_evento = ?",[id]);

        return res.json(unEvento[0]);
    }
}