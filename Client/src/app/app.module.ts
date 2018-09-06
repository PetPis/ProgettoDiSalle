import './shared/rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LinguaService } from '../services/lingua.services';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { UtenteService } from '../services/utente.service';
import { httpInterceptorProviders } from '../interceptors';
import { MovimentoService } from '../services/movimento.service';
import { CategoriaService } from '../services/categoria.service';
import { CommonModule } from '@angular/common';
import { FamigliaService } from '../services/famiglia.service';
import { CatFamService } from '../services/catFam.service';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot({
      name: 'savemymoney__db',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    httpInterceptorProviders,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LinguaService,
    UtenteService,
    CategoriaService,
    MovimentoService,
    FamigliaService,
    CatFamService
  ]
})
export class AppModule {}
