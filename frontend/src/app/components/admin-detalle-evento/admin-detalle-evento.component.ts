import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { EventoService } from "../../service/evento.service";

import { IEventoDetalle } from "../../models/eventoDetalle";

import { FormBuilder, FormGroup } from "@angular/forms";

import { IHtmlInputEvent } from "../../models/inputElement";

import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-admin-detalle-evento',
  templateUrl: './admin-detalle-evento.component.html',
  styleUrls: ['./admin-detalle-evento.component.css']
})

export class AdminDetalleEventoComponent implements OnInit {

  id_evento:number;

  imagenes_evento:IEventoDetalle[] = [];

  formDetalleEvento:FormGroup;
  
  files:FileList;

  imagenes_leidas = [];

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private serviceEvento:EventoService) 
  {
    this.formDetalleEvento = this.fb.group({

      archivo:['']
    });
  }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe ( //Cuando la ruta activa reciba el parametro quiero guardar en id_evento el parametro recibido para localizar mediante el id cada detalle de evento
      params => {
          this.id_evento = params.id_evento
      }
    );
    this.listarImagenesEventos(this.id_evento);
  }
  
  
  listarImagenesEventos(id_evento:number) //utilizo este metodo para listar las imagenes
  {
    //como queremos obtener las imagenes que estan almacenadas en la bd
    //debemos realizar una consulta a la rest api para acceder a ellas
    
    this.serviceEvento.getImagenesEvento(id_evento).subscribe (
      resultado => {
        this.imagenes_evento = resultado;
      },
      error => console.log(error)
    )
  } 
  mostrarImagenesSeleccionadas(evento:IHtmlInputEvent)
  {
  this.files = evento.target.files;
   if(this.files)
    {
      for (let index = 0; index < this.files.length; index++) {
          const reader = new FileReader();
          reader.readAsDataURL(this.files[index]);
          reader.onload = () => {
            this.imagenes_leidas.push(reader.result);
        }       
      }
    }
  }  
  agregarImagenesEvento()
  {
    this.serviceEvento.addImagenesEvento(this.id_evento,this.files).subscribe (
      resultado => {
        
        this.imagenes_leidas = [];
        this.formDetalleEvento.reset(this.id_evento);
        this.listarImagenesEventos(this.id_evento);
      },
      error => console.log(error)
    )    
  } 
  eliminarImagenEvento (id_ie:number,public_id:string)
  {
  if(confirm('Esta seguro de llevar a cabo esta accion?')){

    this.serviceEvento.deleteImagenesEvento(id_ie,public_id).subscribe(
      resultado => {
        console.log(resultado);
        this.listarImagenesEventos(this.id_evento);
      }
    )
   }
  }

  establecerPortada(id_ie:number)
  {
    this.serviceEvento.establecerPortada(id_ie,this.id_evento).subscribe(
      resultado => {
        //Refrescamos la grilla
        this.listarImagenesEventos(this.id_evento);
      }
    )
  }


}
    
    

