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
}n

saveDonaciones(datosDonaciones:IDonaciones,files:FileList)
{

 const fd = new FormData(); //Genero la instancia fd (FORM DATA)

  //Con la dicha instancia puedo ordenar los datos. Dentro de fd se almacena nombre evento, descripcion, etc
 fd.append('descripcion',datosDonaciones.descripcion);
 fd.append('contacto',datosDonaciones.contacto);
 fd.append('direccion',datosDonaciones.direccion);
 fd.append('categoria_donacioness',datosDonaciones.categoria_donaciones);

 //Recorro la lista de imagenes con un FOR, a medida que se recorren se insertan
 for (let index = 0; index < files.length; index++) {
  
   fd.append('img_donaciones',files[index]) //A medida que recorre imagen por imagen vamos almacenando en img-evento 
                                       //las imagenes que en definitiva se almacena en fd   
 }


  return this.http.post('http://localhost:4200/donaciones',fd); //A traves del metodo POST y a traves de la ruta enviamos fd a la REST API 
 }                                                          //y como responde retornamos su respuesta


updateDonaciones(unDonaciones:IDonaciones)
{
  let id_donaciones:number = unDonaciones.id_donaciones;
  return this.http.put("http://localhost:4200/donaciones/"+id_donaciones, unDonaciones);
}

deleteDonaciones(id_donaciones:number)
{
  return this.http.delete("http://localhost:4200/donaciones/"+id_donaciones);
}

}