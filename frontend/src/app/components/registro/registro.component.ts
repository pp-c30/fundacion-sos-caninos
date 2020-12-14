import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AutenticacionService } from "src/app/service/autenticacion.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro:FormGroup;
  

  constructor(private fb:FormBuilder,private autServ:AutenticacionService, private route:Router) { 
    this.formRegistro = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      email:['',[Validators.required]]
      
    });
  }

  ngOnInit(): void {
  }




  registrar(){
    
    this.autServ.register(this.formRegistro.value).subscribe(
      respuesta =>{
        localStorage.setItem('token', String(respuesta));
        this.formRegistro.reset();
        this.route.navigate(['/form-adopcion']);

      }
    );

  }

}
