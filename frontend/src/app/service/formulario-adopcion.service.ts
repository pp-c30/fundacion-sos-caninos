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
  return this.http.get<IFormularioA[]>('http://localhost:4200/formulario_adopcion');
  }

  saveFormularioA(unFormularioA:IFormularioA){
  return this.http.post('http://localhost:4200/formulario_adopcion',unFormularioA);  
  }

  
  updateFormularioA(unFormularioA:IFormularioA){
    let id:number = unFormularioA.id_formulario;
    return this.http.put('http://localhost:4200/formulario_adopcion/'+id,unFormularioA);
  }

  deleteFormularioA(id:number){
    return this.http.delete('http://localhost:4200/formulario_adopcion/'+id);
  }



}
