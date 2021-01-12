import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule, PercentPipe } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';

// Imports da aplicação
import { HomeComponent } from './views/Home/home.component';
// import serviços aplicação


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import {NgxMaskModule} from 'ngx-mask';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AtualizarPerfilComponent } from './views/participante/atualizar-perfil/atualizar-perfil.component';
import { CarteiraComponent } from './views/carteira/carteira.component';
import { SolicitacaoComponent } from './views/participante/solicitacao/solicitacao.component';
import { RentabilidadeComponent } from './views/carteira/rentabilidade/rentabilidade.component';
import { RentabilidadeListViewComponent } from './views/carteira/rentabilidade/rentabilidade-list-view.component';
import { AtualizarCarteiraComponent } from './views/participante/atualizar-perfil/atualizar-carteira/atualizar-carteira.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    CollapseModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      timeOut: 30000
    })
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    HomeComponent,
    AtualizarPerfilComponent,
    AtualizarCarteiraComponent,
    CarteiraComponent,
    SolicitacaoComponent,
    RentabilidadeComponent,
    RentabilidadeListViewComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    PercentPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
