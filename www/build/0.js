webpackJsonp([0],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(503);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigPageModule = /** @class */ (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigPage */]),
            ],
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());

//# sourceMappingURL=config.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
    };
    ConfigPage.prototype.CloseSesion = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Cerrar Sesión',
            message: 'Estás seguro que deseas cerrar sesión',
            buttons: [
                {
                    text: 'Disagree'
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\config\config.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title center>Opciones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item>\n      <h2>Temperatura</h2>\n    </button>\n    <button ion-item>\n      <h2>Presión</h2>\n    </button>\n    <button ion-item>\n      <h2>Notificaciones</h2>\n    </button>\n    <button ion-item>\n      <h2>Ayuda</h2>\n    </button>\n    <button ion-item>\n      <h2>Información</h2>\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Inicio de Sesión\n    </ion-list-header>\n    <button ion-item style="color:cadetblue" (click)="CloseSesion()">Cerrar Sesión</button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ })

});
//# sourceMappingURL=0.js.map