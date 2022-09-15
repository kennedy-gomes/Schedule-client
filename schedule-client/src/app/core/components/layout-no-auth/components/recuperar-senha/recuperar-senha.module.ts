import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RecuperarSenhaComponent } from './recuperar-senha.component';
import { RecuperarSenha_ROUTES } from './recuperar-senha-routing.module';



@NgModule({
  declarations: [RecuperarSenhaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RecuperarSenha_ROUTES)
  ]
})
export class RecuperarSenhaModule { }
