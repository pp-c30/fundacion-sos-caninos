import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { CaninoService } from "../../service/canino.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { ICanino } from 'src/app/models/canino';
import { IHtmlInputCanine } from "../../models/inputElement";

import { Router } from "@angular/router";

@Component({
  selector: 'app-detalle-canino-public',
  templateUrl: './detalle-canino-public.component.html',
  styleUrls: ['./detalle-canino-public.component.css']
})
export class DetalleCaninoPublicComponent implements OnInit {


 id_canino:number;

 lista_caninos:ICanino[]=[];



    constructor(private router:Router,private fb:FormBuilder,private activatedRoute:ActivatedRoute,private serviceCanino:CaninoService) { 

  
  }

  ngOnInit(): void {

    
  
    this.obtenerCaninos(this.id_canino);
  }


  obtenerCaninos(id_canino:number)
  {
    this.serviceCanino.getCanino().subscribe (
      resultado => {
        this.lista_caninos = resultado;
      }
    )
  }
}
