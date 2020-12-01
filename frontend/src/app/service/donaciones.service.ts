import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IDonaciones } from "../models/donaciones";

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(private http:HttpClient) {

   }

getDonaciones()
{
  return this.http.get<IDonaciones[]>("http://localhost:4200/donaciones");
}

saveDonaciones(unDonaciones:IDonaciones)
{
  return this.http.post("http://localhost:4200/donaciones", unDonaciones);
}

updateDonaciones(unDonaciones:IDonaciones)
{
  let id:number = unDonaciones.id_donaciones;
  return this.http.put("http://localhost:4200/donaciones/"+id, unDonaciones);
}

deleteDonaciones(id_donaciones:number)
{
  return this.http.delete("http://localhost:4200/donaciones/"+id_donaciones);
}

}