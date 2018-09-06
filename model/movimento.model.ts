import { Categoria } from "./categoria.model";
import { Utente } from "./utente.model";
import { Famiglia } from "./famiglia.model";

export class Movimento {
    id: number;
    importo:number;
    data: Date;
    categoria: Categoria;
    famiglia: Famiglia;  
}

