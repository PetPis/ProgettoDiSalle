import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Nav, MenuController,NavController, App } from 'ionic-angular';
import {  ActionSheetController } from 'ionic-angular';
import { PROFILO_PAGE,INFO_PAGE, MOVIMENTI_PAGE, LOGIN_PAGE } from '../pages';
import { LinguaService, Lingua } from '../../services/lingua.services';
import { Utente } from '../../model/utente.model';
import { UtenteService } from '../../services/utente.service';
import { TranslateService } from '../../../node_modules/@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-impostazioni',
  templateUrl: 'impostazioni.html',
})
export class ImpostazioniPage {
  linguaPreferita: string;
  utente: Utente;
  lingue:Array<Lingua>
  lingueIT: Array<Lingua>
  lingueEN: Array<Lingua>
  valute: Array<string> = ["EUR","USD"];
  currency: string;
  linguaNuova: string;

  constructor(public navCtrl:NavController,public navParams: NavParams,public actionsheetCtrl: ActionSheetController,
              public linguaService:LinguaService,public utenteService: UtenteService,public translateService: TranslateService,
              public menu: MenuController,private appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImpostazioniPage');
    this.lingue=this.linguaService.getLingue();
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      this.linguaPreferita = lingua;
    });
    this.utenteService.getUtente().subscribe((utente: Utente) => {
      this.utente = utente;
    });
  }

  profilo(){
    console.log("Profilo Page");
    this.navCtrl.push(PROFILO_PAGE);
  }

  info(){
    console.log("Info Page");
    this.navCtrl.push(INFO_PAGE);
  }

  logout(){
    console.log("Logged Out")
    this.utenteService.logout();
    this.appCtrl.getRootNav().setRoot(LOGIN_PAGE);
  }
  setLingua(){
    console.log("Nuova Lingua: " + this.linguaPreferita);
    this.translateService.use(this.linguaPreferita);
    this.linguaService.updateLingua(this.linguaPreferita);
    this.utenteService.updateProfilo(this.utente).subscribe((nuovoUtente: Utente) => {
      this.utente = nuovoUtente;
      location.reload(true);
    });
  }

}
