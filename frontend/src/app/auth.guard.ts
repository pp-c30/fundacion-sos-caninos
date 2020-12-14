import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AutenticacionService } from "src/app/service/autenticacion.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private autServ:AutenticacionService, private route:Router){

  }

  canActivate(){

    if(this.autServ.verificarUsuarioLogueado() == true){
      return true;
    }else{
      this.route.navigate(['/ingreso']); 
      return false;
    }

  }
  
  
  
}
