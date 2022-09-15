import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuarioComponent } from './page/usuario/usuario.component';
import { USUARIO_ROUTES } from './usuario-routing.module';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrorComponent } from './control-error/control-error.component';

@NgModule({
  declarations: [ UsuarioComponent, ListagemComponent, FiltroComponent, CadastroComponent, ControlErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(USUARIO_ROUTES),
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
