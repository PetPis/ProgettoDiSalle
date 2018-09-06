import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Categoria } from "../model/categoria.model";

import { URL } from '../constants';
import { Injectable } from "../../node_modules/@angular/core";

@Injectable()
export class CategoriaService{
    constructor(private http: HttpClient) {
    }
    list(): Observable<Array<Categoria>> {        
        let categorieUrl = `${URL.CATEGORIA}`;
        return this.http.get<Array<Categoria>>(categorieUrl);
    }

    findByNome(nome: String): Observable<Categoria>{
        let apiURL= `${URL.CATEGORIA}/nome/${nome}`;
        return this.http.get<Categoria>(apiURL);
    }

    findById(categoriaId: number): Observable<Categoria> {
        let apiURL = `${URL.CATEGORIA}/${categoriaId}`;
        return this.http.get<Categoria>(apiURL);
    }

    createCategoria(categoria: Categoria){
        return this.http.post<Categoria>(URL.CATEGORIA,categoria);
    }

    updateCategoria(categoria: Categoria) {
        return this.http.put<Categoria>(URL.CATEGORIA, categoria);
    }

    deleteCategoria(categoria: Categoria) {
        let deleteUrl = `${URL.CATEGORIA}/${categoria.id}`;
        return this.http.delete<Categoria>(deleteUrl);
    }
}