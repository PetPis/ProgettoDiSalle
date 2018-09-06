webpackJsonp([4],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utente_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_famiglia_model__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(app, events, alertCtrl, utenteService, translateService, nav) {
        this.app = app;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.utenteService = utenteService;
        this.translateService = translateService;
        this.nav = nav;
        this.account = { username: "Marco", password: "marco" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe(function (data) {
            _this.loginSubTitle = data;
        });
        this.translateService.get('LOGIN_ERROR_TITLE').subscribe(function (data) {
            _this.loginTitle = data;
        });
    };
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        if (form.valid) {
            this.utenteService.login(this.account)
                .subscribe(function (utente) {
                _this.events.publish('login', utente);
            }, function (err) {
                if (err.status == 401) {
                    console.error('login request error: ' + err.status);
                    _this.showLoginError();
                }
            });
        }
    };
    LoginPage.prototype.showLoginError = function () {
        var alert = this.alertCtrl.create({
            title: this.loginTitle,
            subTitle: this.loginSubTitle,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.registrati = function () {
        var famiglia = new __WEBPACK_IMPORTED_MODULE_5__model_famiglia_model__["a" /* Famiglia */]();
        famiglia.id = 0;
        famiglia.nome = "";
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages__["i" /* REGISTRAZIONE_PAGE */], { "famiglia": famiglia });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'LOGIN_TITLE\'| translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="logo">\n    <img src="assets/imgs/LogoSenzaBordo.png" alt="SaveMyMoney logo">\n  </div>\n\n  <ion-list>\n    <form #loginForm="ngForm">\n      <ion-list no-lines>\n        <ion-item>\n          <ion-label stacked color="primary">{{ \'USERNAME\' | translate }}</ion-label>\n          <ion-input [(ngModel)]="account.username" name="username" type="text" #username="ngModel"\n                 [maxlength]="16" required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="username.valid" color="danger" padding-left>\n          {{ \'USERNAME_REQUIRED\' | translate }}\n        </p>\n        <ion-item>\n          <ion-label stacked color="primary">{{ \'PASSWORD\' | translate }}</ion-label>\n          <ion-input [(ngModel)]="account.password" name="password" type="password"\n                     #password="ngModel" [maxlength]="255" required>\n          </ion-input>\n        </ion-item>\n        <p ion-text [hidden]="password.valid" color="danger" padding-left>\n          {{ \'PASSWORD_REQUIRED\' | translate }}\n        </p>\n      </ion-list>\n      <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button (click)="onLogin(loginForm)" type="submit" [disabled]="!loginForm.form.valid" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="registrati()" block>{{\'REGISTRATI\' | translate}}</button>\n        </ion-col>\n      </ion-row>\n    </form>\n      \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_utente_service__["a" /* UtenteService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Famiglia; });
var Famiglia = /** @class */ (function () {
    function Famiglia() {
    }
    return Famiglia;
}());

//# sourceMappingURL=famiglia.model.js.map

/***/ })

});
//# sourceMappingURL=4.js.map