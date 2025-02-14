import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './seguridad/login/login.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuarios/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuarios/usuario-edit/usuario-edit.component';
import { UsuarioDeleteComponent } from './usuarios/usuario-delete/usuario-delete.component';

import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CotizacionListComponent } from './cotizacion/cotizacion-list/cotizacion-list.component';
import { CotizacionCreateComponent } from './cotizacion/cotizacion-create/cotizacion-create.component';

import {MAT_DATE_LOCALE} from '@angular/material/core';
import { ClienteCreateComponent } from './clientes/cliente-create/cliente-create.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { CotizacionCotizarComponent } from './cotizacion/cotizacion-cotizar/cotizacion-cotizar.component';
import { CotizacionAprobarComponent } from './cotizacion/cotizacion-aprobar/cotizacion-aprobar.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { EquipoCreateComponent } from './equipos/equipo-create/equipo-create.component';
import { EquipoListComponent } from './equipos/equipo-list/equipo-list.component';
import { EquipoFormComponent } from './equipos/equipo-form/equipo-form.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { VisitaListComponent } from './visitas/visita-list/visita-list.component';
import { VisitaCreateComponent } from './visitas/visita-create/visita-create.component';
import { VisitaEditComponent } from './visitas/visita-edit/visita-edit.component';
import { VisitaFormComponent } from './visitas/visita-form/visita-form.component';
import { EquipoAssignComponent } from './equipos/equipo-assign/equipo-assign.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioListComponent,
    UsuarioCreateComponent,
    UsuarioEditComponent,
    UsuarioDeleteComponent,
    DashboardComponent,
    CotizacionListComponent,
    CotizacionCreateComponent,
    ClienteCreateComponent,
    MostrarErroresComponent,
    ClienteFormComponent,
    CotizacionCotizarComponent,
    CotizacionAprobarComponent,
    ClienteListComponent,
    EquipoCreateComponent,
    EquipoListComponent,
    EquipoFormComponent,
    UsuarioFormComponent,
    VisitaListComponent,
    VisitaCreateComponent,
    VisitaEditComponent,
    VisitaFormComponent,
    EquipoAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
