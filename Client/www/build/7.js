webpackJsonp([7],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfiloPageModule", function() { return ProfiloPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilo__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfiloPageModule = /** @class */ (function () {
    function ProfiloPageModule() {
    }
    ProfiloPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profilo__["a" /* ProfiloPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profilo__["a" /* ProfiloPage */]),
                __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ProfiloPageModule);
    return ProfiloPageModule;
}());

//# sourceMappingURL=profilo.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfiloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utente_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfiloPage = /** @class */ (function () {
    function ProfiloPage(navCtrl, navParams, utenteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utenteService = utenteService;
    }
    ProfiloPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfiloPage');
        this.utenteService.getUtente().subscribe(function (data) {
            _this.utente = data;
        });
    };
    ProfiloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilo',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\profilo\profilo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'PROFILO_PAGE\'|translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid *ngIf="utente">\n    <ion-row>\n      <ion-col>\n        <ion-label>{{\'USERNAME\'|translate}}:</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>{{utente.username}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>{{\'NOME\'|translate}}:</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>{{utente.nome}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>{{\'COGNOME\'|translate}}:</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>{{utente.cognome}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label>{{\'FAMIGLIA\'|translate}}:</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>{{utente.famiglia.nome}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\profilo\profilo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_utente_service__["a" /* UtenteService */]])
    ], ProfiloPage);
    return ProfiloPage;
}());

//# sourceMappingURL=profilo.js.map

/***/ })

});
//# sourceMappingURL=7.js.map