import { Component, OnInit } from '@angular/core';

import { EventoService } from "../../service/evento.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IEvento } from 'src/app/models/evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  listEvento = [];

  formEvento: FormGroup;

  buscarEvento:any;

  p:number = 1;

  constructor(private eventoServ:EventoService, private fb: FormBuilder) {

    this.formEvento = this.fb.group({

      id_evento:[null],
      titulo:["",[Validators.required,Validators.minLength(2)]],
      descripcion:["",[Validators.required]],
      contacto:["",[Validators.required]],
      ubicacion:["",[Validators.required]],
      fecha_hora:["",[Validators.required]]

    });

   }

  ngOnInit(): void {
    this.obtenerEvento();
  }

  obtenerEvento()
  {
    this.eventoServ.getEvento().subscribe(
      resultado => this.listEvento = resultado,
      error => console.log(error)
    )
  }

  guardarEvento()
  {

    if(this.formEvento.value.id_evento)
    {
      this.eventoServ.updateEvento(this.formEvento.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerEvento();
          this.formEvento.reset();
        },
        error => console.log(error)
      )
    }else{
    //console.log(this.formEvento.value);
    /*this.eventoServ.saveEvento(this.formEvento.value).subscribe(
      resultado => {
        console.log(resultado);
        this.formEvento.reset();
        this.obtenerEvento();
      },
      error => console.log(error)
    );*/
    }


  }

  editarEvento(evento:IEvento)
  {
    this.formEvento.setValue(evento);
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
