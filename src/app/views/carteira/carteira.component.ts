import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CarteiraService } from '../../services/carteira.service';
import { CarteiraDetailedModel } from '../Models';

@Component({
    selector: 'app-carteira',
    templateUrl: 'carteira.component.html'
})

export class CarteiraComponent implements OnInit {
    @Input() carteiraList = new Array<CarteiraDetailedModel>();
    @Input() isUpdate = false;
    @Output() carteiraSelectedEvent = new EventEmitter<CarteiraDetailedModel>();
    public isCollapsed = true;

    constructor(private carteiraService: CarteiraService,
        private ngxUiLoaderService: NgxUiLoaderService) { }

    ngOnInit() {
        if (this.carteiraList.length == 0) {
            this.ngxUiLoaderService.start();
            this.carteiraService.get().subscribe(
                (carteiraList) => {
                    this.carteiraList = carteiraList;
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


    carteiraSelected(carteira: CarteiraDetailedModel) {
        this.carteiraSelectedEvent.emit(carteira);
    }
}