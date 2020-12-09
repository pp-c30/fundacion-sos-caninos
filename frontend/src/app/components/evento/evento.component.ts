import { Component, OnInit } from '@angular/core';

import { EventoService } from "../../service/evento.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IEvento } from 'src/app/models/evento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  listEvento = [];

  formEvento: FormGroup;

  files:FileList;

  buscarEvento:any;

  ocultar_boton_archivos:any = 'display:block';

  p:number = 1;
  imagenes_url= [];

  constructor(private router:Router,private fb:FormBuilder,private eventoServ:EventoService) {

    this.formEvento = this.fb.group({

      id_evento:[null],
      titulo:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      contacto:["",[Validators.required]],
      ubicacion:["",[Validators.required]],
      fecha_hora:["",[Validators.required]],
      archivo:[""]
    });

   }

  ngOnInit(): void {
    this.obtenerEvento();
  }

  obtenerEvento()
  {
    this.eventoServ.getEvento().subscribe(
      resultado => {
        this.listEvento = resultado;
      }
    )
  }

  guardarEvento()
  {

    if(this.formEvento.value.id_evento)
    {
      this.eventoServ.updateEvento(this.formEvento.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.formEvento.reset();
          this.obtenerEvento();
        },
        error => console.log(error)
      )
    }else{
    this.eventoServ.saveEvento(this.formEvento.value,this.files).subscribe(
      resultado => {
        console.log(resultado);
        this.imagenes_url = [];
        this.formEvento.reset();
        this.obtenerEvento();
      },
      error => console.log(error)
    );
    }


  }

  editarEvento(datosEvento:IEvento)
  { 
      this.ocultar_boton_archivos = 'display:none;'
      this.formEvento.setValue({
      id_evento:datosEvento.id_evento,
      titulo:datosEvento.titulo,
      descripcion:datosEvento.descripcion,
      contacto:datosEvento.contacto,
      ubicacion:datosEvento.ubicacion,
      fecha_hora:datosEvento.fecha_hora,
      archivo:''
    });
  }

  eliminarEvento(id_evento:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.eventoServ.deleteEvento(id_evento).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerEvento();
        }, 
        error => console.log(error)
      )
    }

}

}
