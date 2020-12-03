import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ICat_donacion } from "../models/categoria_donacion";

@Injectable({
  providedIn: 'root'
})
export class Categoria_donacionService {

  constructor(private http:HttpClient) {

   }

getCategoria_donacion()
{
  return this.http.get<ICat_donacion[]>("http://localhost:4200/categoria_donacion");
}

saveCategoria_donacion(unCategoria_donacion:ICat_donacion)
{
  return this.http.post("http://localhost:4200/categoria_donacion", unCategoria_donacion);
}

updateCategoria_donacion(unCategoria_donacion:ICat_donacion)
{
  let id:number = unCategoria_donacion.id_categoria_donacion;
  return this.http.put("http://localhost:4200/categoria_donacion/"+id, unCategoria_donacion);
}

deleteCategoria_donacion(id_categoria_donacion:number)
{
  return this.http.delete("http://localhost:4200/categoria_donacion/"+id_categoria_donacion);
}

}