import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-navegacion-public',
  templateUrl: './navegacion-public.component.html',
  styleUrls: ['./navegacion-public.component.css']
})
export class NavegacionPublicComponent {

  title = 'clienteAngular';

  constructor(public authServ:AutenticacionService){

  }
}
