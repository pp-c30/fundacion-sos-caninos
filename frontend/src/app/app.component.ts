import { Component } from '@angular/core';
import { AutenticacionService } from "./service/autenticacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteAngular';

  constructor(public authServ:AutenticacionService){

  }
}
