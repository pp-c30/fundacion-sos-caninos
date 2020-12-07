import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { CaninoService } from "../../service/canino.service";

import { ICaninoDetalle } from "../../models/caninoDetalle";

import { FormBuilder, FormGroup } from "@angular/forms";

import { IHtmlInputCanine } from "../../models/inputElement";

import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-admin-detalle-canino',
  templateUrl: './admin-detalle-canino.component.html',
  styleUrls: ['./admin-detalle-canino.component.css']
})
export class AdminDetalleCaninoComponent implements OnInit {

  id_canino:number;

  imagenes_canino:ICaninoDetalle[] = [];

  formDetalleCanino:FormGroup;
  
  files:FileList;

  imagenes_leidas = [];

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private serviceCanino:CaninoService) 
  {
    this.formDetalleCanino = this.fb.group({

      archivo:['']
    });
  }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe ( //Cuando la ruta activa reciba el parametro quiero guardar en id_evento el parametro recibido para localizar mediante el id cada detalle de evento
      params => {
          this.id_canino = params.id_canino
      }
    );
    this.listarImagenesCanino(this.id_canino);
  }
  
  
  listarImagenesCanino(id_canino:number) //utilizo este metodo para listar las imagenes
  {
    //como queremos obtener las imagenes que estan almacenadas en la bd
    //debemos realizar una consulta a la rest api para acceder a ellas
    
    this.serviceCanino.getImagenesCanino(id_canino).subscribe (
      resultado => {
        this.imagenes_canino = resultado;
      },
      error => console.log(error)
    )
  } 
  mostrarImagenesSeleccionadas(canino:IHtmlInputCanine)
  {
  this.files = canino.target.files;
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
  agregarImagenesCanino()
  {
    this.serviceCanino.addImagenesCanino(this.id_canino,this.files).subscribe (
      resultado => {
        
        this.imagenes_leidas = [];
        this.formDetalleCanino.reset(this.id_canino);
        this.listarImagenesCanino(this.id_canino);
      },
      error => console.log(error)
    )    
  } 
  eliminarImagenCanino (id_ic:number,public_id:string)
  {
  if(confirm('Esta seguro de llevar a cabo esta accion?')){

    this.serviceCanino.deleteImagenesCanino(id_ic,public_id).subscribe(
      resultado => {
        console.log(resultado);
        this.listarImagenesCanino(this.id_canino);
      }
    )
   }
  }

  establecerPortada(id_ic:number)
  {
    this.serviceCanino.establecerPortada(id_ic).subscribe(
      resultado => {
        //Refrescamos la grilla
        this.listarImagenesCanino(this.id_canino);
      }
    )
  }


}
    
