import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ICanino } from "../models/canino";

@Injectable({
  providedIn: 'root'
})
export class CaninoService {

  constructor(private http:HttpClient) {

   }

getCanino()
{
  return this.http.get<ICanino[]>("http://localhost:4200/canino");
}

saveCanino(unCanino:ICanino)
{
  return this.http.post("http://localhost:4200/canino", unCanino);
}

updateCanino(unCanino:ICanino)
{
  let id:number = unCanino.id_canino;
  return this.http.put("http://localhost:4200/canino/"+id, unCanino);
}

deleteCanino(id_canino:number)
{
  return this.http.delete("http://localhost:4200/canino/"+id_canino);
}

}