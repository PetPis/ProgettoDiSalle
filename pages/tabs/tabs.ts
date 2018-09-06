import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MOVIMENTI_PAGE, CATEGORIE_PAGE, IMPOSTAZIONI_PAGE } from '../pages';
import { UtenteService } from '../../services/utente.service';
import { Utente } from '../../model/utente.model';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  utente: Utente;
  movimentiRoot:string = MOVIMENTI_PAGE;
  categorieRoot:string = CATEGORIE_PAGE;
  impostazioniRoot: string = IMPOSTAZIONI_PAGE;

  constructor(public utenteService: UtenteService) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TabsPage");
    this.utenteService.getUtente().subscribe((utente: Utente) => {      
      this.utente=utente;
    });
  }

}
