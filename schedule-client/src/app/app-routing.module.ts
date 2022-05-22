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
      }
    ]
  },
  {
    path: 'auth',
    component: LayoutNoAuthComponent

  }
];
