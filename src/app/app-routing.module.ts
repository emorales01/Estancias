import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule )
  },
  {
    path:'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule )
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    //component: ErrorPageComponent
    redirectTo: '404'
  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
