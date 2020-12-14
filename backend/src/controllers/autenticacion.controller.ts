import { Response, Request } from "express";
import { con } from "../database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class AutenticacionController{
   
     async registrar(req:Request, res:Response){
        
        //cifrar la contraseña ingresada
        const salt = await bcrypt.genSalt(10);
        const password_cifrado = await bcrypt.hash(req.body.password,salt);

        const unUsuario = {
            username:req.body.username,
            password:password_cifrado,
            email:req.body.email
        }

        const base =  await con();

        const resultado = await base.query('insert into usuario set ?',[unUsuario]);

        //crear un token para acceder a los permisos
        const token:string = jwt.sign({_id:resultado.insertId},process.env.TOKEN_SECRET || '3jdslf');
        
        return res.json(token);

    }

    async ingresar(req:Request, res:Response){

       
        const base =  await con();

        const usuario = await base.query('select * from usuario where username = ?',[req.body.username]);

        if(!usuario[0]){
            res.json(0);
        }
        else{
            const correctpassword = await bcrypt.compare(req.body.password, usuario[0].password);

            if(!correctpassword){
                res.json(1)
            }
            else{

                const token:string = jwt.sign({_id:usuario[0].id_usuario},process.env.TOKEN_SECRET || '3jdslf',{
                    expiresIn:60*60*24
                });

                res.json(token);
            }
        }
    }
}