import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ICanino } from "../models/canino";
import { ICaninoDetalle } from "../models/caninoDetalle";

@Injectable({
  providedIn: 'root'
})
export class CaninoService {

  constructor( private http:HttpClient) {
    
  }

//metodo encargado de edtiar un registro y poner la portada en estado 0
 establecerPortada(id_ic:number,id_canino:number)
 {
   return this.http.get('http://localhost:4200/canino-portada/'+id_ic+'/'+id_canino);
 }
 
  updateCanino(datosCanino:ICanino)
  {
   
   let id_canino = datosCanino.id_canino;
  
  
   return this.http.put('http://localhost:4200/canino/'+id_canino,datosCanino);
 
  }


  saveCanino(datosCanino:ICanino,files:FileList)
  {

   const fd = new FormData(); //Genero la instancia fd (FORM DATA)

   
   fd.append('nombre',datosCanino.nombre);
   fd.append('fecha_nacimiento',datosCanino.fecha_nacimiento);
   fd.append('edad',datosCanino.edad);
   fd.append('sexo',String(datosCanino.sexo));
   fd.append('tamanio',String(datosCanino.tamanio));
   fd.append('castrado',String(datosCanino.castrado));
   fd.append('desparasitado',String(datosCanino.desparasitado));
   fd.append('vacunado',String(datosCanino.vacunado));
   fd.append('descripcion',datosCanino.descripcion);
   fd.append('estado_adopcion',String(datosCanino.estado_adopcion));
   fd.append('fecha_adopcion',datosCanino.fecha_adopcion);

   //Recorro la lista de imagenes con un FOR, a medida que se recorren se insertan
   for (let index = 0; index < files.length; index++) {
    
     fd.append('img_canino',files[index]) //A medida que recorre imagen por imagen vamos almacenando en img-evento 
                                         //las imagenes que en definitiva se almacena en fd   
   }


    return this.http.post('http://localhost:4200/canino',fd); //A traves del metodo POST y a traves de la ruta enviamos fd a la REST API 
   }                                                          //y como responde retornamos su respuesta

   getCanino()
   {
     return this.http.get<ICanino[]>('http://localhost:4200/canino');
   }
   getCaninoHome()
   {
     return this.http.get<ICanino[]>('http://localhost:4200/canino-home');
   }

   getOneCanino(id_canino:number)
   {
     return this.http.get<ICanino>('http://localhost:4200/canino/'+id_canino);
   }
   
   getImagenesCanino(id_canino:number)
   {
      return this.http.get<ICaninoDetalle[]>('http://localhost:4200/listar-imagenes-canino/'+id_canino); // A través del metodo get obtenemos las imagenes de un evento especifico gracias a su id
     
   }
   getImagenesOneCanino(id_canino:number)
   {
      return this.http.get<ICaninoDetalle>('http://localhost:4200/listar-imagenes-un-canino/'+id_canino); // A través del metodo get obtenemos las imagenes de un evento especifico gracias a su id
     
   }


   addImagenesCanino(id_canino:number,files:FileList) //Se comunica a traves de http y del metodo put a la ruta deseada
   {
     const fd = new FormData();

       for (let index = 0; index < files.length; index++) {
         fd.append('img_canino',files[index]);
         
       }   
     
     return this.http.put('http://localhost:4200/agregar-imagenes-canino/'+id_canino,fd);
   }

   deleteImagenesCanino(id_ic:number,public_id:string)
   {
     return this.http.delete('http://localhost:4200/eliminar-imagen-canino/'+id_ic+'/'+public_id);
   }
   
   deleteCanino(id_canino:number)
   {
     return this.http.delete('http://localhost:4200/eliminar-canino/'+id_canino);
   }
   
  }

