import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Famiglia } from "../model/famiglia.model";

import { URL } from '../constants';
import { Injectable } from "../../node_modules/@angular/core";

@Injectable()
export class FamigliaService{
    constructor(private http: HttpClient) {
    }

    getFamigliaById(id: number): Observable<Famiglia>{
        let famigliaURL=`${URL.FAMIGLIA}/idFam/${id}`;
        return this.http.get<Famiglia>(famigliaURL);
    }

    getFamigliaByNome(nome: string): Observable<Famiglia>{
        let famigliaURL=`${URL.FAMIGLIA}/nomeFam/${nome}`;
        return this.http.get<Famiglia>(famigliaURL);
    }

    getFamiglia(): Observable<Famiglia>{
        let famigliaURL=`${URL.FAMIGLIA}/nomeFam`;
        return this.http.get<Famiglia>(famigliaURL);
    }
    
    createFamiglia(famiglia: Famiglia){
        return this.http.post<Famiglia>(URL.FAMIGLIA,famiglia);
    }
}