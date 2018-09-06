webpackJsonp([1],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaPageModule", function() { return CategoriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoria__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoriaPageModule = /** @class */ (function () {
    function CategoriaPageModule() {
    }
    CategoriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categoria__["a" /* CategoriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categoria__["a" /* CategoriaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CategoriaPageModule);
    return CategoriaPageModule;
}());

//# sourceMappingURL=categoria.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categoria; });
/* unused harmony export SEGNO_ENTRATA */
/* unused harmony export SEGNO_USCITA */
/* unused harmony export SEGNO */
var Categoria = /** @class */ (function () {
    function Categoria() {
    }
    return Categoria;
}());

var SEGNO_ENTRATA = "ENTRATA";
var SEGNO_USCITA = "USCITA";
var SEGNO = [SEGNO_ENTRATA, SEGNO_USCITA];
//# sourceMappingURL=categoria.model.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatFam; });
var CatFam = /** @class */ (function () {
    function CatFam() {
    }
    return CatFam;
}());

//# sourceMappingURL=catFam.model.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_categoria_model__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_catFam_model__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_famiglia_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_catFam_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_categoria_service__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriaPage = /** @class */ (function () {
    function CategoriaPage(navCtrl, navParams, famigliService, catFamService, categoriaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.famigliService = famigliService;
        this.catFamService = catFamService;
        this.categoriaService = categoriaService;
        this.inserimento = false;
        this.c = new __WEBPACK_IMPORTED_MODULE_3__model_catFam_model__["a" /* CatFam */]();
        this.cat = new __WEBPACK_IMPORTED_MODULE_2__model_categoria_model__["a" /* Categoria */]();
        this.segni = ['ENTRATA', 'USCITA'];
    }
    CategoriaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CategoriaPage');
        this.inserimento = this.navParams.get("inserimento");
        //prendo i dati della famiglia
        this.famigliService.getFamiglia().subscribe(function (data) {
            _this.c.famiglia = data;
        });
    };
    CategoriaPage.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            //se il budget non è impostato lo setto a 0
            if (!this.c.budget) {
                this.c.budget = 0;
            }
            //prendo i dati della categoria
            this.c.categoria = this.cat;
            console.log(this.cat.nome);
            this.categoriaService.findByNome(this.cat.nome).subscribe(function (data) {
                console.log(data);
                if (!data) {
                    console.log("Categoria non esistente");
                    _this.categoriaService.createCategoria(_this.cat).subscribe(function () { });
                }
                _this.catFamService.insert(_this.c).subscribe(function () { });
            });
        }
    };
    CategoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoria',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\categoria\categoria.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <h1 [hidden]="!inserimento">{{\'ADD_CAT\'| translate}}</h1>\n      <h1 [hidden]="inserimento">{{\'UPDATE_CAT\'| translate}}</h1>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #CategoriaForm="ngForm">\n    <ion-list no-lines>\n      <!-------Nome Categoria -------->\n      <ion-item>\n        <ion-label>{{\'CATEGORIA\'|translate}}</ion-label>\n        <ion-input type="text" [(ngModel)]="cat.nome" #nome="ngModel" name="nome" required></ion-input>\n      </ion-item>\n      <p ion-text color="danger" [hidden]="nome.valid" padding-left>{{\'CATEGORY_REQUIRED\'|translate}}</p>\n\n      <!------Segno Categoria ------>\n      <ion-item>\n        <ion-label>{{\'SEGNO\'|translate}}</ion-label>\n        <ion-select name="segno" [(ngModel)]="cat.segno" #segno="ngModel" required\n        okText="{{ \'SAVE_BUTTON\' | translate }}" cancelText="{{ \'CANCEL_BUTTON\' | translate }}">\n          <ion-option *ngFor="let s of segni" [value]="s" >{{s}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text color="danger" [hidden]="segno.valid" padding-left>{{\'SEGNO_REQUIRED\'|translate}}</p>\n      <ion-item>\n        <ion-label>Budget</ion-label>\n        <ion-input type="number" [(ngModel)]="c.budget" #budget="ngModel" name="budget"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" [hidden]="budget.valid" padding-left>{{\'BUDGET_REQUIRED\'|translate}}</p>\n    </ion-list>\n    <!-- Submit -->\n    <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button (click)="onSubmit(CategoriaForm)" type="submit" [disabled]="!CategoriaForm.form.valid" block>{{ \'SAVE_BUTTON\' | translate }}</button>\n        </ion-col>\n        <ion-col>\n          <button [hidden]="!inserimento" ion-button navPop block>{{\'CANCEL_BUTTON\'|translate}}</button>\n          <button [hidden]="inserimento" (click)="onDelete()" ion-button block>{{\'DELETE_BUTTON\'| translate}}</button>\n        </ion-col>\n      </ion-row>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\categoria\categoria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__services_famiglia_service__["a" /* FamigliaService */],
            __WEBPACK_IMPORTED_MODULE_5__services_catFam_service__["a" /* CatFamService */], __WEBPACK_IMPORTED_MODULE_6__services_categoria_service__["a" /* CategoriaService */]])
    ], CategoriaPage);
    return CategoriaPage;
}());

//# sourceMappingURL=categoria.js.map

/***/ })

});
//# sourceMappingURL=1.js.map