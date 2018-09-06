import { Injectable } from "../../node_modules/@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CatFam } from "../model/catFam.model";
import { URL } from "../constants";

@Injectable()
export class CatFamService{
    constructor(private http: HttpClient) {
    }

    list(): Observable<Array<CatFam>>{
        let listURL = `${URL.CATFAM}`
        return this.http.get<Array<CatFam>>(listURL);
    }

    insert(c: CatFam){
        return this.http.post<CatFam>(URL.CATFAM, c);
    }
}