import { con } from "../database";

import {  Request, Response} from "express";

import { IFormularioA } from "../models/FormularioA";
export class FormularioAController
{


    public async listarFormularioA(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let formularioA = await base.query('select *, (select nombre from canino where id_canino = f.canino) as canino, (select nombre from provincia where id = f.provincia_id) as provincia_id, (select nombre from localidades where id_localidad = f.id_localidad) as id_localidad from formulario_adopcion f');
             
        return res.json(formularioA);
        
    }
    //guardar formulario
    public  async guardarFormularioA(req:Request, res:Response) 
    {
        const base = await con();

       
        let formularioA:IFormularioA = req.body;
        
        await base.query("insert into formulario_adopcion set ?",[formularioA]);
        
        return res.json('El formulario fue guardado');

    }
    public async eliminarFormularioA(req:Request,res:Response)
    {
        const base = await con();

        let id =req.params.id

        await base.query("delete from formulario_adopcion where id_formulario =?",[id]);

        return res.json('El formulario se elimino correctamente');
    }

    public async actualizarFormularioA(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;
        let nuevos_datos_formularioA = req.body;

        await base.query("update formulario_adopcion set ? where id_formulario = ?", [nuevos_datos_formularioA,id]);

        return res.json('El formulario se actualizo correctamente');
    }

    public async obtenerFormularioA(req:Request,res:Response)
    {
        const base = await con();

        let id = req.params.id;

        let unFormularioA = await base.query("select * from formulario_adopcion where id_formulario = ?",[id]);

        return res.json(unFormularioA[0]);
    }
}