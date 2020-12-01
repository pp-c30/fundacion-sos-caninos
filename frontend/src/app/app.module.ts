import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriaDonacionComponent } from './components/categoria-donacion/categoria-donacion.component';
<<<<<<< HEAD
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { FormularioAdopcionComponent } from './components/formulario-adopcion/formulario-adopcion.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AdmindEventoComponent } from "./components/admind-evento/admind-evento.component";
import { AdminDetalleEventoComponent } from "./components/admin-detalle-evento/admin-detalle-evento.component";


import { HttpClientModule } from "@angular/common/http";
=======
import { EventoComponent } from './components/evento/evento.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FormularioAdopcionComponent } from './components/formulario-adopcion/formulario-adopcion.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { CaninoComponent } from './components/canino/canino.component';
>>>>>>> c873a41971edea8cd3030451cd23de34241a6f32
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    CaninoComponent,
    CategoriaDonacionComponent,
    DonacionesComponent,
    FormularioAdopcionComponent,
    NavegacionComponent,
    LocalidadesComponent,
    ProvinciaComponent,
    RequisitosComponent,
    AdmindEventoComponent,
    AdminDetalleEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
