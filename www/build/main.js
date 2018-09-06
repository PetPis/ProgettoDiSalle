webpackJsonp([10],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinguaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinguaService = /** @class */ (function () {
    function LinguaService(storage) {
        this.storage = storage;
        this.italiano = { etichetta: "Italiano", valore: "it", currency: "EUR" };
        this.lingue = [this.italiano, { etichetta: "Italiano", valore: "itUSD", currency: "USD" }, { etichetta: "English", valore: "enUSD", currency: "USD" },
            { etichetta: "English", valore: "en", currency: "EUR" }];
    }
    LinguaService.prototype.getLinguaAttuale = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__["fromPromise"])(this.storage.get(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* LINGUA */]));
    };
    LinguaService.prototype.getLinguaPreferita = function () {
        return this.italiano.valore;
    };
    LinguaService.prototype.getLingue = function () {
        return this.lingue;
    };
    LinguaService.prototype.updateLingua = function (nuovaLingua) {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* LINGUA */], nuovaLingua);
    };
    LinguaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LinguaService);
    return LinguaService;
}());

//# sourceMappingURL=lingua.services.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categoria/categoria.module": [
		305,
		1
	],
	"../pages/categorie/categorie.module": [
		306,
		0
	],
	"../pages/impostazioni/impostazioni.module": [
		307,
		9
	],
	"../pages/info/info.module": [
		308,
		8
	],
	"../pages/login/login.module": [
		309,
		4
	],
	"../pages/movimenti/movimenti.module": [
		310,
		3
	],
	"../pages/movimento/movimento.module": [
		311,
		2
	],
	"../pages/profilo/profilo.module": [
		312,
		7
	],
	"../pages/registrazione/registrazione.module": [
		313,
		6
	],
	"../pages/tabs/tabs.module": [
		314,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TABS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MOVIMENTI_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CATEGORIE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IMPOSTAZIONI_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PROFILO_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return INFO_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MOVIMENTO_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REGISTRAZIONE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIA_PAGE; });
var LOGIN_PAGE = 'LoginPage';
var TABS_PAGE = 'TabsPage';
var MOVIMENTI_PAGE = 'MovimentiPage';
var CATEGORIE_PAGE = 'CategoriePage';
var IMPOSTAZIONI_PAGE = 'ImpostazioniPage';
var PROFILO_PAGE = 'ProfiloPage';
var INFO_PAGE = 'InfoPage';
var MOVIMENTO_PAGE = 'MovimentoPage';
var REGISTRAZIONE_PAGE = "RegistrazionePage";
var CATEGORIA_PAGE = "CategoriaPage";
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriaService = /** @class */ (function () {
    function CategoriaService(http) {
        this.http = http;
    }
    CategoriaService.prototype.list = function () {
        var categorieUrl = "" + __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].CATEGORIA;
        return this.http.get(categorieUrl);
    };
    CategoriaService.prototype.findByNome = function (nome) {
        var apiURL = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].CATEGORIA + "/nome/" + nome;
        return this.http.get(apiURL);
    };
    CategoriaService.prototype.findById = function (categoriaId) {
        var apiURL = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].CATEGORIA + "/" + categoriaId;
        return this.http.get(apiURL);
    };
    CategoriaService.prototype.createCategoria = function (categoria) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].CATEGORIA, categoria);
    };
    CategoriaService.prototype.updateCategoria = function (categoria) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].CATEGORIA, categoria);
    };
    CategoriaService.prototype.deleteCategoria = function (categoria) {
        var deleteUrl = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].CATEGORIA + "/" + categoria.id;
        return this.http.delete(deleteUrl);
    };
    CategoriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], CategoriaService);
    return CategoriaService;
}());

//# sourceMappingURL=categoria.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovimentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovimentoService = /** @class */ (function () {
    function MovimentoService(http) {
        this.http = http;
    }
    MovimentoService.prototype.list = function () {
        var movimentiUrl = "" + __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].MOVIMENTI;
        return this.http.get(movimentiUrl);
    };
    MovimentoService.prototype.findById = function (movimentoId) {
        var apiURL = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].MOVIMENTI + "/" + movimentoId;
        return this.http.get(apiURL);
    };
    MovimentoService.prototype.createMovimento = function (movimento) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].MOVIMENTI, movimento);
    };
    MovimentoService.prototype.deleteMovimento = function (movimento) {
        var deleteUrl = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].MOVIMENTI + "/" + movimento.id;
        return this.http.delete(deleteUrl);
    };
    MovimentoService.prototype.updateMovimento = function (movimento) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].MOVIMENTI, movimento);
    };
    MovimentoService.prototype.findByCategoriaId = function (id) {
        var movURL = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].MOVIMENTI + "/list/" + id;
        return this.http.get(movURL);
    };
    MovimentoService.prototype.deleteByCategoriaId = function (id) {
        var del = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].MOVIMENTI + "/delete/" + id;
        return this.http.delete(del);
    };
    MovimentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], MovimentoService);
    return MovimentoService;
}());

//# sourceMappingURL=movimento.service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamigliaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FamigliaService = /** @class */ (function () {
    function FamigliaService(http) {
        this.http = http;
    }
    FamigliaService.prototype.getFamigliaById = function (id) {
        var famigliaURL = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].FAMIGLIA + "/idFam/" + id;
        return this.http.get(famigliaURL);
    };
    FamigliaService.prototype.getFamigliaByNome = function (nome) {
        var famigliaURL = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].FAMIGLIA + "/nomeFam/" + nome;
        return this.http.get(famigliaURL);
    };
    FamigliaService.prototype.getFamiglia = function () {
        var famigliaURL = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].FAMIGLIA + "/nomeFam";
        return this.http.get(famigliaURL);
    };
    FamigliaService.prototype.createFamiglia = function (famiglia) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* URL */].FAMIGLIA, famiglia);
    };
    FamigliaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], FamigliaService);
    return FamigliaService;
}());

//# sourceMappingURL=famiglia.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatFamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatFamService = /** @class */ (function () {
    function CatFamService(http) {
        this.http = http;
    }
    CatFamService.prototype.list = function () {
        var listURL = "" + __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* URL */].CATFAM;
        return this.http.get(listURL);
    };
    CatFamService.prototype.insert = function (c) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__constants__["c" /* URL */].CATFAM, c);
    };
    CatFamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CatFamService);
    return CatFamService;
}());

//# sourceMappingURL=catFam.service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_rxjs_operators__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_lingua_services__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_utente_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interceptors__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_movimento_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_categoria_service__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_famiglia_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_catFam_service__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'savemymoney__db',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categoria/categoria.module#CategoriaPageModule', name: 'CategoriaPage', segment: 'categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categorie/categorie.module#CategoriePageModule', name: 'CategoriePage', segment: 'categorie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/impostazioni/impostazioni.module#ImpostazioniPageModule', name: 'ImpostazioniPage', segment: 'impostazioni', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movimenti/movimenti.module#MovimentiPageModule', name: 'MovimentiPage', segment: 'movimenti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movimento/movimento.module#MovimentoPageModule', name: 'MovimentoPage', segment: 'movimento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilo/profilo.module#ProfiloPageModule', name: 'ProfiloPage', segment: 'profilo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrazione/registrazione.module#RegistrazionePageModule', name: 'RegistrazionePage', segment: 'registrazione', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__interceptors__["a" /* httpInterceptorProviders */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__services_lingua_services__["a" /* LinguaService */],
                __WEBPACK_IMPORTED_MODULE_12__services_utente_service__["a" /* UtenteService */],
                __WEBPACK_IMPORTED_MODULE_15__services_categoria_service__["a" /* CategoriaService */],
                __WEBPACK_IMPORTED_MODULE_14__services_movimento_service__["a" /* MovimentoService */],
                __WEBPACK_IMPORTED_MODULE_17__services_famiglia_service__["a" /* FamigliaService */],
                __WEBPACK_IMPORTED_MODULE_18__services_catFam_service__["a" /* CatFamService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);



// Observable class extensions
// Observable operators
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/mergeMap';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged'; 
//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USE_PROXY */
/* unused harmony export URL_BASE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return X_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UTENTE_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LINGUA; });
/* unused harmony export VALUTA */
var USE_PROXY = true;
var URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/savemymoney/api';
var URL = {
    LOGIN: URL_BASE + "/login",
    REGISTRAZIONE: URL_BASE + "/registrazione",
    MOVIMENTI: URL_BASE + "/movimenti",
    UPDATE_PROFILO: URL_BASE + "/utente/updateprofilo",
    CATEGORIA: URL_BASE + "/categorie",
    FAMIGLIA: URL_BASE + "/famiglia",
    CATFAM: URL_BASE + "/famCat"
};
var X_AUTH = "X-Auth";
var AUTH_TOKEN = "auth-token";
var UTENTE_STORAGE = "utente";
var LINGUA = 'lingua';
var VALUTA = 'valuta';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_lingua_services__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_utente_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(events, translate, platform, menu, alertCtrl, statusBar, splashScreen, utenteService, linguaService) {
        var _this = this;
        this.events = events;
        this.translate = translate;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.utenteService = utenteService;
        this.linguaService = linguaService;
        console.log("constructor MyApp");
        this.initTranslate();
        this.subscribeToEvents();
        platform.ready().then(function () {
            utenteService.getUtente().subscribe(function (utente) {
                if (utente != null) {
                    _this.utente = utente;
                    _this.enableMenu(true);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["j" /* TABS_PAGE */];
                }
                else {
                    _this.enableMenu(false);
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_pages__["e" /* LOGIN_PAGE */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        var linguaPreferita = this.linguaService.getLinguaPreferita();
        this.translate.setDefaultLang(linguaPreferita);
        this.linguaService.getLinguaAttuale().subscribe(function (lingua) {
            if (lingua != null) {
                _this.translate.use(lingua);
            }
            else {
                _this.translate.use(linguaPreferita);
                _this.linguaService.updateLingua(linguaPreferita);
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    MyApp.prototype.logout = function () {
        this.utenteService.logout();
        this.enableMenu(false);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["e" /* LOGIN_PAGE */]);
    };
    MyApp.prototype.subscribeToEvents = function () {
        var _this = this;
        this.events.subscribe('login', function (utente) {
            _this.utente = utente;
            _this.enableMenu(true);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["j" /* TABS_PAGE */]);
        });
        this.events.subscribe('server-error', function (err) {
            _this.showMessageServerError(err);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn);
    };
    MyApp.prototype.showMessageServerError = function (err) {
        var _this = this;
        var errorMessage = "Errore nel server";
        switch (err.status) {
            case 403:
                errorMessage = "Utente non autorizzato";
                break;
            case 401:
                errorMessage = "Utente non autenticato";
                break;
            default:
                errorMessage = "Errore: " + err.status;
        }
        var alert = this.alertCtrl.create({
            title: "Errore",
            subTitle: errorMessage,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.utenteService.logout();
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_pages__["e" /* LOGIN_PAGE */]);
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Marco\Desktop\ccc\src\app\app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>       \n'/*ion-inline-end:"C:\Users\Marco\Desktop\ccc\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__services_utente_service__["a" /* UtenteService */], __WEBPACK_IMPORTED_MODULE_6__services_lingua_services__["a" /* LinguaService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpInterceptorProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_interceptor__ = __webpack_require__(304);
/* "Barrel" of Http Interceptors */


/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_1__token_interceptor__["a" /* TokenInterceptor */], multi: true }
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utente_service__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(events, utenteService) {
        this.events = events;
        this.utenteService = utenteService;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // Get the auth token from the service.
        var authToken = this.utenteService.getUtenteToken();
        if (authToken != undefined && authToken != "") {
            console.log("adding token into header");
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            var authReq = req.clone({
                headers: req.headers.set(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* X_AUTH */], authToken)
            });
            // send cloned request with header to the next handler.
            return next.handle(authReq).do(function () { }, function (error) {
                if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                    _this.events.publish("server-error", error);
                }
            });
        }
        else {
            return next.handle(req);
        }
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__services_utente_service__["a" /* UtenteService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

//# sourceMappingURL=token.interceptor.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtenteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UtenteService = /** @class */ (function () {
    function UtenteService(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.storage.get(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* AUTH_TOKEN */]).then(function (token) {
            _this.tokenUtente = token;
        });
    }
    UtenteService.prototype.login = function (account) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* URL */].LOGIN, account, { observe: 'response' })
            .map(function (resp) {
            var token = resp.headers.get(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* X_AUTH */]);
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* AUTH_TOKEN */], token);
            _this.tokenUtente = token;
            //Utente memorizzato nello storage in modo tale che se si vuole cambiare il
            //profilo dell'utente stesso non si fa una chiamata REST. 
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_4__constants__["d" /* UTENTE_STORAGE */], resp.body);
            return resp.body;
        });
    };
    UtenteService.prototype.logout = function () {
        this.tokenUtente = "";
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* AUTH_TOKEN */]);
        this.storage.remove(__WEBPACK_IMPORTED_MODULE_4__constants__["d" /* UTENTE_STORAGE */]);
        //Nessuna chiamata al server perche' JWT e' stateless quindi non prevede alcun logout.
        //Per gestirlo si dovrebbe fare lato server una blacklist.
    };
    UtenteService.prototype.getUtente = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_fromPromise__["fromPromise"])(this.storage.get(__WEBPACK_IMPORTED_MODULE_4__constants__["d" /* UTENTE_STORAGE */]));
    };
    UtenteService.prototype.getUtenteToken = function () {
        return this.tokenUtente;
    };
    UtenteService.prototype.updateProfilo = function (nuovoUtente) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* URL */].UPDATE_PROFILO, nuovoUtente, { observe: 'response' })
            .map(function (resp) {
            //Aggiornamento dell'utente nello storage.
            //Utente memorizzato nello storage per evitare chiamata REST quando si vuole modificare il profilo
            //e se l'utente chiude la app e la riapre i dati sono gia' presenti
            _this.storage.set(__WEBPACK_IMPORTED_MODULE_4__constants__["d" /* UTENTE_STORAGE */], resp.body);
            return resp.body;
        });
    };
    UtenteService.prototype.register = function (utente) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* URL */].REGISTRAZIONE, utente);
    };
    UtenteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UtenteService);
    return UtenteService;
}());

//# sourceMappingURL=utente.service.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map