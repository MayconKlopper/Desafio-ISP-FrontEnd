import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CarteiraService } from '../../services/carteira.service';
import { CarteiraDetailedModel } from '../Models';

@Component({
    selector: 'app-carteira',
    templateUrl: 'carteira.component.html'
})

export class CarteiraComponent implements OnInit {
    public carteiraList = new Array<CarteiraDetailedModel>();
    public isCollapsed = true;

    constructor(private carteiraService: CarteiraService,
        private ngxUiLoaderService: NgxUiLoaderService) { }

    ngOnInit() {
        this.ngxUiLoaderService.start();
        this.carteiraService.get().subscribe(
            (carteiraList) => {
                this.carteiraList = carteiraList;
                this.ngxUiLoaderService.stop();
            },
            (error) => {
                this.ngxUiLoaderService.stop();
            },
            () => {
                this.ngxUiLoaderService.stop();
            }
        );
    }
}