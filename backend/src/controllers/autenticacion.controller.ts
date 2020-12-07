import { Response, Request } from "express";
import { con } from "../database";

export class AutenticacionController{
   
    async registrar(res:Response,req:Request){

        const unUsuario = {
            username:req.body.username,
            password:req.body.password,
            email:req.body.password
        }

        const base = await con();

        await base.query("insert into usuario set ?",[unUsuario]);
        
        return res.json('Usuario guardado con exito');

    }

    async ingresar(res:Response,req:Request){


    }
}