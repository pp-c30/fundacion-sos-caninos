import { Component, OnInit } from '@angular/core';

import { Categoria_donacionService } from "../../service/categoria_donacion.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { ICat_donacion } from 'src/app/models/categoria_donacion';

@Component({
  selector: 'app-categoria-donacion',
  templateUrl: './categoria-donacion.component.html',
  styleUrls: ['./categoria-donacion.component.css']
})
export class Categoria_donacionComponent implements OnInit {

  listCategoria_donacion = [];

  formCategoria_donacion: FormGroup;

  buscarCategoria_donacion:any;

  p:number = 1;

  constructor(private categoria_donacionServ:Categoria_donacionService, private fb: FormBuilder) {

    this.formCategoria_donacion = this.fb.group({

      id_categoria_donacion:[null],
      descripcion:["",[Validators.required]]
    });

   }

  ngOnInit(): void {
    this.obtenerCategoria_donacion();
  }

  obtenerCategoria_donacion()
  {
    this.categoria_donacionServ.getCategoria_donacion().subscribe(
      resultado => this.listCategoria_donacion = resultado,
      error => console.log(error)
    )
  }

  guardarCategoria_donacion()
  {

    if(this.formCategoria_donacion.value.id_categoria_donacion)
    {
      this.categoria_donacionServ.updateCategoria_donacion(this.formCategoria_donacion.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerCategoria_donacion();
          this.formCategoria_donacion.reset();
        },
        error => console.log(error)
      )
    }else{
    //console.log(this.formCategoria_donacion.value);
    this.categoria_donacionServ.saveCategoria_donacion(this.formCategoria_donacion.value).subscribe(
      resultado => {
        console.log(resultado);
        this.formCategoria_donacion.reset();
        this.obtenerCategoria_donacion();
      },
      error => console.log(error)
    );
    }


  }

  editarCategoria_donacion(categoria_donacion:ICat_donacion)
  {
    this.formCategoria_donacion.setValue(categoria_donacion);
  }

  eliminarCategoria_donacion(id_categoria_donacion:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.categoria_donacionServ.deleteCategoria_donacion(id_categoria_donacion).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerCategoria_donacion();
        }, 
        error => console.log(error)
      )
    }

}

}
