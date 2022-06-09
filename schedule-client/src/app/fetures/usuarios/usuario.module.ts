import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuarioComponent } from './page/usuario/usuario.component';
import { USUARIO_ROUTES } from './usuario-routing.module';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ UsuarioComponent, ListagemComponent, FiltroComponent, CadastroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USUARIO_ROUTES),
    FontAwesomeModule
  ]
})
export class UsuarioModule { }
