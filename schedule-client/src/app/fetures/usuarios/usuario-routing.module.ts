import { Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { UsuarioComponent } from './page/usuario/usuario.component';

export const USUARIO_ROUTES: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      {
         path: 'listar', component: ListagemComponent
      },
      {
        path: 'cadastro', component: CadastroComponent
     },
     {
      path: 'editar/:id', component: CadastroComponent
     }
    ]
  }
];
