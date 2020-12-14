import { Component, OnInit } from '@angular/core';
import { IEvento } from 'src/app/models/evento';
import { EventoService } from "../../service/evento.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {


  lista_eventos:IEvento[]=[];

  constructor(private router:Router,private eventoService:EventoService) {


  
   }

  ngOnInit(): void {

    this.obtenerEventos()
  }

  obtenerEventos()
  {
    this.eventoService.getEvento().subscribe (
      resultado => {
        this.lista_eventos = resultado;
      }
    )
  }
  
  contacto() 
  {
    
    //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
    this.router.navigate(['/contacto']);
    
  }



}
