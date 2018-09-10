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
        //booleano per update o create
        this.inserimento = false;
        // dato da passare al server
        this.c = new __WEBPACK_IMPORTED_MODULE_3__model_catFam_model__["a" /* CatFam */]();
        this.segni = false;
        //categoria per controllo esistenza sul db
        this.cat = new __WEBPACK_IMPORTED_MODULE_2__model_categoria_model__["a" /* Categoria */]();
    }
    CategoriaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CategoriaPage');
        this.inserimento = this.navParams.get("inserimento");
        this.c = this.navParams.get("c");
        //prendo i dati della famiglia
        this.famigliService.getFamiglia().subscribe(function (data) {
            _this.c.famiglia = data;
        });
    };
    CategoriaPage.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            //valore budget per campo vuoto
            if (!this.budgetCat) {
                this.budgetCat = 0;
            }
            //prendo i dati dal form
            this.c.categoria.nome = this.nomeCat;
            this.c.categoria.segno = this.segni;
            this.c.budget = this.budgetCat;
            //controllo se la categoria esiste sul DB
            this.categoriaService.findByNome(this.nomeCat).subscribe(function (data) {
                if (!data) {
                    //se non esiste creo una nuova Categoria
                    console.log("Categoria non esistente");
                    _this.categoriaService.createCategoria(_this.c.categoria).subscribe(function () { });
                    //faccio di nuovo la query perchè non ho l'id della nuova categoria
                    _this.categoriaService.findByNome(_this.nomeCat).subscribe(function (data) {
                        _this.c.categoria = data;
                    });
                }
                else {
                    console.log("Categoria esistente");
                    _this.c.categoria = data;
                }
            });
            console.log(this.c);
            //a questo punto la categoria è nel DB, posso inserire CatFam
            this.catFamService.insert(this.c).subscribe(function () { });
        }
    };
    CategoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoria',template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\pages\categoria\categoria.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <h3 [hidden]="!inserimento">{{\'ADD_CAT\'| translate}}</h3>\n      <h3 [hidden]="inserimento">{{\'UPDATE_CAT\'| translate}}</h3>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="primary-bg">\n  <form #CategoriaForm="ngForm">\n    <ion-list no-lines>\n      <!-------Nome Categoria -------->\n      <ion-item>\n        <ion-label>{{\'CATEGORIA\'|translate}}</ion-label>\n        <ion-input type="text" [(ngModel)]="nomeCat" #nome="ngModel" name="nome" required></ion-input>\n      </ion-item>\n      <p ion-text color="danger" [hidden]="nome.valid" padding-left>{{\'CATEGORY_REQUIRED\'|translate}}</p>\n\n      <!------Segno Categoria ------>\n      <ion-item>\n        <ion-label>{{\'SEGNO\'|translate}}</ion-label>\n        <ion-select name="segno" [(ngModel)]="segni" #segno="ngModel" required\n        okText="{{ \'SAVE_BUTTON\' | translate }}" cancelText="{{ \'CANCEL_BUTTON\' | translate }}" class="buttonCss">\n          <ion-option  [value]="false" >{{\'NEGATIVO\'|translate}}</ion-option>\n          <ion-option [value]="true">{{\'POSITIVO\'|translate}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <p ion-text color="danger" [hidden]="segno.valid" padding-left>{{\'SEGNO_REQUIRED\'|translate}}</p>\n      <ion-item>\n        <ion-label>Budget</ion-label>\n        <ion-input type="number" [(ngModel)]="budgetCat" #budget="ngModel" name="budget"></ion-input>\n      </ion-item>\n      <p ion-text color="danger" [hidden]="budget.valid" padding-left>{{\'BUDGET_REQUIRED\'|translate}}</p>\n    </ion-list>\n    <!-- Submit -->\n    <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button class="button"(click)="onSubmit(CategoriaForm)" type="submit" [disabled]="!CategoriaForm.form.valid" block>{{ \'SAVE_BUTTON\' | translate }}</button>\n        </ion-col>\n        <ion-col>\n          <button class="button" ion-button navPop block>{{\'CANCEL_BUTTON\'|translate}}</button>\n        </ion-col>\n      </ion-row>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\pages\categoria\categoria.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_famiglia_service__["a" /* FamigliaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_famiglia_service__["a" /* FamigliaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_catFam_service__["a" /* CatFamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_catFam_service__["a" /* CatFamService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_categoria_service__["a" /* CategoriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_categoria_service__["a" /* CategoriaService */]) === "function" && _e || Object])
    ], CategoriaPage);
    return CategoriaPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=categoria.js.map

/***/ })

});
//# sourceMappingURL=1.js.map