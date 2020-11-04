import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IFormularioA } from "../modules/formulario_adopcion";

@Injectable({
  providedIn: 'root'
})
export class FormularioAdopcionService {

  constructor(private http:HttpClient) { 

  }

 getFormularioA(){
    return this.http.get<IFormularioA[]>('http://localhost:3000/formulario_adopcion')
  }



}
