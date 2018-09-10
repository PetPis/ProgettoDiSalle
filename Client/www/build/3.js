webpackJsonp([3],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimentiPageModule", function() { return MovimentiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movimenti__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MovimentiPageModule = /** @class */ (function () {
    function MovimentiPageModule() {
    }
    MovimentiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movimenti__["a" /* MovimentiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movimenti__["a" /* MovimentiPage */]),
                __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], MovimentiPageModule);
    return MovimentiPageModule;
}());

//# sourceMappingURL=movimenti.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movimento; });
var Movimento = /** @class */ (function () {
    function Movimento() {
    }
    return Movimento;
}());

//# sourceMappingURL=movimento.model.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovimentiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_movimento_model__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movimento_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovimentiPage = /** @class */ (function () {
    function MovimentiPage(app, navCtrl, navParams, movimentoService, modalCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movimentoService = movimentoService;
        this.modalCtrl = modalCtrl;
    }
    MovimentiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MovimentiPage');
        this.movimentoService.list().subscribe(function (data) {
            _this.movimenti = data;
        });
    };
    MovimentiPage.prototype.UpdateMovimento = function (n) {
        var _this = this;
        this.movimentoService.findById(n.id).subscribe(function (movimento) {
            console.log(movimento);
            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages__["g" /* MOVIMENTO_PAGE */], { "inserimento": false, "movimento": movimento });
        });
    };
    MovimentiPage.prototype.addMovimento = function () {
        console.log('Aggiungi Nuovo Movimento');
        var movimento = new __WEBPACK_IMPORTED_MODULE_2__model_movimento_model__["a" /* Movimento */]();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages__["g" /* MOVIMENTO_PAGE */], { "inserimento": true, "movimento": movimento });
    };
    MovimentiPage.prototype.listMovimenti = function () {
        var _this = this;
        console.log("Lista Movimenti");
        this.movimentoService.list().subscribe(function (app) {
            _this.movimenti = app;
        });
    };
    MovimentiPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log("refresh Lista Movimenti");
        this.movimentoService.list().subscribe(function (data) {
            _this.movimenti = data;
            refresher.complete();
        });
    };
    MovimentiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movimenti',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\movimenti\movimenti.html"*/'<ion-header>\n  <ion-navbar no-border-bottom >\n    <ion-row>\n      <ion-col col-9 offset-1>\n        <ion-title>Save My Money</ion-title>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="addMovimento()" class="Bottone" outline>\n          <ion-icon name="add-circle" ></ion-icon>\n        </button>   \n    </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list >\n    <ion-list-header>{{\'POSITIVO\' | translate}}</ion-list-header>\n    <ion-list *ngFor="let e of movimenti" >\n      <ion-item *ngIf="e.categoria.segno == true">\n        <button ion-button  (click)="UpdateMovimento(e)" class="buttonList" block outline>\n            <ion-grid>\n                <ion-row>\n                  <ion-col col-8><h2 class="alignLeft">{{e.categoria.nome}}</h2></ion-col>\n                  <ion-col><h2 class="greenButton"> {{\'CURRENCY_VALUE\'| translate}} +{{e.importo}}</h2></ion-col>\n                </ion-row>\n            </ion-grid>\n        </button>\n      </ion-item>\n    </ion-list>\n    \n    <ion-list-header>{{\'NEGATIVO\' | translate}}</ion-list-header>\n    <ion-list *ngFor="let u of movimenti" >\n      <ion-item *ngIf="u.categoria.segno == false">\n          <button ion-button (click)="UpdateMovimento(u)"class="buttonList" block outline>\n            <ion-grid>\n            <ion-row>\n              <ion-col col-8><h2 class="alignLeft">{{u.categoria.nome}}</h2></ion-col>\n              <ion-col col><h2 class="redButton">{{\'CURRENCY_VALUE\'| translate}} {{u.importo}}</h2></ion-col>\n            </ion-row>\n          </ion-grid>\n          </button>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\movimenti\movimenti.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_movimento_service__["a" /* MovimentoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], MovimentiPage);
    return MovimentiPage;
}());

//# sourceMappingURL=movimenti.js.map

/***/ })

});
//# sourceMappingURL=3.js.map