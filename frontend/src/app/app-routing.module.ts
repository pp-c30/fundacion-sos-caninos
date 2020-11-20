import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CaninoComponent } from './components/canino/canino.component';
import { FormularioAdopcionComponent } from './components/formulario-adopcion/formulario-adopcion.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/canino',
    pathMatch:'full'
  },
  
  {
    path:'canino', component:CaninoComponent
  },
  {
    path:'form-adopcion', component:FormularioAdopcionComponent
  },
  {
    path:'requisitos', component:RequisitosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
