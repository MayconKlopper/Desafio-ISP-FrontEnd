import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ParticipanteService } from '../../../services/participante.service';
import { SolicitacaoModel, StatusEnum } from '../../Models';

@Component({
    selector: 'app-solicitacao',
    templateUrl: 'solicitacao.component.html'
})

export class SolicitacaoComponent implements OnInit {
    public solicitacaoList = new Array<SolicitacaoModel>();
    public statusEnum = StatusEnum;

    constructor(private participanteService: ParticipanteService,
        private ngxUiLoaderService: NgxUiLoaderService) { }

    ngOnInit() {
        this.ngxUiLoaderService.start();
        this.participanteService.getSolicitacao().subscribe(
            (solicitacaoList) => {
                this.solicitacaoList = solicitacaoList;
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