import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-requisitos-public',
  templateUrl: './requisitos-public.component.html',
  styleUrls: ['./requisitos-public.component.css']
})
export class RequisitosPublicComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }



  obtenerCaninos() 
{
  
  //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
  this.router.navigate(['/nuestros-jordanes']);
  
}
}
