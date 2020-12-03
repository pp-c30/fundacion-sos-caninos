import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IProvincia } from "../models/provincia";

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http:HttpClient) {

   }

getProvincia()
{
  return this.http.get<IProvincia[]>("http://localhost:4200/provincia");
}

saveProvincia(unProvincia:IProvincia)
{
  return this.http.post("http://localhost:4200/provincia", unProvincia);
}

updateProvincia(unProvincia:IProvincia)
{
  let id:number = unProvincia.id;
  return this.http.put("http://localhost:4200/provincia/"+id, unProvincia);
}

deleteProvincia(id:number)
{
  return this.http.delete("http://localhost:4200/provincia/"+id);
}

}