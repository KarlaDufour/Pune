webpackJsonp([5],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__temp_temp__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nivel_nivel__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presion_presion__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__temp_temp__["a" /* TempPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__nivel_nivel__["a" /* NivelPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__presion_presion__["a" /* PresionPage */];
        this.currentUser = this.navParams.get('user');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.openModal = function () {
        this.navCtrl.push('ConfigPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-title>{{loginUser}}</ion-title>\n      <ion-buttons end><button ion-button (click)="openModal()">\n          <ion-icon name="settings"></ion-icon>\n        </button></ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs>\n      <ion-tab [root]="tab1Root" tabTitle="Temperatura"></ion-tab>\n      <ion-tab [root]="tab2Root" tabTitle="Nivel"></ion-tab>\n      <ion-tab [root]="tab3Root" tabTitle="Presion"></ion-tab>\n    </ion-tabs>\n</ion-content>'/*ion-inline-end:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(131);
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
    function LoginPage(navCtrl, navParams, formBuilder, afAuth, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.LoginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            correo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email])),
            contra: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6)]))
        });
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var email = this.LoginForm.value.correo;
        var pass = this.LoginForm.value.contra;
        var currentUser;
        var loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        loader.present();
        this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(function (result) {
            loader.dismiss();
            currentUser = result.user.uid;
            window.localStorage.setItem('CurrentUser', currentUser);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\login\login.html"*/'<ion-content padding>\n\n\n  <ion-list>\n    <form [formGroup]="LoginForm" (ngSubmit)="login()">\n      <ion-item class="no-lines">\n        <h1>Iniciar Sesión</h1>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Correo</ion-label>\n        <ion-input type="text" formControlName="correo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input type="password" formControlName="contra"></ion-input>\n      </ion-item>\n      <br><br>\n      <button ion-button round block outline type="submit" [disabled]="!LoginForm.valid">\n        Entrar\n      </button>\n    </form>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TempPage = /** @class */ (function () {
    function TempPage(navCtrl, navParams, angularDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularDB = angularDB;
        this.tempRef = angularDB.list('sensor', function (ref) { return ref.limitToLast(1); }).valueChanges();
        this.tempRef.subscribe(function (dato) {
            dato.map(function (temp) {
                console.log('S1: ' + temp.temp);
                _this.lastTemp = temp.temp;
            });
        });
        this.tempRef = angularDB.list('sensor2', function (ref) { return ref.limitToLast(1); }).valueChanges();
        this.tempRef.subscribe(function (dato) {
            dato.map(function (temp) {
                console.log('S2: ' + temp.temp);
                _this.lastTemp2 = temp.temp;
            });
        });
        this.tempRef = angularDB.list('sensor3', function (ref) { return ref.limitToLast(1); }).valueChanges();
        this.tempRef.subscribe(function (dato) {
            dato.map(function (temp) {
                console.log('S3: ' + temp.temp);
                _this.lastTemp3 = temp.temp;
            });
        });
    }
    ;
    ;
    TempPage.prototype.ionViewDidLoad = function () {
    };
    TempPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-temp',template:/*ion-inline-start:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\temp\temp.html"*/'<ion-content>\n\n  <ion-grid>\n    <ion-row class="Row">\n\n        <ion-card class="content" style="background:#55F050" (click)="status1()">\n          <ion-card-content> \n              <h1 style="font-size: 15vw;">{{lastTemp}}°C</h1>\n              <h1 text-right>Sensor 1</h1>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class="content" (click)="status2()">\n          <ion-card-content>\n              <h1 style="font-size: 15vw;">{{lastTemp2}}°C</h1>\n              <h1 text-right>Sensor 2</h1>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card class="content" style="background:#F0E434" (click)="status3()">\n          <ion-card-content >\n              <h1 style="font-size: 15vw;">{{lastTemp3}}°C</h1>\n              <h1 text-right>Sensor 3</h1>\n          </ion-card-content>\n        </ion-card>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\temp\temp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], TempPage);
    return TempPage;
}());

//# sourceMappingURL=temp.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NivelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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
 * Generated class for the NivelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NivelPage = /** @class */ (function () {
    function NivelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NivelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NivelPage');
    };
    NivelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nivel',template:/*ion-inline-start:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\nivel\nivel.html"*/'<ion-content padding>\n  <h1>Nivel del agua</h1>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\nivel\nivel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NivelPage);
    return NivelPage;
}());

//# sourceMappingURL=nivel.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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
 * Generated class for the PresionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PresionPage = /** @class */ (function () {
    function PresionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PresionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PresionPage');
    };
    PresionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-presion',template:/*ion-inline-start:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\presion\presion.html"*/'<ion-content padding>\n  <h1>Presion</h1>\n</ion-content>'/*ion-inline-end:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\pages\presion\presion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PresionPage);
    return PresionPage;
}());

//# sourceMappingURL=presion.js.map

/***/ }),

/***/ 197:
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
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/config/config.module": [
		498,
		0
	],
	"../pages/login/login.module": [
		499,
		4
	],
	"../pages/nivel/nivel.module": [
		500,
		3
	],
	"../pages/presion/presion.module": [
		501,
		2
	],
	"../pages/temp/temp.module": [
		502,
		1
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
webpackAsyncContext.id = 238;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(426);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_temp_temp__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_nivel_nivel__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_presion_presion__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var config = {
    apiKey: "AIzaSyB4vEP-vHOlmILDK8-tG6J5RDvUgCFeGHk",
    authDomain: "proyectoune-b3ff3.firebaseapp.com",
    databaseURL: "https://proyectoune-b3ff3.firebaseio.com",
    projectId: "proyectoune-b3ff3",
    storageBucket: "proyectoune-b3ff3.appspot.com",
    messagingSenderId: "586330331937"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_temp_temp__["a" /* TempPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nivel_nivel__["a" /* NivelPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_presion_presion__["a" /* PresionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nivel/nivel.module#NivelPageModule', name: 'NivelPage', segment: 'nivel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/presion/presion.module#PresionPageModule', name: 'PresionPage', segment: 'presion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/temp/temp.module#TempPageModule', name: 'TempPage', segment: 'temp', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_fire__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_fire_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_temp_temp__["a" /* TempPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nivel_nivel__["a" /* NivelPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_presion_presion__["a" /* PresionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(155);
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
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            var currentUser = window.localStorage.getItem("CurrentUser");
            if (currentUser) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Karla Dufour\Downloads\Nueva carpeta\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map