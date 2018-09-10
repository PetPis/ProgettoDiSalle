import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Movimento } from "../model/movimento.model";

import { URL } from '../constants';
import { Injectable } from "../../node_modules/@angular/core";

@Injectable()
export class MovimentoService{
    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<Movimento>> {        
        let movimentiUrl = `${URL.MOVIMENTI}`;
        return this.http.get<Array<Movimento>>(movimentiUrl);
    }

    findById(movimentoId: number): Observable<Movimento> {
        let apiURL = `${URL.MOVIMENTI}/${movimentoId}`;
        return this.http.get<Movimento>(apiURL);
    }

    createMovimento(movimento: Movimento) {
        return this.http.post<Movimento>(URL.MOVIMENTI, movimento);
    }

    deleteMovimento(movimento: Movimento) {
        let deleteUrl = `${URL.MOVIMENTI}/${movimento.id}`;
        return this.http.delete<Movimento>(deleteUrl);
    }

    updateMovimento(movimento: Movimento) {
        return this.http.put<Movimento>(URL.MOVIMENTI, movimento);
    }

    findByCategoriaId(idFam: number,idCat:number): Observable<Array<Movimento>>{
        let movURL = `${URL.MOVIMENTI}/${idCat}/${idFam}`;
        return this.http.get<Array<Movimento>>(movURL);
    }

    deleteByCatAndFam(id:number,idFam:number){
        let del=`${URL.MOVIMENTI}/${id}/${idFam}`;
        return this.http.delete<Movimento>(del);
    }
}