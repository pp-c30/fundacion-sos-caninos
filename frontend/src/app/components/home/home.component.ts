import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaninoService } from 'src/app/service/canino.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista_caninos=[];
  p:number = 1;
  constructor(private router:Router, private caninoService:CaninoService) { }

  ngOnInit(): void {
    this.obtenerCaninos();
  }

  obtenerCaninos()
  {
    this.caninoService.getCaninoHome().subscribe (
      resultado => {
        this.lista_caninos = resultado;
      }
    )
  }

  detalleCaninoPublic(id_canino:number) 
{
  
  //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
  this.router.navigate(['/detalle-jordan',id_canino]);
  
}
}
