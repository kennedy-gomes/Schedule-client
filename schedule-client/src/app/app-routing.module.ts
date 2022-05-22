import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from './core/components/layout-auth/page/layout-auth.component';
import { LayoutNoAuthComponent } from './core/components/layout-no-auth/layout-no-auth.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent

  },
  {
    path: 'auth',
    component: LayoutNoAuthComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
