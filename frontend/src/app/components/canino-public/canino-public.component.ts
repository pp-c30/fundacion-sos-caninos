import { Component, OnInit } from '@angular/core';
import { ICanino } from 'src/app/models/canino';
import { CaninoService } from "../../service/canino.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-canino-public',
  templateUrl: './canino-public.component.html',
  styleUrls: ['./canino-public.component.css']
})
export class CaninoPublicComponent implements OnInit {


  lista_caninos:ICanino[]=[];

  constructor(private router:Router,private caninoService:CaninoService) {


  
   }

  ngOnInit(): void {

    this.obtenerCaninos()
  }

  obtenerCaninos()
  {
    this.caninoService.getCanino().subscribe (
      resultado => {
        this.lista_caninos = resultado;
      }
    )
  }

  detalleCaninoPublic(id_canino:number) 
{
  
  //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
  this.router.navigate(['/detalle-canino-public',id_canino]);
  
}

}
