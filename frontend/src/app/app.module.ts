import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Categoria_donacionComponent } from './components/categoria-donacion/categoria-donacion.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { FormularioAdopcionComponent } from './components/formulario-adopcion/formulario-adopcion.component';
import { CaninoComponent } from './components/canino/canino.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { EventoComponent } from "./components/evento/evento.component";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";



import { AdmindEventoComponent } from "./components/admind-evento/admind-evento.component";
import { AdminDetalleEventoComponent } from "./components/admin-detalle-evento/admin-detalle-evento.component";
import { AdminCuerpoNavegacionComponent } from './components/admin-cuerpo-navegacion/admin-cuerpo-navegacion.component';
import { AdminNavegacionComponent } from './components/admin-navegacion/admin-navegacion.component';
import { CaninoPublicComponent } from './components/canino-public/canino-public.component';
import { ProvinciaPublicComponent } from './components/provincia-public/provincia-public.component';
import { DonacionesPublicComponent } from './components/donaciones-public/donaciones-public.component';
import { FormularioAdopcionPublicComponent } from './components/formulario-adopcion-public/formulario-adopcion-public.component';
import { RequisitosPublicComponent } from './components/requisitos-public/requisitos-public.component';
import { NavegacionPublicComponent } from './components/navegacion-public/navegacion-public.component';
import { LocalidadesPublicComponent } from './components/localidades-public/localidades-public.component';



@NgModule({
  declarations: [
    AppComponent,
    CaninoComponent,
    Categoria_donacionComponent,
    DonacionesComponent,
    FormularioAdopcionComponent,
    LocalidadesComponent,
    ProvinciaComponent,
    RequisitosComponent,
    EventoComponent,
    AdmindEventoComponent,
    AdminDetalleEventoComponent,   
    AdminCuerpoNavegacionComponent,
    AdminNavegacionComponent,
    CaninoPublicComponent,
    ProvinciaPublicComponent,
    DonacionesPublicComponent,
    FormularioAdopcionPublicComponent,
    RequisitosPublicComponent,
    NavegacionPublicComponent,
    LocalidadesPublicComponent
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
