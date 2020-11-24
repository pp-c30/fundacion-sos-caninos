import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IEvento } from "../modules/Evento";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http:HttpClient) {

   }

getEvento()
{
  return this.http.get<IEvento[]>("http://localhost:4200/evento");
}

saveEvento(unEvento:IEvento)
{
  return this.http.post("http://localhost:4200/evento", unEvento);
}

updateEvento(unEvento:IEvento)
{
  let id:number = unEvento.id_evento;
  return this.http.put("http://localhost:4200/evento/"+id, unEvento);
}

deleteEvento(id_evento:number)
{
  return this.http.delete("http://localhost:4200/evento/"+id_evento);
}

}