import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutAuthComponent } from './components/layout-auth/page/layout-auth.component';
import { LayoutNoAuthComponent } from './components/layout-no-auth/layout-no-auth.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/layout-auth/components/navbar/navbar.component';





@NgModule({
  declarations: [LayoutAuthComponent, LayoutNoAuthComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class CoreModule { }
