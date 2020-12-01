import { Component, OnInit } from '@angular/core';

import { CaninoService } from "../../service/canino.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { ICanino } from 'src/app/models/canino';

@Component({
  selector: 'app-canino',
  templateUrl: './canino.component.html',
  styleUrls: ['./canino.component.css']
})
export class CaninoComponent implements OnInit {

  listCanino = [];

  formCanino: FormGroup;

  buscarCanino:any;

  p:number = 1;

  constructor(private caninoServ:CaninoService, private fb: FormBuilder) {

    this.formCanino = this.fb.group({

      id_canino:[null],
      nombre:["",[Validators.required,Validators.minLength(2)]],
      fecha_nacimiento:["",[Validators.required,Validators.minLength(10)]],
      edad:["",[Validators.required]],
      sexo:["",[Validators.required]],
      tamanio:["",[Validators.required]],
      castrado:["",[Validators.required]],
      desparasitado:["",[Validators.required]],
      vacunado:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      estado_adopcion:["",[Validators.required]],
      fecha_adopcion:["",[Validators.required,Validators.minLength(10)]]
    });

   }

  ngOnInit(): void {
    this.obtenerCanino();
  }

  obtenerCanino()
  {
    this.caninoServ.getCanino().subscribe(
      resultado => this.listCanino = resultado,
      error => console.log(error)
    )
  }

  guardarCanino()
  {

    if(this.formCanino.value.id_canino)
    {
      this.caninoServ.updateCanino(this.formCanino.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerCanino();
          this.formCanino.reset();
        },
        error => console.log(error)
      )
    }else{
    //console.log(this.formCanino.value);
    this.caninoServ.saveCanino(this.formCanino.value).subscribe(
      resultado => {
        console.log(resultado);
        this.formCanino.reset();
        this.obtenerCanino();
      },
      error => console.log(error)
    );
    }


  }

  editarCanino(canino:ICanino)
  {
    this.formCanino.setValue(canino);
  }

  eliminarCanino(id_canino:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.caninoServ.deleteCanino(id_canino).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerCanino();
        }, 
        error => console.log(error)
      )
    }

}

}
