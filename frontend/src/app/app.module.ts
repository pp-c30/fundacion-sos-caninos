import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriaDonacionComponent } from './components/categoria-donacion/categoria-donacion.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { FormularioAdopcionComponent } from './components/formulario-adopcion/formulario-adopcion.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { CaninoComponent } from './components/canino/canino.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { EventoComponent } from "./components/evento/evento.component";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { AdminCaninoComponent } from './components/admin-canino/admin-canino.component';
import { AdminProvinciaComponent } from './components/admin-provincia/admin-provincia.component';
import { AdminNavegacionComponent } from './components/admin-navegacion/admin-navegacion.component';
import { AdminDonacionesComponent } from "./components/admin-donaciones/admin-donaciones.component";
import { AdmindEventoComponent } from "./components/admind-evento/admind-evento.component";
import { AdminDetalleEventoComponent } from "./components/admin-detalle-evento/admin-detalle-evento.component";
import { AdminLocalidadesComponent } from './components/admin-localidades/admin-localidades.component';
import { AdminRequisitosComponent } from './components/admin-requisitos/admin-requisitos.component';



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
    EventoComponent,
    AdmindEventoComponent,
    AdminDetalleEventoComponent,
    AdminCaninoComponent,
    AdminProvinciaComponent,
    AdminDonacionesComponent,
    AdminNavegacionComponent,
    AdminLocalidadesComponent,
    AdminRequisitosComponent
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
