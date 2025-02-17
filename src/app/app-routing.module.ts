import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCreateComponent } from './usuarios/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuarios/usuario-edit/usuario-edit.component';
import { CotizacionListComponent } from './cotizacion/cotizacion-list/cotizacion-list.component';
import { CotizacionCreateComponent } from './cotizacion/cotizacion-create/cotizacion-create.component';
import { CotizacionCotizarComponent } from './cotizacion/cotizacion-cotizar/cotizacion-cotizar.component';
import { CotizacionAprobarComponent } from './cotizacion/cotizacion-aprobar/cotizacion-aprobar.component';
import { ClienteCreateComponent } from './clientes/cliente-create/cliente-create.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { VisitaListComponent } from './visitas/visita-list/visita-list.component';
import { VisitaCreateComponent } from './visitas/visita-create/visita-create.component';
import { VisitaAtenderComponent } from './visitas/visita-atender/visita-atender.component';

const routes: Routes = [
  {
    path:'cotizaciones',
    component:CotizacionListComponent,
    pathMatch:'full'
  },
  {
    path:'cotizaciones/crear',
    component:CotizacionCreateComponent,
    pathMatch:'full'
  },
  {
    path:'cotizaciones/cotizar/:idCotizacion',
    component:CotizacionCotizarComponent,
    pathMatch:'full'
  },
  {
    path:'cotizaciones/aprobar/:idCotizacion',
    component:CotizacionAprobarComponent,
    pathMatch:'full'
  },
  {
    path:'clientes',
    component:ClienteListComponent,
    pathMatch:'full'
  },
  {
    path:'clientes/crear',
    component:ClienteCreateComponent,
    pathMatch:'full'
  },
  {
    path:'usuarios',
    component:UsuarioListComponent,
    pathMatch:'full'
  },
  {
    path:'usuarios/crear',
    component:UsuarioCreateComponent,
    pathMatch:'full'
  },
  {
    path:'usuarios/editar/:idUsuario',
    component:UsuarioEditComponent,
    pathMatch:'full'
  },
  {
    path:'visitas',
    component:VisitaListComponent,
    pathMatch:'full'
  },
  {
    path:'visitas/crear',
    component:VisitaCreateComponent,
    pathMatch:'full'
  },
  {
    path:'visitas/atender/:idAtencion',
    component:VisitaAtenderComponent,
    pathMatch:'full'
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
