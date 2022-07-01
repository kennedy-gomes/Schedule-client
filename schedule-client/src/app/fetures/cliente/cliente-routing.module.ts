import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';


import { ListagemComponent } from './components/listagem/listagem.component';
import { ClienteComponent } from './page/cliente/cliente.component';

export const CLIENTE_ROUTES: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      {
        path: 'listar' , component: ListagemComponent
      },
      {
        path: 'cadastro' , component: CadastroComponent
      }
    ]
  }
];
