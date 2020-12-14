import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CaninoService } from "../../service/canino.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { ICanino } from 'src/app/models/canino';
import {  ICaninoDetalle } from 'src/app/models/caninoDetalle';
import { Router } from "@angular/router";

@Component({
  selector: 'app-detalle-canino-public',
  templateUrl: './detalle-canino-public.component.html',
  styleUrls: ['./detalle-canino-public.component.css']
})
export class DetalleCaninoPublicComponent implements OnInit {

  id_canino:number;

 unCanino:ICanino;

 imagenesUnCanino:ICaninoDetalle[] = [];

constructor(private router:Router,private fb:FormBuilder,private activatedRoute:ActivatedRoute,private serviceCanino:CaninoService) { 

  
  }

  ngOnInit(): void {    
  
    this.activatedRoute.params.subscribe(
      params => {
        this.id_canino = params.id_canino;
      }
    );

    this.obtenerDetalleCanino(this.id_canino);

    this.mostrarImagenesCanino(this.id_canino);
  }


  obtenerDetalleCanino(id_canino:number)
  {
    this.serviceCanino.getOneCanino(id_canino).subscribe (
      resultado => {
        this.unCanino = resultado;
      },
      error => console.log(error)
    )
  }

  mostrarImagenesCanino(id_canino:number)
  {
  this.serviceCanino.getImagenesOneCanino(id_canino).subscribe(
    resultado => {
      this.imagenesUnCanino = resultado;
    },
    error => console.log(error)
  )
  }
  
  
}
