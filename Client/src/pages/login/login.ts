import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, App } from 'ionic-angular';
import { Account, UtenteService } from '../../services/utente.service';
import { TranslateService } from '@ngx-translate/core';
import { Utente } from '../../model/utente.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { REGISTRAZIONE_PAGE } from '../pages';
import { Famiglia } from '../../model/famiglia.model';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: Account = { username: "Marco", password: "marco" };
  loginTitle: string;
  loginSubTitle: string;

  constructor(public app:App, public events: Events, public alertCtrl: AlertController, public utenteService: UtenteService, public translateService: TranslateService,public nav:NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }
  onLogin(form: NgForm) {
    if (form.valid) {
      this.utenteService.login(this.account)
        .subscribe((utente: Utente) => {
          this.events.publish('login', utente);
        },
          (err: HttpErrorResponse) => {
            if (err.status == 401) {
              console.error('login request error: ' + err.status);
              this.showLoginError();
            }
          });
    }
  }
  showLoginError() {
    let alert = this.alertCtrl.create({
      title: this.loginTitle,
      subTitle: this.loginSubTitle,
      buttons: ['OK']
    });
    alert.present();
  }

  registrati(){
    let famiglia = new Famiglia();
    famiglia.id=0;
    famiglia.nome="";
    this.app.getRootNav().push(REGISTRAZIONE_PAGE,{"famiglia":famiglia});
  }

}
