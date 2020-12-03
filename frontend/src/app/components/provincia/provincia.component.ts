import { Component, OnInit } from '@angular/core';

import { ProvinciaService } from "../../service/provincia.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IProvincia } from 'src/app/models/provincia';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  listProvincia = [];

  formProvincia: FormGroup;

  buscarProvincia:any;

  p:number = 1;

  constructor(private provinciaServ:ProvinciaService, private fb: FormBuilder) {

    this.formProvincia = this.fb.group({

      id:[null],
      nombre:["",[Validators.required,Validators.minLength(2)]]
    });

   }

  ngOnInit(): void {
    this.obtenerProvincia();
  }

  obtenerProvincia()
  {
    this.provinciaServ.getProvincia().subscribe(
      resultado => this.listProvincia = resultado,
      error => console.log(error)
    )
  }

  guardarProvincia()
  {

    if(this.formProvincia.value.id)
    {
      this.provinciaServ.updateProvincia(this.formProvincia.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerProvincia();
          this.formProvincia.reset();
        },
        error => console.log(error)
      )
    }else{
    //console.log(this.formProvincia.value);
    this.provinciaServ.saveProvincia(this.formProvincia.value).subscribe(
      resultado => {
        console.log(resultado);
        this.formProvincia.reset();
        this.obtenerProvincia();
      },
      error => console.log(error)
    );
    }


  }

  editarProvincia(provincia:IProvincia)
  {
    this.formProvincia.setValue(provincia);
  }

  eliminarProvincia(id:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.provinciaServ.deleteProvincia(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerProvincia();
        }, 
        error => console.log(error)
      )
    }

}

}
