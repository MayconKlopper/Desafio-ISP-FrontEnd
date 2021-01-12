import { Component, OnInit } from '@angular/core';

import { NgxUiLoaderService } from 'ngx-ui-loader';

import { ParticipanteDetailedModel } from '../Models';
import { UtilsService } from '../../utils.service';
import { ParticipanteService } from '../../services/participante.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public participante = this.utilsService.getParticipante();

    constructor(private participanteService: ParticipanteService,
        private utilsService: UtilsService,
        private ngxUiLoaderService: NgxUiLoaderService) {
    }

    ngOnInit(): void {
        this.ngxUiLoaderService.start();
        if (this.participante.nome) {
            this.ngxUiLoaderService.stop();
            return;
        }

        this.participanteService.get().subscribe(
            (participante) => {
                this.participante = participante as ParticipanteDetailedModel;
            },
            (erro) => {
                this.ngxUiLoaderService.stop();
            },
            () => { 
                this.ngxUiLoaderService.stop();
            }
        )
     }
}
