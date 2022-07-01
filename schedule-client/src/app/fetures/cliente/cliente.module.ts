import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClienteComponent } from './page/cliente/cliente.component';
import { CLIENTE_ROUTES } from './cliente-routing.module';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FiltroComponent } from './components/filtro/filtro.component';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [ClienteComponent, ListagemComponent, FiltroComponent, CadastroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CLIENTE_ROUTES),
    FontAwesomeModule
  ]
})
export class ClienteModule { }
