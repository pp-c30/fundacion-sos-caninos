import { Component, OnInit } from '@angular/core';

import { DonacionesService } from "../../service/donaciones.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IDonaciones } from 'src/app/models/donaciones';
import { Categoria_donacionService } from 'src/app/service/categoria_donacion.service';


@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {

  listDonaciones = [];
  lista_categoria= [];

  formDonaciones: FormGroup;

  buscarDonaciones:any;

  p:number = 1;

  constructor(private DonacionesServ:DonacionesService, private fb: FormBuilder, private CategoriaServ:Categoria_donacionService) {

    this.formDonaciones = this.fb.group({

      id_donaciones:[null],
      descripcion:["",[Validators.required,Validators.minLength(2)]],
      contacto:["",[Validators.required,Validators.minLength(12)]],
      direccion:["",[Validators.required]],
      categoria_donaciones:[null,[Validators.required]],
    });

   }

  ngOnInit(): void {
    this.obtenerDonaciones();
    this.obtenerCategoria();

  }

  obtenerCategoria(){
    this.CategoriaServ.getCategoria_donacion().subscribe(
      resultado => {
      this.lista_categoria = resultado;
    },
      error => console.log(error)
    )

  }

  obtenerDonaciones()
  {
    this.DonacionesServ.getDonaciones().subscribe(
      resultado => this.listDonaciones = resultado,
      error => console.log(error)
    )
  }

  guardarDonaciones()
  {

    if(this.formDonaciones.value.id_donaciones)
    {
      this.DonacionesServ.updateDonaciones(this.formDonaciones.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerDonaciones();
          this.formDonaciones.reset();
        },
        error => console.log(error)
      )
    }else{
    //console.log(this.formDonaciones.value);
    this.DonacionesServ.saveDonaciones(this.formDonaciones.value).subscribe(
      resultado => {
        console.log(resultado);
        this.formDonaciones.reset();
        this.obtenerDonaciones();
      },
      error => console.log(error)
    );
    }


  }

  editarDonaciones(donaciones:IDonaciones)
  {
    this.formDonaciones.setValue(donaciones);
  }

  eliminarDonaciones(id_donaciones:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.DonacionesServ.deleteDonaciones(id_donaciones).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerDonaciones();
        }, 
        error => console.log(error)
      )
    }

}

}
