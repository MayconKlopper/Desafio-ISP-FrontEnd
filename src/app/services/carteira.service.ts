import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CarteiraDetailedModel } from '../views/Models';

@Injectable({providedIn: 'root'})
export class CarteiraService {
    private API = environment.api + 'carteira';
    
    constructor(private http: HttpClient) { }
    
    public get(): Observable<CarteiraDetailedModel[]> {
        return this.http.get<CarteiraDetailedModel[]>(this.API);
    }
}