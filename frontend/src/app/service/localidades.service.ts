import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ILocalidades } from "../models/localidades";

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  constructor(private http:HttpClient) {

   }
obtenerLocalidades(provincia_id:number)
{
  return this.http.get<ILocalidades[]>("http://localhost:4200/localidades/"+provincia_id);
}

getLocalidades()
{
  return this.http.get<ILocalidades[]>("http://localhost:4200/localidades");
}

saveLocalidades(unLocalidades:ILocalidades)
{
  return this.http.post("http://localhost:4200/localidades", unLocalidades);
}

updateLocalidades(unLocalidades:ILocalidades)
{
  let id:number = unLocalidades.id_localidad;
  return this.http.put("http://localhost:4200/localidades/"+id, unLocalidades);
}

deleteLocalidades(id_localidad:number)
{
  return this.http.delete("http://localhost:4200/localidades/"+id_localidad);
}

}