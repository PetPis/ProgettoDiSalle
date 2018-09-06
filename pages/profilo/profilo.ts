import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtenteService } from '../../services/utente.service';
import { Utente } from '../../model/utente.model';

@IonicPage()
@Component({
  selector: 'page-profilo',
  templateUrl: 'profilo.html',
})
export class ProfiloPage {

  utente: Utente;

  constructor(public navCtrl: NavController, public navParams: NavParams, public utenteService: UtenteService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfiloPage');
    this.utenteService.getUtente().subscribe((data: Utente) =>{
      this.utente = data;
    })
  }

}
