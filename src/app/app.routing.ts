import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';

// Componentes da aplicação
import { HomeComponent } from './views/Home/home.component';
import { AtualizarPerfilComponent } from './views/participante/atualizar-perfil/atualizar-perfil.component';
import { SolicitacaoComponent } from './views/participante/solicitacao/solicitacao.component';
import { CarteiraComponent } from './views/carteira/carteira.component';
import { RentabilidadeComponent } from './views/carteira/rentabilidade/rentabilidade.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: P404Component,
    data: { title: 'Page 404' }
  },
  {
    path: '500',
    component: P500Component,
    data: { title: 'Page 500' }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { title: 'Home' },
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'atualizar-perfil', component: AtualizarPerfilComponent },
      { path: 'carteiras', component: CarteiraComponent },
      { path: 'solicitacoes', component: SolicitacaoComponent },
      { path: 'rentabilidade', component: RentabilidadeComponent }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
