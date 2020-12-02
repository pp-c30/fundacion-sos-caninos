import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CaninoComponent } from './components/canino/canino.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { FormularioAdopcionComponent } from './components/formulario-adopcion/formulario-adopcion.component';
import { AdminDetalleEventoComponent } from "./components/admin-detalle-evento/admin-detalle-evento.component";
import { AdmindEventoComponent } from "./components/admind-evento/admind-evento.component";
import { RequisitosComponent } from './components/requisitos/requisitos.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/canino',
    pathMatch:'full'
  },
  
  {
    path:'canino', 
    component:CaninoComponent
  },
  {
    path:'form-adopcion', 
    component:FormularioAdopcionComponent
  },
  {
    path:'admin-evento',
    component:AdmindEventoComponent
  },
  {
    path:'admin-detalle-evento/:id_evento',
    component:AdminDetalleEventoComponent
    
  },
  {
    path:'donaciones', 
    component:DonacionesComponent
  
  },
  {
    path:'requisitos', 
    component:RequisitosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }