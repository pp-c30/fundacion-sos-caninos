import { Component, OnInit } from '@angular/core';
import { IFormularioA } from 'src/app/models/formulario_adopcion';
import { FormularioAdopcionService } from "../../service/formulario-adopcion.service";

@Component({
  selector: 'app-formulario-adopcion',
  templateUrl: './formulario-adopcion.component.html',
  styleUrls: ['./formulario-adopcion.component.css']
})
export class FormularioAdopcionComponent implements OnInit {

 listFormularioA : IFormularioA[];

  constructor(private formularioAdopcionServ:FormularioAdopcionService) {
   

   }

  ngOnInit(): void {

   this.listarFormularioA();


  }

  listarFormularioA()
  {
    this.formularioAdopcionServ.getFormularioA().subscribe(
      resultado => this.listFormularioA = resultado,
      error => console.log(error)
      
    )
  }

}
