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


  selected:any;
  filtered:any;

 id_canino:number;

 lista_caninos:ICanino[]=[];

 caninos = [
  { value: "All", id: "123" },
  { value: "Unpaid and sent", id:"12" },

  { value: "Unpaid and sent",id:"23" },
  { value: "Unpaid and not sent" ,id:"45"},
  { value: "Unpaid with due date",id:"56" },
  { value: "Paid",id:"57" },
  { value: "Open",id:"78" },
  { value: "Overdue" ,id:"45"}];

status = ['Select Status', 'All', 'Unpaid and sent', 'Unpaid with due date', 'Paid', 'Open', 'Overdue'];



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

  caninoSeleccionado ()
  {
    console.log(this.selected)
    this.filtered = this.caninos.filter(t=>t.value ==this.selected)
  }
}
