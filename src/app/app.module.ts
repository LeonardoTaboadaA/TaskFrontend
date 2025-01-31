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
    CotizacionAprobarComponent
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
