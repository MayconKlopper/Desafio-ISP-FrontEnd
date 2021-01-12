import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../../utils.service';
import { CarteiraDetailedModel } from '../../Models';

@Component({
    selector: 'app-rentabilidade',
    templateUrl: 'rentabilidade.component.html'
})

export class RentabilidadeComponent implements OnInit {
    @Input() carteira = new CarteiraDetailedModel();

    constructor(private utilsService: UtilsService) { }

    ngOnInit() {
        this.carteira = this.utilsService.getCarteira();
    }
}