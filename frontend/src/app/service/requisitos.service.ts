import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequisito } from "../modules/Requisito";


@Injectable({
  providedIn: 'root'
})
export class RequisitosService {

  constructor(private http:HttpClient) { }

  getRequisitos(){
    return this.http.get<IRequisito[]>('http://localhost:4200/requisito')
  }

  saveRequisitos(unRequisito:IRequisito){
    return this.http.post('http://localhost:4200/requisito',unRequisito);  
  }

  updateRequisito(unRequisito:IRequisito){
    let id:number = unRequisito.id_requisito;
    return this.http.put('http://localhost:4200/requisito/'+id,unRequisito);
  }

  deleteRequisito(id:number){
    return this.http.delete('http://localhost:4200/requisito/'+id);
  }
}
