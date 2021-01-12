import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarteiraDetailedModel, PerfilDetailedModel } from '../../../Models';

@Component({
    selector: 'app-atualizar-carteira',
    templateUrl: 'atualizar-carteira.component.html'
})

export class AtualizarCarteiraComponent implements OnInit {
    @Input() perfil = new PerfilDetailedModel();
    @Output() carteiraSelectedEvent = new EventEmitter<CarteiraDetailedModel>();

    constructor() { }

    ngOnInit() { }

    carteiraSelected(carteira: CarteiraDetailedModel) {
        this.carteiraSelectedEvent.emit(carteira);
    }
}