import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilsService } from '../utils.service';
import { ParticipanteDetailedModel } from '../views/Models';


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
}
