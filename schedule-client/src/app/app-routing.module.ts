import { Routes } from '@angular/router';

import { LayoutAuthComponent } from './core/components/layout-auth/page/layout-auth.component';
import { LayoutNoAuthComponent } from './core/components/layout-no-auth/layout-no-auth.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./fetures/home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        loadChildren: () => import('./fetures/usuarios/usuario.module').then(m => m.UsuarioModule)
      },
      {
        path: '',
        loadChildren: () => import('./fetures/cliente/cliente.module').then(m => m.ClienteModule)
      }
    ]
  },
  {
    path: 'auth',
    component: LayoutNoAuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./core/components/layout-no-auth/components/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        loadChildren: () => import('./core/components/layout-no-auth/components/recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaModule)
      }
    ]
  }
];
