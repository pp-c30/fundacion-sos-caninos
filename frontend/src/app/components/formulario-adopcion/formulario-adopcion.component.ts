import { Component, OnInit } from '@angular/core';
import { IFormularioA } from 'src/app/modules/formulario_adopcion';
import { FormularioAdopcionService } from "../../service/formulario-adopcion.service";
import { FormBuilder,FormGroup, Form, Validators } from "@angular/forms";

@Component({
  selector: 'app-formulario-adopcion',
  templateUrl: './formulario-adopcion.component.html',
  styleUrls: ['./formulario-adopcion.component.css']
})
export class FormularioAdopcionComponent implements OnInit {

 listFormularioA : IFormularioA[];

 formAdopcion:FormGroup;

 buscarFormulario:any;

 p:number = 1;


  constructor(private formularioAdopcionServ:FormularioAdopcionService,private fb:FormBuilder) {
   
      this.formAdopcion = this.fb.group({
        id_formulario:[null],
        nombre:['',[Validators.required,Validators.minLength(3)]],
        apellido:['',[Validators.required,Validators.minLength(3)]],
        direccion:['',[Validators.required]],
        dni:['',[Validators.required]],
        telefono:['',[Validators.required,Validators.minLength(8)]],
        correo:['',[Validators.required]],
        canino:['',[Validators.required]],
        id_localidad:['',[Validators.required]],
        requisito:['',[Validators.required]]


      });
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

  guardarFormularioA()
  {
    if(this.formAdopcion.value.id_formulario){

      this.formularioAdopcionServ.updateFormularioA(this.formAdopcion.value).subscribe(
        respuesta =>{
          console.log(respuesta);
          //refresca la grilla
          this.listarFormularioA();
          this.formAdopcion.reset();

        },
        error => console.log(error)
      )
    }

    else{
    //console.log(this.formAdopcion.value);
    this.formularioAdopcionServ.saveFormularioA(this.formAdopcion.value).subscribe(
      resultado => {
        console.log(resultado);
        //refresca la grilla
        this.listarFormularioA();
      },
      error => console.log(error)
    );
  }
}

 
  editarFormularioA(formularioA:IFormularioA)
  {
    this.formAdopcion.setValue(formularioA);
  }

  eliminarFormularioA(id_formulario:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.formularioAdopcionServ.deleteFormularioA(id_formulario).subscribe(
        respuesta => {
          console.log(respuesta);
          this.listarFormularioA();
        }, 
        error => console.log(error)
      )
    }

 
}


}



  




