import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, Events, MenuController, Nav, Platform } from 'ionic-angular';

import { LOGIN_PAGE, TABS_PAGE, PROFILO_PAGE } from '../pages/pages';
import { LinguaService } from '../services/lingua.services';
import { Utente } from '../model/utente.model';
import { UtenteService } from '../services/utente.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  utente: Utente;

  @ViewChild(Nav) nav :Nav;

  constructor(public events: Events, private translate: TranslateService, platform: Platform, private menu: MenuController,
    private alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen,
    private utenteService: UtenteService, private linguaService: LinguaService) {

    console.log("constructor MyApp");

    this.initTranslate();
    this.subscribeToEvents();
    platform.ready().then(() => {
      utenteService.getUtente().subscribe((utente: Utente) => {
        if (utente != null) {
          this.utente = utente;
          this.enableMenu(true);
          this.rootPage = TABS_PAGE;
        } else {
          this.enableMenu(false);
          this.rootPage = LOGIN_PAGE;
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    let linguaPreferita = this.linguaService.getLinguaPreferita();
    this.translate.setDefaultLang(linguaPreferita);
    this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
      if (lingua != null) {
        this.translate.use(lingua);
      } else {
        this.translate.use(linguaPreferita);
        this.linguaService.updateLingua(linguaPreferita);
      }
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  logout() {
    this.utenteService.logout();
    this.enableMenu(false);
    this.nav.setRoot(LOGIN_PAGE);
  }
  subscribeToEvents() {
    this.events.subscribe('login', (utente: Utente) => {
      this.utente = utente;
      this.enableMenu(true);
      this.nav.setRoot(TABS_PAGE);
    });

    this.events.subscribe('server-error', (err: HttpErrorResponse) => {
      this.showMessageServerError(err);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn);
  }

  showMessageServerError(err: HttpErrorResponse) {
    let errorMessage = "Errore nel server";

    switch (err.status) {
      case 403:
        errorMessage = "Utente non autorizzato";
        break;
      case 401:
        errorMessage = "Utente non autenticato";
        break;
      default:
        errorMessage = `Errore: ${err.status}`;
    }
    let alert = this.alertCtrl.create({
      title: "Errore",
      subTitle: errorMessage,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.utenteService.logout();
            this.nav.setRoot(LOGIN_PAGE);
          }
        }
      ]
    });
    alert.present();
  }


}