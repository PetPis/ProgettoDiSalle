webpackJsonp([9],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpostazioniPageModule", function() { return ImpostazioniPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__impostazioni__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImpostazioniPageModule = /** @class */ (function () {
    function ImpostazioniPageModule() {
    }
    ImpostazioniPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__impostazioni__["a" /* ImpostazioniPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__impostazioni__["a" /* ImpostazioniPage */]),
                __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ImpostazioniPageModule);
    return ImpostazioniPageModule;
}());

//# sourceMappingURL=impostazioni.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpostazioniPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lingua_services__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utente_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImpostazioniPage = /** @class */ (function () {
    function ImpostazioniPage(navCtrl, navParams, actionsheetCtrl, linguaService, utenteService, translateService, menu, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.linguaService = linguaService;
        this.utenteService = utenteService;
        this.translateService = translateService;
        this.menu = menu;
        this.appCtrl = appCtrl;
        this.valute = ["EUR", "USD"];
    }
    ImpostazioniPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ImpostazioniPage');
        this.lingue = this.linguaService.getLingue();
        this.linguaService.getLinguaAttuale().subscribe(function (lingua) {
            _this.linguaPreferita = lingua;
        });
        this.utenteService.getUtente().subscribe(function (utente) {
            _this.utente = utente;
        });
    };
    ImpostazioniPage.prototype.profilo = function () {
        console.log("Profilo Page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["h" /* PROFILO_PAGE */]);
    };
    ImpostazioniPage.prototype.info = function () {
        console.log("Info Page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["d" /* INFO_PAGE */]);
    };
    ImpostazioniPage.prototype.logout = function () {
        console.log("Logged Out");
        this.utenteService.logout();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__pages__["e" /* LOGIN_PAGE */]);
    };
    ImpostazioniPage.prototype.setLingua = function () {
        var _this = this;
        console.log("Nuova Lingua: " + this.linguaPreferita);
        this.translateService.use(this.linguaPreferita);
        this.linguaService.updateLingua(this.linguaPreferita);
        this.utenteService.updateProfilo(this.utente).subscribe(function (nuovoUtente) {
            _this.utente = nuovoUtente;
            location.reload(true);
        });
    };
    ImpostazioniPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-impostazioni',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\impostazioni\impostazioni.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'IMPOSTAZIONI_TAB\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!------- PROFILO------->\n  <button ion-button block outline (click)="profilo()">{{\'PROFILO\' | translate}}</button>\n  <!------- VALUTA & LINGUA------->\n  <ion-item>\n    <ion-label>{{ \'LANGUAGE_CURR\' | translate }}</ion-label>\n    <ion-select [(ngModel)]="linguaPreferita" (ionChange)="setLingua()">\n      <ion-option *ngFor="let lang of lingue" [value]="lang.valore">{{lang.etichetta}}, {{lang.currency}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <!------- INFO------->\n  <button ion-button block class="alignLeft" outline (click)="info()">Info</button>\n  <!------- LOGOUT------->\n  <button ion-button block outline class="alignLeft" (click)="logout()">{{\'LOGOUT\'| translate}}</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\impostazioni\impostazioni.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__services_lingua_services__["a" /* LinguaService */], __WEBPACK_IMPORTED_MODULE_4__services_utente_service__["a" /* UtenteService */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], ImpostazioniPage);
    return ImpostazioniPage;
}());

//# sourceMappingURL=impostazioni.js.map

/***/ })

});
//# sourceMappingURL=9.js.map