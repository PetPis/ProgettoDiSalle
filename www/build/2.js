webpackJsonp([2],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovimentoPageModule", function() { return MovimentoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movimento__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MovimentoPageModule = /** @class */ (function () {
    function MovimentoPageModule() {
    }
    MovimentoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movimento__["a" /* MovimentoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movimento__["a" /* MovimentoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], MovimentoPageModule);
    return MovimentoPageModule;
}());

//# sourceMappingURL=movimento.module.js.map

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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_movimento_model__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utente_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_movimento_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_categoria_service__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MovimentoPage = /** @class */ (function () {
    function MovimentoPage(navCtrl, navParams, movimentoService, categoriaService, utenteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movimentoService = movimentoService;
        this.categoriaService = categoriaService;
        this.utenteService = utenteService;
        this.movimento = new __WEBPACK_IMPORTED_MODULE_2__model_movimento_model__["a" /* Movimento */]();
        this.inserimento = false;
    }
    MovimentoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MovimentoPage');
        this.movimento = this.navParams.get("movimento");
        //flag for insert or create
        this.inserimento = this.navParams.get("inserimento");
        //get category array to display
        //TODO: mettere in array categorie solo quelle disponibili nella famiglia
        this.categoriaService.list().subscribe(function (data) {
            _this.categorie = data;
        });
        //get current family
        this.utenteService.getUtente().subscribe(function (data) {
            _this.movimento.famiglia = data.famiglia;
        });
    };
    MovimentoPage.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            console.log(this.movimento.categoria.segno);
            //Setto importo negativo per le uscite
            if (this.movimento.categoria.segno == "USCITA") {
                this.movimento.importo *= -1;
            }
            console.log(this.movimento.importo);
            if (this.inserimento) {
                this.movimentoService.createMovimento(this.movimento).subscribe(function () {
                    _this.navCtrl.pop();
                });
            }
            else {
                this.movimentoService.updateMovimento(this.movimento).subscribe(function () {
                    _this.navCtrl.pop();
                });
            }
            console.log(this.movimento);
        }
    };
    MovimentoPage.prototype.onDelete = function () {
        var _this = this;
        this.movimentoService.deleteMovimento(this.movimento).subscribe(function () {
            _this.navCtrl.pop();
        });
    };
    MovimentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-movimento',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\movimento\movimento.html"*/'<ion-header>\n\n  <ion-navbar hide-tabs>\n    <ion-title>\n      <h1 [hidden]="!inserimento">{{\'ADD_FLOW\'| translate}}</h1>\n      <h1 [hidden]="inserimento">{{\'UPDATE_FLOW\'| translate}}</h1>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #MovimentoForm="ngForm">\n    <ion-list no-lines>\n      <!-- nome -->\n      <ion-item>\n        <ion-label>{{\'CATEGORIA\'| translate}}</ion-label>\n        <ion-select name="nome" [(ngModel)]="movimento.categoria" #nome="ngModel" required\n        okText="{{ \'SAVE_BUTTON\' | translate }}" cancelText="{{ \'CANCEL_BUTTON\' | translate }}">\n            <ion-option *ngFor="let c of categorie" [value]="c">{{c.nome}}</ion-option>\n          </ion-select>\n      </ion-item>\n      <p ion-text [hidden]="nome.valid" color="danger" padding-left>\n          {{ \'CATEGORY_REQUIRED\' | translate }}\n      </p>\n      <!-- importo -->\n      <ion-item>\n        <ion-label>{{\'IMPORTO\'|translate}}</ion-label>\n        <ion-input type="number" #importo="ngModel" name="importo" [(ngModel)]="movimento.importo" required></ion-input>\n      </ion-item>\n      <p ion-text [hidden]="importo.valid" color="danger" padding-left>\n          {{ \'IMPORTO_REQUIRED\' | translate }}\n      </p>\n    </ion-list>\n    <!-- Submit -->\n    <ion-row responsive-sm>\n      <ion-col>\n        <button ion-button (click)="onSubmit(MovimentoForm)" type="submit" [disabled]="!MovimentoForm.form.valid" block>{{ \'SAVE_BUTTON\' | translate }}</button>\n      </ion-col>\n      <ion-col>\n        <button [hidden]="!inserimento" ion-button navPop block>{{\'CANCEL_BUTTON\'|translate}}</button>\n        <button [hidden]="inserimento" (click)="onDelete()" ion-button block>{{\'DELETE_BUTTON\'| translate}}</button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\movimento\movimento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_movimento_service__["a" /* MovimentoService */],
            __WEBPACK_IMPORTED_MODULE_5__services_categoria_service__["a" /* CategoriaService */], __WEBPACK_IMPORTED_MODULE_3__services_utente_service__["a" /* UtenteService */]])
    ], MovimentoPage);
    return MovimentoPage;
}());

//# sourceMappingURL=movimento.js.map

/***/ })

});
//# sourceMappingURL=2.js.map