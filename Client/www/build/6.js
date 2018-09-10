webpackJsonp([6],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrazionePageModule", function() { return RegistrazionePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrazione__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegistrazionePageModule = /** @class */ (function () {
    function RegistrazionePageModule() {
    }
    RegistrazionePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registrazione__["a" /* RegistrazionePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registrazione__["a" /* RegistrazionePage */]),
                __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], RegistrazionePageModule);
    return RegistrazionePageModule;
}());

//# sourceMappingURL=registrazione.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrazionePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utente_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_famiglia_service__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrazionePage = /** @class */ (function () {
    function RegistrazionePage(navCtrl, navParams, utenteService, famigliaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utenteService = utenteService;
        this.famigliaService = famigliaService;
        this.utente = { nome: "Nome", cognome: "Cognome", username: "Username", password: "Pass", famiglia: { id: 0, nome: "" } };
    }
    RegistrazionePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrazionePage');
    };
    RegistrazionePage.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            this.famigliaService.getFamigliaByNome(this.utente.famiglia.nome).subscribe(function (data) {
                if (data) {
                    //se la famiglia esiste la assegno all'utente
                    _this.utente.famiglia = data;
                    _this.utenteService.register(_this.utente).subscribe(function () { });
                }
                else {
                    //altrimenti ne creo una con il nome specificato
                    _this.famigliaService.createFamiglia(_this.utente.famiglia).subscribe(function () {
                        console.log("creating new Family");
                    });
                    // devo rifare la query perchè non ho l'id della famiglia creata
                    _this.famigliaService.getFamigliaByNome(_this.utente.famiglia.nome).subscribe(function (data) {
                        _this.utente.famiglia = data;
                        _this.utenteService.register(_this.utente).subscribe(function () { });
                    });
                }
            });
            this.navCtrl.pop();
        }
    };
    RegistrazionePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    RegistrazionePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrazione',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\registrazione\registrazione.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'REGISTRATI\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #registerForm="ngForm">\n    <ion-list no-lines>\n      <ion-item>\n        <ion-label stacked>{{\'NOME\'|translate}}*</ion-label>\n        <ion-input [(ngModel)]="utente.nome" type="text" #nome="ngModel" name="nome" required></ion-input>\n      </ion-item>\n      <p ion-text [hidden]="nome.valid" color="danger" padding-left>{{\'NAME_REQUIRED\'|translate}}</p>\n      <ion-item>\n        <ion-label stacked>{{\'COGNOME\'|translate}}*</ion-label>\n        <ion-input [(ngModel)]="utente.cognome" type="text" #cognome="ngModel" name="cognome" required></ion-input>\n      </ion-item>\n      <p ion-text [hidden]="cognome.valid" color="danger" padding-left>{{\'COGNOME_REQUIRED\'|translate}}</p>\n      <ion-item>\n        <ion-label stacked>{{\'USERNAME\'|translate}}*</ion-label>\n        <ion-input [(ngModel)]="utente.username" type="text" #username="ngModel" name="username" required></ion-input>\n      </ion-item>\n      <p ion-text [hidden]="username.valid" color="danger" padding-left>{{\'USERNAME_REQUIRED\'|translate}}</p>\n      <ion-item>\n        <ion-label stacked>{{\'PASSWORD\'|translate}}*</ion-label>\n        <ion-input [(ngModel)]="utente.password" type="password" #password="ngModel" name="password" required></ion-input>\n      </ion-item>\n      <p ion-text [hidden]="password.valid" color="danger" padding-left>{{\'PASSWORD_REQUIRED\'|translate}}</p>\n      <ion-item>\n        <ion-label stacked>{{\'FAMIGLIA\'|translate}}*</ion-label>\n        <ion-input [(ngModel)]="utente.famiglia.nome" type="text" #famiglia="ngModel" name="famiglia" required></ion-input>\n      </ion-item>\n      <p ion-text [hidden]="password.valid" color="danger" padding-left>{{\'FAMIGLIA_REQUIRED\'|translate}}</p>\n    </ion-list>\n    <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button (click)="onSubmit(registerForm)" type="submit" [disabled]="!registerForm.form.valid" block outline>{{ \'REGISTRATI\' | translate }}</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="cancel()" block outline>{{\'CANCEL_BUTTON\' | translate}}</button>\n        </ion-col>\n      </ion-row>\n  </form>\n  <div class="centrato">\n    <p>{{\'FAMIGLIA_WARN2\'|translate}}</p>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\registrazione\registrazione.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_utente_service__["a" /* UtenteService */], __WEBPACK_IMPORTED_MODULE_3__services_famiglia_service__["a" /* FamigliaService */]])
    ], RegistrazionePage);
    return RegistrazionePage;
}());

//# sourceMappingURL=registrazione.js.map

/***/ })

});
//# sourceMappingURL=6.js.map