import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilsService } from '../utils.service';
import { CreateSolicitacaoModel, ParticipanteDetailedModel, PerfilDetailedModel, questaoModel, SolicitacaoModel } from '../views/Models';


@Injectable({providedIn: 'root'})
export class ParticipanteService {
    private API = environment.api + 'participante';

    constructor(private utilsService: UtilsService, private http: HttpClient) {
    }

    public get(): Observable<ParticipanteDetailedModel> {
        return this.http.get<ParticipanteDetailedModel>(this.API + '?ID=1').pipe(
            tap(participante => {
                this.utilsService.setParticipante(participante);
            })
        );
    }

    public getSolicitacao(): Observable<SolicitacaoModel[]> {
        return this.http.get<SolicitacaoModel[]>(this.API + '/getSolicitacao?participanteID=1');
    }

    public getQuestionario(): Observable<questaoModel[]> {
        return this.http.get<questaoModel[]>(this.API + '/getQuestionario');
    }

    public calculatePerfil(pontuation: number): Observable<PerfilDetailedModel> {
        return this.http.post<PerfilDetailedModel>(this.API + '/calculatePerfil', pontuation);
    }

    public createSolicitacao(createSolicitacaoModel: CreateSolicitacaoModel): Observable<void> {
        return this.http.post<void>(this.API + '/createSolicitacao', createSolicitacaoModel);
    }
}
