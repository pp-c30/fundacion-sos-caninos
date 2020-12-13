import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import {IEvento  } from "../models/evento";

import { IEventoDetalle } from "../models/eventoDetalle";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor( private http:HttpClient) {
    
   }

//metodo encargado de edtiar un registro y poner la portada en estado 0
  establecerPortada(id_ie:number,id_evento:number)
  {
    return this.http.get('http://localhost:4200/evento-portada/'+id_ie+'/'+id_evento);
  }
  
   updateEvento(datosEvento:IEvento)
   {
    
    let id_evento = datosEvento.id_evento;
   
   
    return this.http.put('http://localhost:4200/evento/'+id_evento,datosEvento);
  
   }


   saveEvento(datosEvento:IEvento,files:FileList)
   {

    const fd = new FormData(); //Genero la instancia fd (FORM DATA)

    fd.append('titulo',datosEvento.titulo); //Con la dicha instancia puedo ordenar los datos. Dentro de fd se almacena nombre evento, descripcion, etc
    fd.append('descripcion',datosEvento.descripcion);
    fd.append('contacto',datosEvento.contacto);
    fd.append('ubicacion',datosEvento.ubicacion);
    fd.append('fecha_hora',datosEvento.fecha_hora);

    //Recorro la lista de imagenes con un FOR, a medida que se recorren se insertan
    for (let index = 0; index < files.length; index++) {
     
      fd.append('img_evento',files[index]) //A medida que recorre imagen por imagen vamos almacenando en img-evento 
                                          //las imagenes que en definitiva se almacena en fd   
    }


     return this.http.post('http://localhost:4200/evento',fd); //A traves del metodo POST y a traves de la ruta enviamos fd a la REST API 
    }                                                          //y como responde retornamos su respuesta

    getEvento()
    { 
      return this.http.get<IEvento[]>('http://localhost:4200/evento');
    }
    
    getImagenesEvento(id_evento:number)
    {
       return this.http.get<IEventoDetalle[]>('http://localhost:4200/listar-imagenes-evento/'+id_evento); // A través del metodo get obtenemos las imagenes de un evento especifico gracias a su id
      
    }

    addImagenesEvento(id_evento:number,files:FileList) //Se comunica a traves de http y del metodo put a la ruta deseada
    {
      const fd = new FormData();

        for (let index = 0; index < files.length; index++) {
          fd.append('img_evento',files[index]);
          
        }   
      
      return this.http.put('http://localhost:4200/agregar-imagenes-evento/'+id_evento,fd);
    }

    deleteImagenesEvento(id_ie:number,public_id:string)
    {
      return this.http.delete('http://localhost:4200/eliminar-imagen-evento/'+id_ie+'/'+public_id);
    }
    
    deleteEvento(id_evento:number)
    {
      return this.http.delete('http://localhost:4200/eliminar-evento/'+id_evento);
    }
   }

