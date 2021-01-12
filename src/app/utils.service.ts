import { Injectable } from '@angular/core';
import { CarteiraDetailedModel, ParticipanteDetailedModel, RentabilidadeDetailedModel } from './views/Models';

@Injectable({providedIn: 'root'})
export class UtilsService {

    constructor() { }

    setParticipante(participante: ParticipanteDetailedModel): void {
        localStorage.setItem("participante", JSON.stringify(participante));
    }

    getParticipante(): ParticipanteDetailedModel {
        var participante = JSON.parse(localStorage.getItem("participante")) as ParticipanteDetailedModel;

        if (!participante) {
            participante = new ParticipanteDetailedModel();
        }

        return participante;
    }

    getRentabilidade(): RentabilidadeDetailedModel[] {
        var participante = JSON.parse(localStorage.getItem("participante")) as ParticipanteDetailedModel;

        if (!participante.rentabilidades) {
            participante.rentabilidades = new Array<RentabilidadeDetailedModel>();
        }

        return participante.rentabilidades;
    }

    getCarteira(): CarteiraDetailedModel {
        var participante = JSON.parse(localStorage.getItem("participante")) as ParticipanteDetailedModel;

        let carteira = new CarteiraDetailedModel();
        carteira.descricao = participante.carteiraDescricao;
        carteira.composicao = participante.carteiraComposicao;
        carteira.rentabilidades = this.getRentabilidade();

        return carteira;
    }
    
}