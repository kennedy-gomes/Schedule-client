import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClienteComponent } from './page/cliente/cliente.component';
import { CLIENTE_ROUTES } from './cliente-routing.module';

@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CLIENTE_ROUTES),
  ]
})
export class ClienteModule { }
