import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuarioComponent } from './page/usuario/usuario.component';
import { USUARIO_ROUTES } from './usuario-routing.module';
import { ListagemComponent } from './components/listagem/listagem.component';

@NgModule({
  declarations: [ UsuarioComponent, ListagemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USUARIO_ROUTES),
  ]
})
export class UsuarioModule { }
