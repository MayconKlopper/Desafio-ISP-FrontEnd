import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { menuItems } from './../../navs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems = menuItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;

  constructor(
    @Inject(DOCUMENT) _document?: any) {

    //this.usuario = this.accountService.recuperausuarioLogado();

    // switch (this.usuario.role[0]) {
    //   case 'usuario': {
    //      this.navItems = navUsuario;
    //      break;
    //   }
    //   case 'empresa': {
    //     this.navItems = navEmpresa;
    //      break;
    //   }
    //   case 'funcionario': {
    //     this.navItems = navFuncionario;
    //      break;
    //   }
   //}

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  // logOut() {
  //   this.accountService.logOut().subscribe(
  //     (resultSuccess) => {
  //       this.toasterservice.success('Você foi deslogado do sistema.', 'Sucesso');
  //     },
  //     (resultError) => {},
  //     () => {
  //       localStorage.removeItem('usuarioLogado');
  //       this.router.navigate(['./login']);
  //     }
  //   );
  // }
}
