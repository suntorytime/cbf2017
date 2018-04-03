webpackJsonp([0],{

/***/ 251:
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
webpackEmptyAsyncContext.id = 251;

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Schedule" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Social" tabIcon="md-share"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/tabs/tabs.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dataservice__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__first_sat_first_sat__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firstsun_firstsun__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__secsat_secsat__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__secsun_secsun__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, dataservice) {
        this.navCtrl = navCtrl;
        this.dataservice = dataservice;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getEvents();
    };
    ;
    HomePage.prototype.getEvents = function () {
        var _this = this;
        this.dataservice.getEvents().subscribe(function (data) {
            _this.foundEvents = __WEBPACK_IMPORTED_MODULE_8_lodash__["sortBy"](data.json(), 'startat');
        }, function (err) { return console.error(err); }, function () { return console.log('getEvents completed'); });
    };
    ;
    HomePage.prototype.getSaturday = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__first_sat_first_sat__["a" /* FirstSatPage */], { list: this.foundEvents });
    };
    ;
    HomePage.prototype.getSunday = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__firstsun_firstsun__["a" /* FirstsunPage */], { list: this.foundEvents });
    };
    ;
    HomePage.prototype.getSecSat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__secsat_secsat__["a" /* SecsatPage */], { list: this.foundEvents });
    };
    ;
    HomePage.prototype.getSecSun = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__secsun_secsun__["a" /* SecsunPage */], { list: this.foundEvents });
    };
    ;
    HomePage.prototype.goToDetails = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], { event: event });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card (click)="getSaturday()">\n    <img src="assets/cherrybg.jpg"/>\n    <div class="card-title">Saturday</div>\n    <div class="card-subtitle">April 14, 2018</div>\n  </ion-card>\n\n  <ion-card (click)="getSunday()">\n    <img src="assets/shodobg.jpg"/>\n    <div class="card-title">Sunday</div>\n    <div class="card-subtitle">April 15, 2018</div>\n  </ion-card>\n\n  <ion-card (click)="getSecSat()">\n    <img src="assets/bridgebg.jpg"/>\n    <div class="card-title">Saturday</div>\n    <div class="card-subtitle">April 21, 2018</div>\n  </ion-card>\n\n  <ion-card (click)="getSecSun()">\n    <img src="assets/toribg.jpg"/>\n    <div class="card-title">Sunday</div>\n    <div class="card-subtitle">April 22, 2018</div>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_dataservice__["a" /* Dataservice */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_dataservice__["a" /* Dataservice */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dataservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dataservice = (function () {
    function Dataservice(http) {
        this.http = http;
        console.log('Hello Dataservice Provider');
    }
    Dataservice.prototype.getEvents = function () {
        var events = this.http.get('https://sfcherryblossom.org/wp-content/uploads/2018/ScheduleData/NCCBFSchedule.json');
        console.log(events);
        return events;
    };
    Dataservice.prototype.getDetails = function (event) {
        return this.http.get("" + event.url);
    };
    Dataservice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Dataservice);
    return Dataservice;
}());
//# sourceMappingURL=dataservice.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstSatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirstSatPage = (function () {
    function FirstSatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](navParams.get('list'), "startat").filter(function (item) {
            if (new Date(item.startat).getDate() == 14)
                return item;
        });
    }
    FirstSatPage.prototype.goToDetails = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { event: event });
    };
    FirstSatPage.prototype.ionViewDidLoad = function () {
    };
    FirstSatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-first-sat',template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/first-sat/first-sat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Saturday</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>Saturday April 14, 2018</p>\n\n <ion-list>\n   <ion-item *ngFor="let event of list" (click)="goToDetails(event)">\n     <ion-avatar item-left>\n       <img onError="this.src=\'assets/icon-2018.jpg\'" src="https://sfcherryblossom.org/wp-content/uploads/2017/ScheduleData/Images/{{event.imagename}}">\n     </ion-avatar>\n     <h2>{{event.name}}</h2>\n     <p>{{ event.startat | date: \'shortTime\' }} to {{ event.endat | date: \'shortTime\'}}</p>\n   </ion-item>\n </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/first-sat/first-sat.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], FirstSatPage);
    return FirstSatPage;
}());
//# sourceMappingURL=first-sat.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstsunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirstsunPage = (function () {
    function FirstsunPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](navParams.get('list'), "startat").filter(function (item) {
            if (new Date(item.startat).getDate() == 15)
                return item;
        });
    }
    FirstsunPage.prototype.goToDetails = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { event: event });
    };
    FirstsunPage.prototype.ionViewDidLoad = function () {
    };
    FirstsunPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-firstsun',template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/firstsun/firstsun.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sunday</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>Sunday April 15, 2018</p>\n\n <ion-list>\n   <ion-item *ngFor="let event of list" (click)="goToDetails(event)">\n     <ion-avatar item-left>\n       <img onError="this.src=\'assets/icon-2018.jpg\'" src="https://sfcherryblossom.org/wp-content/uploads/2017/ScheduleData/Images/{{event.imagename}}">\n     </ion-avatar>\n     <h2>{{event.name}}</h2>\n     <p>{{ event.startat | date: \'shortTime\' }} to {{ event.endat | date: \'shortTime\'}}</p>\n   </ion-item>\n </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/firstsun/firstsun.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], FirstsunPage);
    return FirstsunPage;
}());
//# sourceMappingURL=firstsun.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecsatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SecsatPage = (function () {
    function SecsatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](navParams.get('list'), "startat").filter(function (item) {
            if (new Date(item.startat).getDate() == 21)
                return item;
        });
    }
    SecsatPage.prototype.goToDetails = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { event: event });
    };
    SecsatPage.prototype.ionViewDidLoad = function () {
    };
    SecsatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-secsat',template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/secsat/secsat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Saturday</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>Saturday April 21, 2017</p>\n\n <ion-list>\n   <ion-item *ngFor="let event of list" (click)="goToDetails(event)">\n     <ion-avatar item-left>\n       <img onError="this.src=\'assets/icon-2018.jpg\'" src="https://sfcherryblossom.org/wp-content/uploads/2017/ScheduleData/Images/{{event.imagename}}">\n     </ion-avatar>\n     <h2>{{event.name}}</h2>\n     <p>{{ event.startat | date: \'shortTime\' }} to {{ event.endat | date: \'shortTime\'}}</p>\n   </ion-item>\n </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/secsat/secsat.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SecsatPage);
    return SecsatPage;
}());
//# sourceMappingURL=secsat.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecsunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SecsunPage = (function () {
    function SecsunPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](navParams.get('list'), "startat").filter(function (item) {
            if (new Date(item.startat).getDate() == 22)
                return item;
        });
    }
    SecsunPage.prototype.goToDetails = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { event: event });
    };
    SecsunPage.prototype.ionViewDidLoad = function () {
    };
    SecsunPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-secsun',template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/secsun/secsun.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sunday</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<p>Sunday April 22, 2017</p>\n\n <ion-list>\n   <ion-item *ngFor="let event of list" (click)="goToDetails(event)">\n     <ion-avatar item-left>\n       <img onError="this.src=\'assets/icon-2018.jpg\'" src="https://sfcherryblossom.org/wp-content/uploads/2017/ScheduleData/Images/{{event.imagename}}">\n     </ion-avatar>\n     <h2>{{event.name}}</h2>\n     <p>{{ event.startat | date: \'shortTime\' }} to {{ event.endat | date: \'shortTime\'}}</p>\n   </ion-item>\n </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/secsun/secsun.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], SecsunPage);
    return SecsunPage;
}());
//# sourceMappingURL=secsun.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="about-header">\n    <img src="assets/2018-masthead.jpg"/>\n  </div>\n  <!-- <h2>Northern California Cherry Blossom Festival</h2> -->\n  <p>Welcome to the Northern California Cherry Blossom Festival®, one of California’s most prominent celebrations of Asian traditions and the biggest on the West coast. Starting in 1968, the festival serves to cultivate the continued alliance between Japan and United States using culture as its bridge.</p>\n  <p>Each year, over 200,000 people attend this dazzling display showcasing the color and grace of the Japanese culture and the diversity of the Japanese American Community. We expect this year to be filled with special events and new attractions.</p>\n  <p>This year’s Northern California Cherry Blossom Festival will be held on Saturday and Sunday, April 14-15 and April 21-22, 2018. All are welcome to join in the festivities as we celebrate Japanese and Japanese American culture in San Francisco’s Japantown!</p>\n  <p>The festival will be held within the borders of Laguna and Fillmore Streets and Geary Boulevard. There will be food booths, cultural performances, martial arts, live bands, the annual Queen Program, and more. The Grand Parade will be held on Sunday, April 22, beginning at 1pm starting from City Hall and concluding in Japantown.</p>\n  <p>Please join us and become a sponsor, volunteer or visitor of this popular Japanese American community event. The event is free and open to the public. Vendors will be charging for their food goods and some retail products; and some specialized events will require a fee.</p>\n\n</ion-content>'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/about/about.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Social\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us</ion-list-header>\n    <a href="https://twitter.com/search?q=%23nccbf50" STYLE="text-decoration: none">\n      <ion-item>\n        <ion-icon name="logo-twitter" item-left></ion-icon>\n          #nccbf51\n      </ion-item>\n    </a>\n    <a href="https://twitter.com/NC_CBF" STYLE="text-decoration: none">\n      <ion-item>\n        <ion-icon name="logo-twitter" item-left></ion-icon>\n          @NC_CBF\n      </ion-item>\n    </a>\n    <a href="https://www.facebook.com/NCCBF" STYLE="text-decoration: none">\n      <ion-item>\n        <ion-icon name="logo-facebook" item-left></ion-icon>\n        Facebook Page\n      </ion-item>\n    </a>\n    <a href="https://www.youtube.com/channel/UC4CuUyl10eVSvRvAA3jMFHg" STYLE="text-decoration: none">\n      <ion-item>\n        <ion-icon name="logo-youtube" item-left></ion-icon>\n        Youtube\n      </ion-item>\n    </a>\n    <a href="https://www.instagram.com/nc_cbf/" STYLE="text-decoration: none">\n      <ion-item>\n        <ion-icon name="logo-instagram" item-left></ion-icon>\n        Instagram\n      </ion-item>\n    </a>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/contact/contact.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(491);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_first_sat_first_sat__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_firstsun_firstsun__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_secsat_secsat__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_secsun_secsun__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_pipes__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_first_sat_first_sat__["a" /* FirstSatPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_firstsun_firstsun__["a" /* FirstsunPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_secsat_secsat__["a" /* SecsatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_secsun_secsun__["a" /* SecsunPage */],
                __WEBPACK_IMPORTED_MODULE_14_angular_pipes__["a" /* EncodeURIComponentPipe */],
                __WEBPACK_IMPORTED_MODULE_14_angular_pipes__["b" /* SlugifyPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_first_sat_first_sat__["a" /* FirstSatPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_firstsun_firstsun__["a" /* FirstsunPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_secsat_secsat__["a" /* SecsatPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_secsun_secsun__["a" /* SecsunPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/app/app.html"*/,
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dataservice__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, dataservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataservice = dataservice;
        this.description = "";
        this.event = navParams.get('event');
        this.dataservice.getDetails(this.event).subscribe(function (data) { return _this.description = data.text(); }, function (err) {
            if (err.status == 404) {
                _this.description = "This event does not have a description";
            }
            else {
                console.error(err);
            }
        }, function () { return console.log('getDetails completed'); });
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/steven/dev/cbf2017/src/pages/details/details.html"*/'<!--\n  Generated template for the Details page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{event.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <img onError="this.src=\'assets/icon-2018.jpg\'" src="https://sfcherryblossom.org/wp-content/uploads/2017/ScheduleData/Images/{{event.imagename}}">\n    <ion-card-content>\n      <ion-card-title>\n        {{event.name}}\n        </ion-card-title>\n        <p class="event-category">{{event.category}}</p>\n        <p><b>Date:</b> {{event.startat | date:\'fullDate\'}}</p>\n        <p><b>Time:</b> {{event.startat | date:\'h:mma\'}} to {{event.endat | date:\'h:mma\'}}</p>\n        <p><b>Location:</b> {{event.location}} <br>\n        </p>\n        <br>\n        <p>{{event.details}}</p>\n    </ion-card-content>\n    \n    <ion-row>\n      <ion-col>\n        <a href="https://www.google.com/maps/search/?api=1&query={{ event.location | slugify }}">\n          <button ion-button icon-left clear small>\n            <ion-icon name="md-navigate"></ion-icon>\n            <div>{{event.location}}</div>\n          </button>\n        </a>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/steven/dev/cbf2017/src/pages/details/details.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_dataservice__["a" /* Dataservice */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dataservice__["a" /* Dataservice */]])
    ], DetailsPage);
    return DetailsPage;
}());
//# sourceMappingURL=details.js.map

/***/ })

},[389]);
//# sourceMappingURL=main.js.map