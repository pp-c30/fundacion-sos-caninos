import { con } from "../database";

import {  Request, Response} from "express";

import { IRequisito } from "../models/Requisito";
export class RequisitoController
{


    public async listarRequisito(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let requisito = await base.query('select * from requisito');
             
        return res.json(requisito);
        
    }
    //guardar requisitos
    public  async guardarRequisito(req:Request, res:Response) 
    {
        const base = await con();

       
        let requisito:IRequisito = req.body;
        
        await base.query("insert into requisito set ?",[requisito]);
        
        return res.json('El requisito fue guardado');

    }
    public async eliminarRequisito(req:Request,res:Response)
    {
        const base = await con();

        let id =req.params.id

        await base.query("delete from requisito where id_requisito =?",[id]);

        return res.json('El requisito se elimino correctamente');
    }

    public async actualizarRequisito(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;
        let nuevos_datos_requisito = req.body;

        await base.query("update requisito set ? where id_requisito = ?", [nuevos_datos_requisito,id]);

        return res.json('El requisito se actualizo correctamente');
    }

    public async obtenerRequisito(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;

        let unRequisito = await base.query("select * from requisito where id_requisito = ?",[id]);

        return res.json(unRequisito[0]);
    }
}