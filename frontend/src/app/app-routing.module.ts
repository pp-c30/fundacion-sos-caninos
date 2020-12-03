import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CaninoComponent } from './components/canino/canino.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { FormularioAdopcionComponent } from './components/formulario-adopcion/formulario-adopcion.component';
import { AdminDetalleEventoComponent } from "./components/admin-detalle-evento/admin-detalle-evento.component";
import { AdmindEventoComponent } from "./components/admind-evento/admind-evento.component";
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { AdminNavegacionComponent } from './components/admin-navegacion/admin-navegacion.component';
import { AdminCuerpoNavegacionComponent } from './components/admin-cuerpo-navegacion/admin-cuerpo-navegacion.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { Categoria_donacionComponent } from './components/categoria-donacion/categoria-donacion.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/admin-cuerpo-navegacion',
    pathMatch:'full'
  },
  {
    path:'admin-cuerpo-navegacion', 
    component:AdminCuerpoNavegacionComponent
  }, 
  {
    path:'admin-navegacion', 
    component:AdminNavegacionComponent
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
    path:'localidades', 
    component:LocalidadesComponent
  },
  {
    path:'provincia', 
    component:ProvinciaComponent
  },
  {
    path:'categoria-donaciones', 
    component:Categoria_donacionComponent
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
