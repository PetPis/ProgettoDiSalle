webpackJsonp([0],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriePageModule", function() { return CategoriePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoriePageModule = /** @class */ (function () {
    function CategoriePageModule() {
    }
    CategoriePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categorie__["a" /* CategoriePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorie__["a" /* CategoriePage */]),
                __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CategoriePageModule);
    return CategoriePageModule;
}());

//# sourceMappingURL=categorie.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categoria; });
var Categoria = /** @class */ (function () {
    function Categoria() {
    }
    return Categoria;
}());

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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_categoria_model__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_categoria_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movimento_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_catFam_model__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_catFam_service__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoriePage = /** @class */ (function () {
    function CategoriePage(app, navCtrl, navParams, catFamService, categoriaService, alert, movimentoService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.catFamService = catFamService;
        this.categoriaService = categoriaService;
        this.alert = alert;
        this.movimentoService = movimentoService;
    }
    CategoriePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CategoriePage');
        this.catFamService.list().subscribe(function (data) {
            _this.categorie = data;
            console.log(data);
        });
    };
    CategoriePage.prototype.update = function (c) {
        var _this = this;
        this.categoriaService.findById(c.id).subscribe(function (data) {
            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* CATEGORIA_PAGE */], { "inserimento": false, "c": data });
        });
    };
    CategoriePage.prototype.add = function () {
        var c = new __WEBPACK_IMPORTED_MODULE_6__model_catFam_model__["a" /* CatFam */]();
        c.categoria = new __WEBPACK_IMPORTED_MODULE_2__model_categoria_model__["a" /* Categoria */]();
        c.categoria.nome = "Nome";
        c.categoria.segno = false;
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* CATEGORIA_PAGE */], { "inserimento": true, "c": c });
    };
    CategoriePage.prototype.delete = function (c) {
        var _this = this;
        var confirm = this.alert.create({
            title: 'Elimina Categoria',
            message: "TUTTI I MOVIMENTI CON TALE CATEGORIA SARANNO ELIMINATI. PROCEDERE?",
            cssClass: 'buttonCss',
            buttons: [
                {
                    text: 'Si',
                    handler: function () {
                        _this.catFamService.delete(c.id).subscribe(function () {
                            console.log("Categoria Eliminata");
                            _this.movimentoService.deleteByCatAndFam(c.categoria.id, c.famiglia.id).subscribe(function () { });
                        });
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log("No Clicked");
                    }
                }
            ]
        });
        confirm.present();
    };
    CategoriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorie',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\categorie\categorie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-10 offset-1>\n        <ion-title class="titleWithButton">{{\'CATEGORIE_TAB\'|translate}}</ion-title>\n      </ion-col>\n      <ion-col>\n        <button ion-button (click)="add()" class="Bottone" outline>\n          <ion-icon name="add-circle" ></ion-icon>\n        </button>   \n    </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list >\n    <ion-list-header>{{\'POSITIVO\' | translate}}</ion-list-header>\n    <ion-list *ngFor="let c of categorie" >\n      <ion-item *ngIf="c.categoria.segno == true" clear>\n        <ion-row>\n          <ion-col col-10>\n            <button ion-button block outline (click)="update(c)" class="buttonList">{{c.categoria.nome}}</button>\n          </ion-col>\n          <ion-col col-2>\n            <button ion-button (click)="delete(c)" outline block>\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n    <ion-list-header>{{\'NEGATIVO\' | translate}}</ion-list-header>\n    <ion-list *ngFor="let f of categorie" >\n      <ion-item *ngIf="f.categoria.segno == false" clear>\n        <ion-row>\n          <ion-col col-10>\n            <button ion-button block outline (click)="update(f)" class="buttonList">{{f.categoria.nome}}</button>\n          </ion-col>\n          <ion-col col-2>\n            <button ion-button (click)="delete(f)" outline block>\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\categorie\categorie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__services_catFam_service__["a" /* CatFamService */],
            __WEBPACK_IMPORTED_MODULE_3__services_categoria_service__["a" /* CategoriaService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_movimento_service__["a" /* MovimentoService */]])
    ], CategoriePage);
    return CategoriePage;
}());

//# sourceMappingURL=categorie.js.map

/***/ })

});
//# sourceMappingURL=0.js.map