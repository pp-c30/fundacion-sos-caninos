import { Component, OnInit } from '@angular/core';
import { IRequisito } from 'src/app/modules/Requisito';
import { RequisitosService } from "../../service/requisitos.service";
import { FormBuilder,FormGroup,Form,Validators } from "@angular/forms";


@Component({
  selector: 'app-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.css']
})
export class RequisitosComponent implements OnInit {

  listRequisito:IRequisito[];

  formRequisitos:FormGroup;

  buscarRequisito:any;

  p:number = 1;

  constructor(private requisitosServ:RequisitosService,private fb:FormBuilder) {
    
    this.formRequisitos= this.fb.group({

      id_requisito:['',[Validators.required]],
      pregunta:['',[Validators.required]],
      respuesta:['',[Validators.required]],
      observacion:['',[Validators.required]]

    });


   }

  ngOnInit(): void {
    this.listarRequisitos();

  }

  listarRequisitos()
  {
    this.requisitosServ.getRequisitos().subscribe(
      resultado => this.listRequisito = resultado,
      error => console.log(error)
      
    )
  }
  

  
  guardarRequisitos()
  {
    if(this.formRequisitos.value.id_requisito){
      this.requisitosServ.updateRequisito(this.formRequisitos.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.listarRequisitos();
          this.formRequisitos.reset();
        },
        error => console.log(error)
      )
    }
    else{
        //console.log(this.formAdopcion.value);
    this.requisitosServ.saveRequisitos(this.formRequisitos.value).subscribe(
      resultado => {
        console.log(resultado);
        //refresca la grilla
        this.listarRequisitos();
      },
      error => console.log(error)
    );

    }
  
  
  }


  editarRequisitos(requisito:IRequisito)
  {
    this.formRequisitos.setValue(requisito);
  }

  eliminarRequisitos(id_requisito:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.requisitosServ.deleteRequisito(id_requisito).subscribe(
        respuesta => {
          console.log(respuesta);
          this.listarRequisitos();
        }, 
        error => console.log(error)
      )
    }

 
}

}
