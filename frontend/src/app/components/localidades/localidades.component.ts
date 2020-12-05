import { Component, OnInit } from '@angular/core';

import { LocalidadesService } from "../../service/localidades.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { ILocalidades } from 'src/app/models/localidades';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.css']
})
export class LocalidadesComponent implements OnInit {

  listLocalidades = [];

  formLocalidades: FormGroup;

  buscarLocalidades:any;

  p:number = 1;

  constructor(private localidadesServ:LocalidadesService, private fb: FormBuilder) {

    this.formLocalidades = this.fb.group({

      id_localidad:[null],
      provincia_id:[null,[Validators.required,]],
      nombre:["",[Validators.required,]],
      codigopostal:["",[Validators.required]]
    });

   }

  ngOnInit(): void {
    this.obtenerLocalidades();
  }

  obtenerLocalidades()
  {
    this.localidadesServ.getLocalidades().subscribe(
      resultado => this.listLocalidades = resultado,
      error => console.log(error)
    )
  }

  guardarLocalidades()
  {

    if(this.formLocalidades.value.id_localidad)
    {
      this.localidadesServ.updateLocalidades(this.formLocalidades.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerLocalidades();
          this.formLocalidades.reset();
        },
        error => console.log(error)
      )
    }else{
    //console.log(this.formLocalidades.value);
    this.localidadesServ.saveLocalidades(this.formLocalidades.value).subscribe(
      resultado => {
        console.log(resultado);
        this.formLocalidades.reset();
        this.obtenerLocalidades();
      },
      error => console.log(error)
    );
    }


  }

  editarLocalidades(localidades:ILocalidades)
  {
    this.formLocalidades.setValue(localidades);
  }

  eliminarLocalidades(id_localidad:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.localidadesServ.deleteLocalidades(id_localidad).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerLocalidades();
        }, 
        error => console.log(error)
      )
    }

}

}
