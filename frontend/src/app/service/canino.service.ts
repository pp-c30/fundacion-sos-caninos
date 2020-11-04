import { Injectable } from '@angular/core';
import { ICanino } from "../modules/canino";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CaninoService {

  constructor(private http:HttpClient) { }


saveEvento(datosCanino:ICanino,files:FileList)
{

  //this.http.post('http://localhost:4200/canino',)

}

}