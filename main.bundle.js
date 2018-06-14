webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav{background-color:dimgrey;background-image:url(" + escape(__webpack_require__("../../../../../src/assets/images/js-jumbo.png")) + ");background-size:cover;background-position-y:15%;color:black;z-index:1}\r\nnav .main-nav{opacity:0;height:100px}nav .main-nav .brand-logo{width:230px}nav .main-nav .brand-logo h1{display:inline-block;margin:0;position:relative;left:20px}\r\nnav .main-nav .js-icon{position:relative;top:23px}nav .animated-main-nav{animation-name:bounceInDown;animation-duration:.7s;animation-delay:.1s}@keyframes bounceInDown{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}\r\n0%{opacity:0;transform:translate3d(0,-3000px,0)}\r\n60%{opacity:1;transform:translate3d(0,25px,0)}\r\n75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}\r\nto{transform:none}}nav .nav-jumbo{color:white;margin-top:200px;text-align:center;width:100%}\r\nnav .nav-jumbo i{display:inline-block;font-size:3em;margin-right:5px;position:relative;top:5px}\r\nnav .nav-jumbo h2{display:inline-block}nav #btn-ul{margin-right:10px}nav #backBtn{width:210px;padding-left:15px;padding-right:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\r\nnav.index{transition:height 1s ease}nav.index #btn-ul{display:none}\r\nnav.newpage{transition:height 1s ease}nav.newpage .nav-jumbo{display:none}\r\nnav.newpage #btn-ul{display:block}#main-content{-ms-flex:1 0 auto;flex:1 0 auto}\r\n#wrapper{height:100%;width:100%;display:-ms-flexbox;display:flex;min-height:100vh;-ms-flex-direction:column;flex-direction:column;background-color:rgba(243,237,216,0.3)}\r\na{outline-style:none}.page-footer{padding-top:0;background-color:#333}.page-footer h5{display:inline-block}\r\n.page-footer h5[data-name='cdn']{position:relative;left:7px}.page-footer h5[data-name='search-app']{position:relative;right:7px}\r\n.page-footer .brand-move{opacity:0}.page-footer .brand-move-animated{display:inline-block;animation-name:bounceInLeftMove;animation-duration:.7s;animation-delay:.1s}\r\n.page-footer .brand-static-animated{display:inline-block;animation-name:bounceInLeftStatic;animation-duration:.7s;animation-delay:.1s}\r\n.page-footer .links-move{opacity:0}.page-footer .links-move-animated{display:inline-block;animation-name:bounceInRightMove;animation-duration:.7s;animation-delay:.1s}\r\n.page-footer .links-static-animated{display:inline-block;animation-name:bounceInRightStatic;animation-duration:.7s;animation-delay:.1s}\r\n.page-footer .motto-move{opacity:0}.page-footer .motto-move-animated{display:inline-block;animation-name:bounceInLeftMove;animation-duration:.7s;animation-delay:.1s}\r\n.page-footer .motto-static-animated{display:inline-block;animation-name:bounceInLeftStatic;animation-duration:.7s;animation-delay:.1s}@keyframes bounceInLeftMove{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}\r\n0%{opacity:0;transform:translate3d(-3000px,0,0)}\r\n60%{opacity:1;transform:translate3d(25px,0,0)}\r\n75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}\r\nto{transform:none}}@keyframes bounceInLeftStatic{from,51%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}\r\n0%{transform:translate3d(0,0,0)}\r\n51%{transform:translate3d(0,0,0)}60%{transform:translate3d(25px,0,0)}\r\n75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}\r\nto{transform:none}}@keyframes bounceInRightMove{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}\r\nfrom{opacity:0;transform:translate3d(3000px,0,0)}\r\n60%{opacity:1;transform:translate3d(-25px,0,0)}\r\n75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}\r\nto{transform:none}}@keyframes bounceInRightStatic{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}\r\n0%{transform:translate3d(0,0,0)}\r\n51%{transform:translate3d(0,0,0)}60%{transform:translate3d(-25px,0,0)}\r\n75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}\r\nto{transform:none}}.icons-list{margin-bottom:10px}.footer-brand .js-icon{position:relative;top:14px;right:3px}\r\n.contact-icon{display:inline-block;width:40px;height:40px;background-color:#4f9630;border-radius:100%;margin:10px}\r\n.icons{position:relative;top:10px}.footer-copyright{background-color:#4f9630}.copyright{width:400px;margin:auto;text-align:center;color:white}\r\n.copyright a{color:white;text-decoration:underline}.footer-brand{color:white}@media(max-width:425px){nav.index{height:250px}\r\nnav.index .nav-jumbo{position:relative;bottom:177px}nav.index .nav-jumbo i{font-size:1.8em}\r\nnav.index .nav-jumbo h2{font-size:1.8em}nav.index .brand-logo h1{font-size:1.5em}\r\nnav.index .brand-logo .js-icon{width:80px;height:80px}nav.index.responsive{height:100px}\r\nnav.index.responsive .nav-jumbo{display:none}nav.index.responsive .brand-logo{position:relative;bottom:9px}\r\nnav.index.responsive .brand-logo h1{font-size:1.2em;position:relative;top:2px}nav.index.responsive .brand-logo .js-icon{width:70px;height:70px}\r\nnav.newpage{height:155px}nav.newpage .brand-logo{position:relative;bottom:9px}nav.newpage .brand-logo h1{font-size:1.2em;position:relative;top:2px}\r\nnav.newpage .brand-logo .js-icon{width:70px;height:70px}nav.newpage #btn-ul{position:relative;bottom:20px;right:calc(50% - 95px);margin-right:0;margin-top:2px}\r\nnav.newpage #btn-ul #backBtn{width:190px}}@media(min-width:420px) and (max-width:425px){#btn-ul{position:relative;top:73px}\r\n}@media(min-width:426px) and (max-width:768px){nav.index{height:350px}nav.index .nav-jumbo{position:relative;bottom:140px}\r\nnav.index .nav-jumbo i{font-size:2.2em}nav.index .nav-jumbo h2{font-size:2.2em}nav.index .brand-logo h1{font-size:1.8em;position:relative;bottom:1px}\r\nnav.index .brand-logo .js-icon{width:90px;height:90px}nav.index.responsive{height:135px}\r\nnav.index.responsive .nav-jumbo{display:none}nav.index.responsive .brand-logo h1{font-size:1.7em;position:relative;top:1px}\r\nnav.index.responsive .brand-logo .js-icon{width:85px;height:85px}nav.newpage{height:165px}\r\nnav.newpage .brand-logo{position:relative;bottom:15px}nav.newpage .brand-logo h1{font-size:1.7em;position:relative;top:1px}\r\nnav.newpage .brand-logo .js-icon{width:85px;height:85px}nav.newpage #btn-ul{position:relative;top:82px;right:calc(50% - 105px);margin-right:0;margin-top:2px}\r\n}@media(min-width:426px) and (max-width:439px){nav.newpage #btn-ul{position:relative;top:-30px}\r\n}@media(min-width:769px){nav.newpage{height:140px}nav.newpage .nav-jumbo{display:none}\r\nnav.newpage #btn-ul{position:relative;top:36px}}@media(min-width:769px) and (max-width:1024px){nav.index{height:400px}\r\nnav.index .nav-jumbo{position:relative;bottom:140px}nav.index .nav-jumbo i{font-size:2.5em}\r\nnav.index .nav-jumbo h2{font-size:2.5em}nav.index.responsive{height:140px}nav.index.responsive .nav-jumbo{display:none}\r\n}@media(min-width:1025px) and (max-width:1366px){nav.index{height:430px}nav.index .nav-jumbo{position:relative;bottom:120px}\r\nnav.index .nav-jumbo i{font-size:2.5em}nav.index .nav-jumbo h2{font-size:2.5em}nav.index.responsive{height:140px}\r\nnav.index.responsive .nav-jumbo{display:none}}@media(min-width:1367px) and (max-width:1600px){nav.index{height:500px}\r\nnav.index .nav-jumbo{position:relative;bottom:85px}nav.index .nav-jumbo i{font-size:2.7em}\r\nnav.index .nav-jumbo h2{font-size:2.7em}nav.index.responsive{height:140px}nav.index.responsive .nav-jumbo{display:none}\r\n}@media(min-width:1601px){nav.index{height:650px}nav.index .nav-jumbo{position:relative;bottom:35px}\r\nnav.index.responsive{height:140px}nav.index.responsive .nav-jumbo{display:none}}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\t<nav>\r\n\t\t<div class=\"nav-wrapper\" id=\"nav\">\r\n\t\t\t<div class=\"main-nav\">\r\n\t\t\t\t<a routerLink=\"/index\" routerLinkActive=\"active\" class=\"brand-logo center\">\r\n\t\t\t\t\t<h1>CDN</h1>\r\n\t\t\t\t\t<img class=\"js-icon\" src=\"../assets/images/js-icon.png\" width=\"90px\" height=\"90px\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul class=\"right\" id=\"btn-ul\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<button id=\"backBtn\" class=\"btn green darken-2\">Back to search</button>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"nav-jumbo\">\r\n\t\t\t\t<i class=\"large material-icons\">search</i>\r\n\t\t\t\t<h2>Feel free to search</h2>\r\n\t\t\t</div>\r\n\t   </div>\r\n\t</nav>\r\n\r\n\t<div id=\"main-content\">\r\n\t  <router-outlet></router-outlet>\r\n\t</div>\r\n\r\n\t<footer class=\"page-footer\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col s12 footer-col center\" id=\"footerBrand\">\r\n\t\t\t\t\t\t<a routerLink=\"/index\" routerLinkActive=\"active\" class=\"footer-brand\">\r\n\t\t\t\t\t\t\t<span class=\"brand-move\">\r\n\t\t\t\t\t\t\t\t<h5 data-name=\"cdn\">CDN</h5> \r\n\t\t\t\t\t\t\t\t<img class=\"js-icon\" src=\"../assets/images/js-icon.png\" width=\"45px\" height=\"45px\">\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"brand-static\">\r\n\t\t\t\t\t\t\t\t<h5 data-name=\"search-app\">search app</h5>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col s12 footer-col center icons-list\" id=\"footerLinks\">\r\n\t\t\t\t\t\t<span class=\"links-static\">\r\n\t\t\t\t\t\t\t<a href=\"#\" target=\"_blank\" class=\"contact-icon\">\r\n\t\t\t\t\t\t\t\t<img class=\"icons\" src=\"../assets/images/facebook-icon.png\" width=\"10px\" height=\"20px\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/in/vadym-hrynishyn-127406135/\" target=\"_blank\" class=\"contact-icon\">\r\n\t\t\t\t\t\t\t\t<img class=\"icons\" src=\"../assets/images/linkedin-icon.png\" width=\"20px\" height=\"20px\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span class=\"links-move\">\r\n\t\t\t\t\t\t\t<a href=\"https://github.com/NRJman\" target=\"_blank\" class=\"contact-icon\">\r\n\t\t\t\t\t\t\t\t<img class=\"icons\" src=\"../assets/images/github-icon.png\" width=\"18px\" height=\"20px\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col s12 footer-col center\" id=\"footerMotto\">\r\n\t\t\t\t\t\t<span class=\"motto-move\">\r\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp; SEARCH &nbsp;&nbsp;</span>  |  \r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span class=\"motto-static\">\r\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp; CHECK IT OUT &nbsp;&nbsp;</span>  |  \r\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp; ENJOY &nbsp;&nbsp;</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"footer-copyright\">\r\n\t\t\t<span class=\"copyright\">\r\n\t\t\t\t<a href=\"https://www.linkedin.com/in/vadym-hrynishyn-127406135/\" target=\"_blank\">Vadym Hrynishyn</a><span>, 2018</span>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dataoperations_service__ = __webpack_require__("../../../../../src/app/dataoperations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__newpage_newpage_component__ = __webpack_require__("../../../../../src/app/newpage/newpage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_10__newpage_newpage_component__["a" /* NewpageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_router__["a" /* routes */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__dataoperations_service__["a" /* DataoperationsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newpage_newpage_component__ = __webpack_require__("../../../../../src/app/newpage/newpage.component.ts");



var router = [
    { path: "index", component: __WEBPACK_IMPORTED_MODULE_1__index_index_component__["a" /* IndexComponent */] },
    { path: "newpage", component: __WEBPACK_IMPORTED_MODULE_2__newpage_newpage_component__["a" /* NewpageComponent */] },
    { path: "newpage/:name", component: __WEBPACK_IMPORTED_MODULE_2__newpage_newpage_component__["a" /* NewpageComponent */] },
    { path: "", redirectTo: "index", pathMatch: "full" }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/dataoperations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataoperationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataoperationsService = (function () {
    function DataoperationsService(_http) {
        this._http = _http;
        this.invokeEvent = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    DataoperationsService.prototype.makeRequest = function (param, github) {
        if (param === void 0) { param = ''; }
        if (github === void 0) { github = false; }
        var url = "https://api.cdnjs.com/libraries";
        var githubUrl = 'https://api.github.com/repos';
        var here = this;
        if (param === '') {
            return (this._http
                .get(url)
                .map(function (response) { return response.json(); })
                .toPromise())
                .then(function (result) {
                return result;
            })
                .catch(function (error) { return console.error(error); });
        }
        else {
            if (github === true) {
                return (this._http
                    .get(githubUrl + "/" + param[0] + "/" + param[1])
                    .map(function (response) { return response.json(); })
                    .toPromise())
                    .then(function (result) {
                    return result;
                })
                    .catch(function (error) { return console.error(error); });
            }
            else {
                return (this._http
                    .get(url + "/" + param)
                    .map(function (response) { return response.json(); })
                    .toPromise())
                    .then(function (result) {
                    here.setSecondaryRequestData(JSON.stringify(result));
                    var parameter = [];
                    if ($.isEmptyObject(here.getSecondaryRequestData()) === false) {
                        var repo = here.getSecondaryRequestData().repository.url;
                        if (repo.indexOf('.git') === -1) {
                            if (repo.substr(repo.length - 1) !== '/') {
                                var repoSlice = repo.slice(repo.indexOf('github.com') + 11);
                            }
                            else {
                                var repoSlice = repo.slice(repo.indexOf('github.com') + 11, -1);
                            }
                        }
                        else {
                            var repoSlice = repo.slice(repo.indexOf('github.com') + 11, repo.indexOf('.git'));
                        }
                        parameter.push(repoSlice.slice(0, repoSlice.indexOf('/')));
                        parameter.push(repoSlice.slice(repoSlice.indexOf('/') + 1));
                        return here.makeRequest(parameter, true)
                            .then(function (result) {
                            return result;
                        })
                            .catch(function (error) { return console.error(error); });
                    }
                })
                    .catch(function (error) { return console.error(error); });
            }
        }
    };
    DataoperationsService.prototype.getUrlParameter = function () {
        return sessionStorage.getItem("urlParameter");
    };
    DataoperationsService.prototype.getInputFilter = function () {
        return sessionStorage.getItem("inputFilter");
    };
    DataoperationsService.prototype.getPrimaryRequestData = function () {
        var data = sessionStorage.getItem("primaryRequestData");
        return JSON.parse(data);
    };
    DataoperationsService.prototype.getFilteredPrimaryRequestData = function () {
        var data = sessionStorage.getItem("filteredPrimaryRequestData");
        return JSON.parse(data);
    };
    DataoperationsService.prototype.getSecondaryRequestData = function () {
        var data = sessionStorage.getItem("secondaryRequestData");
        return JSON.parse(data);
    };
    DataoperationsService.prototype.getGitHubRequestData = function () {
        var data = sessionStorage.getItem("gitHubRequestData");
        try {
            return JSON.parse(data);
        }
        catch (err) {
            return undefined;
        }
    };
    DataoperationsService.prototype.getIfToChangeFlag = function () {
        return sessionStorage.getItem("ifToChangeFlag");
    };
    DataoperationsService.prototype.getClickedFlag = function () {
        return sessionStorage.getItem("clickedFlag");
    };
    DataoperationsService.prototype.setUrlParameter = function (data) {
        sessionStorage.setItem("urlParameter", data);
    };
    DataoperationsService.prototype.setInputFilter = function (data) {
        sessionStorage.setItem("inputFilter", data);
    };
    DataoperationsService.prototype.setPrimaryRequestData = function (data) {
        sessionStorage.setItem("primaryRequestData", data);
    };
    DataoperationsService.prototype.setFilteredPrimaryRequestData = function (data) {
        sessionStorage.setItem("filteredPrimaryRequestData", data);
    };
    DataoperationsService.prototype.setSecondaryRequestData = function (data) {
        sessionStorage.setItem("secondaryRequestData", data);
    };
    DataoperationsService.prototype.setGitHubRequestData = function (data) {
        sessionStorage.setItem("gitHubRequestData", data);
    };
    DataoperationsService.prototype.setIfToChangeFlag = function (data) {
        sessionStorage.setItem("ifToChangeFlag", data);
    };
    DataoperationsService.prototype.setClickedFlag = function (data) {
        sessionStorage.setItem("clickedFlag", data);
    };
    return DataoperationsService;
}());
DataoperationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DataoperationsService);

var _a;
//# sourceMappingURL=dataoperations.service.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep #main{-ms-flex:1 0 auto;flex:1 0 auto}:host ::ng-deep #main #message{cursor:pointer}\r\n:host ::ng-deep #main #progress{display:none}:host ::ng-deep #main input[type=\"text\"]+label{pointer-events:none}\r\n:host ::ng-deep #main input[type=\"text\"]+label *{pointer-events:all}\r\n:host ::ng-deep #main .input-field input[type=text]:focus+label{color:#388e3c}:host ::ng-deep #main .input-field input[type=text]:focus{border-bottom:1px solid #388e3c;box-shadow:0 1px 0 0 #388e3c}\r\n:host ::ng-deep #main ul.collection{border:0}:host ::ng-deep #main ul.collection .header-btn{text-align:center}\r\n:host ::ng-deep #main ul.collection .header-link{text-align:center}:host ::ng-deep #main ul.collection .header-copy{text-align:right}\r\n:host ::ng-deep #main ul.collection .row{margin-bottom:0}:host ::ng-deep #main ul.collection li{overflow-wrap:break-word;margin-bottom:5px}\r\n:host ::ng-deep #main ul.collection li:nth-of-type(even){background:radial-gradient(#e8e8e8,#f9f9f9)}\r\n:host ::ng-deep #main ul.collection .tooltiptext{z-index:1;opacity:0;cursor:default;position:relative;bottom:3px;background-color:dimgrey;color:#fff;text-align:center;border-radius:6px;padding:3px 6px 3px 6px;margin-right:3px}\r\n:host ::ng-deep #main ul.collection .col-copy{padding-left:0;text-align:right}:host ::ng-deep #main ul.collection .col-copy .btn-copy i{position:relative;top:1px}\r\n:host ::ng-deep #main ul.collection .tooltiptext::after{content:\" \";position:absolute;top:50%;left:100%;margin-top:-5px;border-width:5px;border-style:solid;border-color:transparent transparent transparent dimgrey}\r\n:host ::ng-deep #main ul.collection .to-newpage{width:230px;padding-right:20px;padding-left:20px;text-overflow:ellipsis;margin-right:50px;text-transform:none}\r\n@media(max-width:992px){:host::ng-deep #main ul.collection .header-btn,:host::ng-deep #main ul.collection .header-link,:host::ng-deep #main ul.collection .header-copy{text-align:center}\r\n:host ::ng-deep #main ul.collection .header-btn h5,:host ::ng-deep #main ul.collection .header-link h5,:host ::ng-deep #main ul.collection .header-copy h5{font-size:1.2em}\r\n:host ::ng-deep #main ul.collection .col-btn{text-align:center;margin-bottom:15px}\r\n:host ::ng-deep #main ul.collection .col-link{margin-bottom:15px}:host ::ng-deep #main ul.collection .to-newpage{margin-right:0}\r\n:host ::ng-deep #main ul.collection .col-copy{text-align:center}:host ::ng-deep #main ul.collection .col-copy div{position:relative;right:31px}\r\nnav{height:100px}nav #btn-ul{position:relative;top:40px;right:calc(50% - 105px);margin-right:0;margin-top:2px}\r\n}@media(min-width:993px) and (max-width:1366px){:host::ng-deep #main ul.collection .to-newpage{width:190px}\r\n}@media(min-width:993px) and (max-width:1055px){:host::ng-deep #main ul.collection .collection-item{padding-right:3px;padding-left:3px}\r\n:host ::ng-deep #main ul.collection .collection-header{padding-right:7px;padding-left:7px}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"input-field\">\r\n\t\t\t<input [(ngModel)]=\"filter\" (ngModelChange)=\"sendForFiltering()\" id=\"text\" type=\"text\">\r\n\t\t \t<label id=\"activate\" for=\"text\">Name</label>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"container table-container\">\r\n\t\t<div class=\"progress green darken-1\" id=\"progress\">\r\n\t      \t<div class=\"indeterminate\"></div>\r\n\t  \t</div>\r\n\t  \t<span id=\"message\"></span>\r\n\r\n\t  \t<ul class=\"collection with-header\" *ngIf=\"tableData.length > 0\">\r\n\t  \t\t<li class=\"collection-header\">\r\n\t  \t\t\t<div class=\"row\">\r\n\t        \t\t<div class=\"col s12 l4 xl3 header-btn\">\r\n\t        \t\t\t<h5>Name</h5>\r\n\t        \t\t</div>\r\n\t        \t\t<div class=\"col s12 l6 xl7 header-link\">\r\n\t        \t\t\t<h5>Link</h5>\r\n\t        \t\t</div>\r\n\t        \t\t<div class=\"col s12 l2 header-copy\">\r\n\t        \t\t\t<h5>Copy</h5>\r\n\t        \t\t</div>\r\n\t        \t</div>\r\n\t  \t\t</li>\r\n\t        <li class=\"collection-item\" *ngFor=\"let item of tableData; let id = index; \">\r\n\t        \t<div class=\"row\">\r\n\t        \t\t<div class=\"col s12 l4 xl3 col-btn\">\r\n\t        \t\t\t<a [routerLink]=\"['/newpage', item.name]\" \r\n\t\t\t\t\t\t\t(click)=\"data.setClickedFlag('true');\" \r\n\t\t\t\t\t\t\tclass=\"btn green darken-2 waves-effect table-btn to-newpage\">{{item.name}}</a>\r\n\t        \t\t</div>\r\n\t        \t\t<div class=\"col s12 l6 xl7 col-link\">\r\n\t        \t\t\t<span class=\"link\">\r\n\t\t\t\t\t\t\t{{item.latest}}\r\n\t\t\t\t\t\t</span>\r\n\t        \t\t</div>\r\n\t        \t\t<div class=\"col s12 l2 col-copy\">\r\n\t        \t\t\t<div>\r\n\t\t\t\t\t\t\t<span class=\"tooltiptext\" [attr.data-link]=\"item.latest\">Copied!</span>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-floating green darken-2 btn-copy\" (click)=\"copyBtnLink(id, item.latest)\"><i class=\"material-icons\">content_copy</i></a>\r\n\t\t\t\t\t\t</div>\r\n\t        \t\t</div>\r\n\t        \t</div>\r\n\t        </li>\r\n\t    </ul>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataoperations_service__ = __webpack_require__("../../../../../src/app/dataoperations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = (function () {
    function IndexComponent(data) {
        this.data = data;
        this.tableData = [];
        this.isBrandReady = false;
        this.areLinksReady = false;
        this.isMottoReady = false;
    }
    IndexComponent.prototype.sendForFiltering = function () {
        var here = this;
        var elem = document.getElementById("text");
        var value = elem.value;
        here.data.setInputFilter(value);
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#progress').css('display', 'block');
        here.data.makeRequest()
            .then(function (result) {
            here.data.setPrimaryRequestData(JSON.stringify(result));
            here.renderHTML(here.data.getInputFilter());
        }).catch(function (error) { return console.error(error); });
    };
    IndexComponent.prototype.renderHTML = function (filter) {
        var here = this;
        if (document.getElementById("tHeader") !== null) {
            var tHeader = document.getElementById("tHeader");
            tHeader.remove();
        }
        var filteredData = [];
        var recommendedData = [];
        var myData = here.data.getPrimaryRequestData();
        for (var i = 0; i < myData.results.length; i++) {
            if (myData.results[i].name.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
                filteredData.push(myData.results[i]);
            }
        }
        if (filter.length > 1) {
            if (filteredData.length !== 0) {
                here.showFilteredData(filteredData);
            }
            else {
                //If there is necessity to recommend something (there are no items in result)
                for (var i = 0; i < filter.length; i++) {
                    var slicedFilter = filter.slice(0, i + 1);
                    var buffer = [];
                    for (var j = 0; j < myData.results.length; j++) {
                        if (myData.results[j].name.toLowerCase().indexOf(slicedFilter.toLowerCase()) !== -1) {
                            buffer.push(myData.results[j]);
                        }
                    }
                    if (buffer.length !== 0) {
                        recommendedData = buffer;
                    }
                }
                here.showFilteredData(myData, true, false, false, recommendedData);
            }
        }
        else {
            if (filter == "") {
                //If input field is empty:
                here.showFilteredData(filteredData, false, true);
            }
            else {
                //If there is only one letter:
                here.showFilteredData(filteredData, false);
            }
        }
    };
    IndexComponent.prototype.showFilteredData = function (data, ifShow, isEmptyString, areThereAnyResults, recommended) {
        if (ifShow === void 0) { ifShow = true; }
        if (isEmptyString === void 0) { isEmptyString = false; }
        if (areThereAnyResults === void 0) { areThereAnyResults = true; }
        if (recommended === void 0) { recommended = []; }
        var placeForMessage = document.getElementById("message");
        var here = this;
        here.tableData = data;
        if (ifShow === true) {
            //If result consists of at least one item: 
            if (areThereAnyResults === true) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#progress').css('display', 'none');
                placeForMessage.innerHTML = '';
                var btnNum = 0;
                var btnId;
                //Adding events to and working on a copy buttons
                var copyButtons = document.getElementsByClassName('btn-copy');
                for (var j = 0; j < copyButtons.length; j++) {
                    copyButtons[j].addEventListener("click", function () {
                        var $temp = __WEBPACK_IMPORTED_MODULE_2_jquery__("<input>");
                        __WEBPACK_IMPORTED_MODULE_2_jquery__("body").append($temp);
                        $temp.val(this.attributes[1].value).select();
                        document.execCommand("copy");
                        $temp.remove();
                        var tooltips = __WEBPACK_IMPORTED_MODULE_2_jquery__('.tooltiptext');
                        for (var k = 0; k < tooltips.length; k++) {
                            if (tooltips[k].attributes[1].value === this.attributes[2].value) {
                                var selector = ".tooltiptext[data-tooltip='" + tooltips[k].attributes[1].value + "']";
                                __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).css('display', 'inline');
                                __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).fadeTo('slow', 1);
                                setTimeout(function () {
                                    __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).fadeTo('slow', 0);
                                }, 2000);
                            }
                            ;
                        }
                        ;
                    });
                }
                ;
                /*
                    Sets the 'clicked' flag to true, which means that results will be saved
                    if user comes back here from a new page using 'back' button:
                */
                __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
                    var buttons = document.getElementsByClassName('table-btn');
                    for (var i = 0; i < buttons.length; i++) {
                        buttons[i].addEventListener("click", function () {
                            here.data.setClickedFlag("true");
                        });
                    }
                });
            }
            else {
                //Recommending a random item:
                if (recommended.length === 0) {
                    var recommendedItem = data.results[Math.floor(Math.random() * data.total)];
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('#progress').css('display', 'none');
                    here.tableData = [];
                    placeForMessage.innerHTML = "The input is incorrect. Try: <a id=\"recommend\">" + recommendedItem.name + "</a>.";
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('#recommend').click(function () {
                        var input = document.getElementById("text");
                        __WEBPACK_IMPORTED_MODULE_2_jquery__('#progress').css('display', 'block');
                        here.data.setInputFilter(recommendedItem.name);
                        input.value = recommendedItem.name;
                        here.renderHTML(recommendedItem.name);
                    });
                }
                else {
                    //Recomending an item which is similar to entered text:
                    var recommendedItem = recommended[Math.floor(Math.random() * recommended.length)];
                    here.tableData = [];
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('#progress').css('display', 'none');
                    here.tableData = [];
                    placeForMessage.innerHTML = "There is no such library. Maybe you meant: <a id=\"recommend\">" + recommendedItem.name + "</a>.";
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('#recommend').click(function () {
                        var input = document.getElementById("text");
                        __WEBPACK_IMPORTED_MODULE_2_jquery__('#progress').css('display', 'block');
                        here.data.setInputFilter(recommendedItem.name);
                        input.value = recommendedItem.name;
                        here.renderHTML(recommendedItem.name);
                    });
                }
            }
        }
        else {
            if (isEmptyString === true) {
                //If input field is empty:
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#progress').css('display', 'none');
                placeForMessage.innerHTML = "";
                here.tableData = [];
                return;
            }
            else if (isEmptyString === false) {
                //If there is only one letter:
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#progress').css('display', 'none');
                here.tableData = [];
                placeForMessage.innerHTML = "Please, write MORE than just one letter";
            }
        }
        here.data.setFilteredPrimaryRequestData(JSON.stringify(data));
    };
    IndexComponent.prototype.copyBtnLink = function (i, link) {
        var $temp = __WEBPACK_IMPORTED_MODULE_2_jquery__("<input>");
        __WEBPACK_IMPORTED_MODULE_2_jquery__("body").append($temp);
        $temp.val(link).select();
        document.execCommand("copy");
        $temp.remove();
        var tooltips = __WEBPACK_IMPORTED_MODULE_2_jquery__('.tooltiptext');
        for (var k = 0; k < tooltips.length; k++) {
            if (tooltips[k].attributes[2].value === link) {
                var selector = ".tooltiptext[data-link='" + tooltips[k].attributes[2].value + "']";
                __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).css('display', 'inline');
                __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).fadeTo('slow', 1);
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).fadeTo('slow', 0);
                }, 2000);
            }
            ;
        }
        ;
    };
    IndexComponent.prototype.inputManipulation = function () {
        var here = this;
        var placeForData = document.getElementById("dataHolder");
        var data = here.data.getFilteredPrimaryRequestData();
        var label = document.getElementById("activate");
        var input = document.getElementById("text");
        //If footer was not fully animated:
        if (here.isMottoReady !== true) {
            here.animateFooter();
        }
        //It will add first-request data to the page if the getIfToChangeFlag() === true:
        if (here.data.getIfToChangeFlag() === "true") {
            input.value = here.data.getInputFilter();
            here.tableData = data;
            var copyButtons = document.getElementsByClassName('btn-copy');
            for (var j = 0; j < copyButtons.length; j++) {
                copyButtons[j].addEventListener("click", function () {
                    var $temp = __WEBPACK_IMPORTED_MODULE_2_jquery__("<input>");
                    __WEBPACK_IMPORTED_MODULE_2_jquery__("body").append($temp);
                    $temp.val(this.attributes[1].value).select();
                    document.execCommand("copy");
                    $temp.remove();
                    var tooltips = __WEBPACK_IMPORTED_MODULE_2_jquery__('.tooltiptext');
                    for (var k = 0; k < tooltips.length; k++) {
                        if (tooltips[k].attributes[1].value === this.attributes[2].value) {
                            var selector = ".tooltiptext[data-tooltip='" + tooltips[k].attributes[1].value + "']";
                            __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).css('display', 'inline');
                            __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).fadeTo('slow', 1);
                            setTimeout(function () {
                                __WEBPACK_IMPORTED_MODULE_2_jquery__(selector.toString()).fadeTo('slow', 0);
                            }, 2000);
                        }
                        ;
                    }
                    ;
                });
            }
            ;
            __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('table-btn').on('click', function () {
                    here.data.setClickedFlag("true");
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('#btn-ul').css('display', 'block');
                });
            });
        }
        else {
            input.value = "";
        }
        if (input.value.length > 0) {
            label.classList.add("active");
        }
        here.data.setIfToChangeFlag("false");
    };
    ;
    IndexComponent.prototype.animateFooter = function () {
        var here = this;
        var footerBrand = __WEBPACK_IMPORTED_MODULE_2_jquery__('#footerBrand');
        var footerLinks = __WEBPACK_IMPORTED_MODULE_2_jquery__('#footerLinks');
        var footerMotto = __WEBPACK_IMPORTED_MODULE_2_jquery__('#footerMotto');
        var scroll = __WEBPACK_IMPORTED_MODULE_2_jquery__(window).scrollTop() + __WEBPACK_IMPORTED_MODULE_2_jquery__(window).innerHeight();
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__('body').height() > __WEBPACK_IMPORTED_MODULE_2_jquery__(window).height()) {
            //If content can't be fully placed in window:
            if (here.isBrandReady === false) {
                if (scroll >= footerBrand.offset().top + footerBrand.height()) {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('body').addClass('scroll-none');
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.brand-move').addClass('brand-move-animated');
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.brand-static').addClass('brand-static-animated');
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_2_jquery__('.brand-move').css('opacity', 1);
                    }, 200);
                    here.isBrandReady = true;
                }
            }
            if (here.areLinksReady === false) {
                if (scroll >= footerLinks.offset().top + footerLinks.height()) {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('body').addClass('scroll-none');
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.links-move').addClass('links-move-animated');
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.links-static').addClass('links-static-animated');
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_2_jquery__('.links-move').css('opacity', 1);
                    }, 200);
                    here.areLinksReady = true;
                }
            }
            if (here.isMottoReady === false) {
                if (scroll >= footerMotto.offset().top + footerMotto.height()) {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('body').addClass('scroll-none');
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.motto-move').addClass('motto-move-animated');
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.motto-static').addClass('motto-static-animated');
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_2_jquery__('.motto-move').css('opacity', 1);
                    }, 200);
                    __WEBPACK_IMPORTED_MODULE_2_jquery__(document).unbind('scroll');
                    here.isMottoReady = true;
                }
            }
        }
        else {
            //If content can be placed in window:
            __WEBPACK_IMPORTED_MODULE_2_jquery__('body').addClass('scroll-none');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.brand-move').addClass('brand-move-animated');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.brand-static').addClass('brand-static-animated');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.brand-move').css('opacity', 1);
            }, 300);
            here.isBrandReady = true;
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.links-move').addClass('links-move-animated');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.links-static').addClass('links-static-animated');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.links-move').css('opacity', 1);
            }, 300);
            here.areLinksReady = true;
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.motto-move').addClass('motto-move-animated');
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.motto-static').addClass('motto-static-animated');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.motto-move').css('opacity', 1);
            }, 300);
            here.isMottoReady = true;
            __WEBPACK_IMPORTED_MODULE_2_jquery__(document).unbind('scroll');
        }
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('body').removeClass('scroll-none');
        }, 500);
    };
    IndexComponent.prototype.ngOnInit = function () {
        var elem = document.getElementById("text");
        var here = this;
        //Manage navigation classes for adaptability adding
        __WEBPACK_IMPORTED_MODULE_2_jquery__('body').removeClass();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('body').addClass("index");
        __WEBPACK_IMPORTED_MODULE_2_jquery__('nav').removeClass();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('nav').addClass("index");
        /*-----Nav height toggling-----*/
        if (here.data.getIfToChangeFlag() === 'true') {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('nav').addClass('responsive');
        }
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#text').bind("click", function () {
            if (__WEBPACK_IMPORTED_MODULE_2_jquery__('#activate').hasClass('active')) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('nav').addClass('responsive');
            }
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#text').bind("blur", function () {
            if (__WEBPACK_IMPORTED_MODULE_2_jquery__('#activate').hasClass('active') === false) {
                if (here.tableData.length == 0) {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('nav').removeClass('responsive');
                }
            }
        });
        window.onload = function () {
            /*-----Nav animation-----*/
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.main-nav').addClass('animated-main-nav');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.main-nav').css('opacity', 1);
            }, 200);
            /*-----Footer animation-----*/
            __WEBPACK_IMPORTED_MODULE_2_jquery__(document).scroll(function () {
                here.animateFooter();
            });
            here.animateFooter();
        };
        here.inputManipulation();
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataoperations_service__["a" /* DataoperationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataoperations_service__["a" /* DataoperationsService */]) === "function" && _a || Object])
], IndexComponent);

var _a;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/newpage/newpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep #newDataHolder .card-title{font-size:2.3em;text-shadow:1px 1px 1px white}\r\n:host ::ng-deep #newDataHolder .wrapper-for-background{width:100%;height:100%;background-color:black}\r\n:host ::ng-deep #newDataHolder div.tab{width:100%;text-align:center;overflow:hidden;border-top:0;border-radius:2px;border-top-left-radius:0;border-top-right-radius:0;background-color:#fff;transition:box-shadow .25s;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2)}\r\n:host ::ng-deep #newDataHolder div.tab button{width:50%;background-color:inherit;float:left;border:0;outline:0;cursor:pointer;padding:14px 16px;transition:.3s;font-size:17px}\r\n:host ::ng-deep #newDataHolder div.tab button:hover{background-color:#bdbdbd}:host ::ng-deep #newDataHolder div.tab button.active{color:white;background-color:#616161}\r\n:host ::ng-deep #newDataHolder .tabcontent{display:none;animation:fadeEffect 1s}@keyframes fadeEffect{from{opacity:0}\r\nto{opacity:1}}:host ::ng-deep #newDataHolder .preloader-wrapper{width:100px;height:100px;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}\r\n:host ::ng-deep #newDataHolder .card-image .btn-floating .halfway-fab .waves-effect .waves-light{z-index:1}\r\n:host ::ng-deep #newDataHolder .card-content .collection-header div{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}\r\n:host ::ng-deep #newDataHolder .card-content .collection-header div i{position:relative;top:5px}\r\n:host ::ng-deep #newDataHolder .github-collection .collection-header{text-align:center}\r\n:host ::ng-deep #newDataHolder .github-collection .collection-header div span{cursor:default}\r\n:host ::ng-deep #newDataHolder .alert-box{color:#555;border-radius:10px;padding:10px 36px;margin:10px}\r\n:host ::ng-deep #newDataHolder .alert-box span{font-weight:bold;text-transform:uppercase}\r\n:host ::ng-deep #newDataHolder .error{background:#ffecec url(" + escape(__webpack_require__("../../../../../src/assets/images/error.png")) + ") no-repeat 5px 7px;background-size:27px 27px;border:1px solid #f5aca6}\r\n:host ::ng-deep #newDataHolder ul li.collection-item{word-wrap:break-word}:host ::ng-deep #newDataHolder ul li.collection-item .not-specified{color:grey;font-style:italic}\r\n:host ::ng-deep #newDataHolder .chip{cursor:pointer;color:white}:host ::ng-deep .the-modal{display:none;position:fixed;z-index:2;overflow:auto;left:0;top:0;width:100%;height:100%;background-color:black;background-color:rgba(0,0,0,0.4)}@keyframes animatetop{from{top:-300px;opacity:0}\r\nto{top:0;opacity:1}}:host ::ng-deep .the-modal .the-modal-content{background-color:#fefefe;margin:15% auto;border:1px solid #888;width:80%;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name:animatetop;animation-duration:.8s}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-header{padding:2px 16px;background-color:dimgrey;background-image:url(" + escape(__webpack_require__("../../../../../src/assets/images/js-jumbo.png")) + ");background-size:cover;color:white;text-align:center}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body{padding:2px 16px;background-color:rgba(243,237,216,0.3)}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header{background-color:white}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header .quest-768px{display:none}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header div{display:-ms-flexbox;display:flex;text-align:right;float:right}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header .tooltip-quest-768px{display:none;background-color:dimgrey;border-radius:6px;text-align:center;color:#fff}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header h5{display:inline-block}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header .tooltip-question{text-align:right;opacity:0;cursor:default;position:relative;top:9px;right:2px;background-color:dimgrey;color:#fff;text-align:center;border-radius:6px;padding:3px 6px 3px 6px;margin-right:3px}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header .tooltip-question::after{content:\" \";position:absolute;top:50%;left:100%;margin-top:-5px;border-width:5px;border-style:solid;border-color:transparent transparent transparent dimgrey}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header .question{float:right;width:30px;height:30px;background:url(" + escape(__webpack_require__("../../../../../src/assets/images/question.png")) + ") no-repeat;background-size:25px 25px;position:relative;top:11px;animation-duration:.7s;animation-fill-mode:both;cursor:pointer}@keyframes bounce{0%,20%,50%,80%,100%{transform:translateY(0)}\r\n40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}\r\n}:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-item{background-color:white;word-wrap:break-word}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-item div{float:right}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-item:hover{background-color:rgba(243,237,216,0.3);cursor:default}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .btn-copy{width:30px;height:30px;position:relative;display:inline-block;bottom:4px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .btn-copy i{width:25px;height:25px;font-size:1.1em;position:relative;bottom:3px}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .tooltiptext{opacity:0;cursor:default;position:relative;bottom:3px;background-color:dimgrey;color:#fff;text-align:center;border-radius:6px;padding:3px 6px 3px 6px;margin-right:3px}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .tooltiptext::after{content:\" \";position:absolute;top:50%;left:100%;margin-top:-5px;border-width:5px;border-style:solid;border-color:transparent transparent transparent dimgrey}\r\n:host ::ng-deep .the-modal #close{float:right;font-size:28px;font-weight:bold;transition:all .5s ease;color:white}\r\n:host ::ng-deep .the-modal #close:hover,:host ::ng-deep .the-modal #close:focus{transition:all .5s ease;text-shadow:0 0 10px white;text-decoration:none;cursor:pointer}\r\n@media(max-width:320px){:host::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header{overflow:visible}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header div{display:none}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header .question{position:relative;bottom:50px}\r\n}@media(max-width:767px){:host::ng-deep #newDataHolder .preloader-wrapper{bottom:60px}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header .quest-768px{display:inline-block}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-header div{display:none}\r\n}@media(max-width:992px){:host::ng-deep .the-modal .the-modal-content .the-modal-body .collection-item .link{margin-bottom:5px}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-item .tooltiptext{position:relative;top:4px}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .collection-item div{padding-top:2px;float:none;width:150px;margin:auto}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .btn-copy{width:27px;height:27px;position:relative;top:3px;display:inline-block}\r\n:host ::ng-deep .the-modal .the-modal-content .the-modal-body .btn-copy i{width:20px;height:20px;font-size:1em;position:relative;bottom:6px}\r\n}@media(min-width:1025px){:host::ng-deep #newDataHolder .card-content .collection-header div{padding-left:50px;padding-right:50px}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newpage/newpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"the-modal\">\r\n  <!-- Modal content -->\r\n  \t<div class=\"the-modal-content\">\r\n    \t<div class=\"the-modal-header\">\r\n      \t\t<span id=\"close\">&times;</span>\r\n      \t\t<h3></h3>\r\n    \t</div>\r\n    \t<div class=\"the-modal-body\">\r\n      \t\t<ul class=\"collection with-header\"></ul>\r\n    \t</div>\r\n  \t</div>\r\n</div>\r\n\r\n<div class=\"container\" id=\"main\">\r\n\t<div id=\"newDataHolder\">\r\n\t\t<div class=\"preloader-wrapper big active center\">\r\n  \t\t<div class=\"spinner-layer spinner-green-only\">\r\n  \t\t\t<div class=\"circle-clipper left\">\r\n  \t\t  \t<div class=\"circle\"></div>\r\n  \t\t\t</div>\r\n  \t\t\t<div class=\"gap-patch\">\r\n  \t\t  \t<div class=\"circle\"></div>\r\n  \t\t\t</div><div class=\"circle-clipper right\">\r\n  \t\t  \t<div class=\"circle\"></div>\r\n  \t\t\t</div>\r\n  \t\t</div>\r\n  \t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/newpage/newpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataoperations_service__ = __webpack_require__("../../../../../src/app/dataoperations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewpageComponent = (function () {
    function NewpageComponent(data, route, router) {
        this.data = data;
        this.route = route;
        this.router = router;
        this.isBrandReady = false;
        this.areLinksReady = false;
        this.isMottoReady = false;
    }
    NewpageComponent.prototype.showPage = function (parameter) {
        var here = this;
        here.data.makeRequest(parameter)
            .then(function (result) {
            here.data.setGitHubRequestData(JSON.stringify(result));
            here.setPageContent();
        })
            .catch(function (error) { return console.error(error); });
    };
    NewpageComponent.prototype.setPageContent = function () {
        var here = this;
        var data = here.data.getSecondaryRequestData();
        var filter = here.data.getInputFilter();
        var versionLinkPrimary = "https://cdnjs.cloudflare.com/ajax/libs/";
        var placeForData = document.getElementById("newDataHolder");
        var parameter = [];
        var gitHubData = here.data.getGitHubRequestData();
        var nav = document.getElementById("nav");
        var button = document.getElementById("backBtn");
        /*----------Checks if the page was loaded by click, or by manual URL entering----------*/
        if (here.data.getClickedFlag() === "true") {
            button.innerHTML = "Back to " + filter;
            button.onclick = function () {
                here.data.setIfToChangeFlag("true");
                here.router.navigate(['/index']);
            };
        }
        else {
            button.onclick = function () {
                here.router.navigate(['/index']);
            };
        }
        /*----------If the URL is incorrect----------*/
        if (__WEBPACK_IMPORTED_MODULE_3_jquery__["isEmptyObject"](data)) {
            placeForData.innerHTML = "\n\t\t\t\t<div class=\"alert-box error\">\n\t\t\t\t\t<span>error: </span>\n\t\t\t\t\tThe URL is incorrect.\n\t\t\t\t</div>\n\t\t\t";
            return;
        }
        /*-----------------------------------Start working with secondary request data-----------------------------------*/
        //Verifications if there are such properties in secondary request data
        if (data.author !== undefined) {
            if (data.author.name === undefined) {
                var author = data.author;
            }
            else {
                var author = data.author.name;
            }
        }
        else {
            var author = "The author is not specified";
        }
        if (data.description !== undefined) {
            var description = data.description;
        }
        else {
            var description = "The description is not specified";
        }
        if (data.homepage !== undefined) {
            var homepage = data.homepage;
        }
        else {
            var homepage = "The homepage is not specified";
        }
        if (data.license !== undefined) {
            var license = data.license;
        }
        else {
            var license = "The license is not specified";
        }
        if (data.keywords !== undefined) {
            var keywords = data.keywords;
        }
        else {
            var keywords = "The keywords is not specified";
        }
        if (data.version !== undefined) {
            var version = data.version;
        }
        else {
            var version = "The version is not specified";
        }
        if (data.repository.url !== undefined) {
            var repository = data.repository.url;
        }
        else {
            var repository = "The repository is not specified";
        }
        /*-----------------------------------End working with secondary request data-----------------------------------*/
        /*------------------------------------Start working with GitHub request data-----------------------------------*/
        if (gitHubData.message === "Not Found") {
            placeForData.innerHTML = "\n\t\t\t\t<div class=\"tab\">\n\t\t\t\t\t<div class=\"tab-wrapper\">\n\t\t\t\t\t\t<button data-name=\"github\" class=\"tablinks\" id=\"defaultOpen\">GitHub info</button>\n\t\t\t\t\t  \t<button data-name=\"general\" class=\"tablinks\" >General info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row tabcontent\" id=\"githubInfo\">\n\t\t\t\t  \t<div class=\"col s12\">\n\t\t\t\t  \t  \t<div class=\"card\">\n\t\t\t\t  \t  \t  \t<div class=\"card-image\">\n\t\t\t\t  \t  \t  \t  \t<img src=\"../assets/images/githubMessage.png\">\n\t\t\t\t  \t  \t  \t</div>\n\t\t\t\t  \t  \t</div>\n\t\t\t\t  \t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<ul class=\"collection tabcontent\" id=\"generalInfo\">\n\t\t\t\t\t<li class=\"collection-item\"><b>Name:</b> " + data.name + "</li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Description:</b> <span class=\"items\">" + description + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Author:</b> <span class=\"items\">" + author + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Homepage:</b> <span class=\"items\">" + homepage + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>License:</b> <span class=\"items\">" + license + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Keywords:</b> <span class=\"items\">" + keywords + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Version:</b> <span class=\"items\">" + version + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Repository:</b> <span class=\"items\">" + repository + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Versions list:</b><span id=\"versionLink\"></span>\n\t\t\t\t\t\t<ul id=\"list\"></ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t";
        }
        else {
            //Verifications if there are such properties in GitHub request data
            if (gitHubData.name !== undefined && gitHubData.name !== null) {
                var name = gitHubData.name;
            }
            else {
                var name = "The name is not specified";
            }
            if (gitHubData.description !== undefined && gitHubData.description !== null) {
                var description = gitHubData.description;
            }
            else {
                var description = "The description is not specified";
            }
            if (gitHubData.language !== undefined && gitHubData.language !== null) {
                var language = gitHubData.language;
            }
            else {
                var language = "The language is not specified";
            }
            if (gitHubData.created_at !== undefined && gitHubData.created_at !== null) {
                var date = gitHubData.created_at.slice(0, gitHubData.created_at.indexOf('T'));
                var reversedDate = date.split('-').reverse().join('-');
                var time = gitHubData.created_at.slice(gitHubData.created_at.indexOf('T') + 1, gitHubData.created_at.indexOf('Z'));
                var created_at = reversedDate + ", " + time;
            }
            else {
                var created_at = "The date of creation is not specified";
            }
            if (gitHubData.pushed_at !== undefined && gitHubData.pushed_at !== null) {
                var commitDate = gitHubData.pushed_at.slice(0, gitHubData.pushed_at.indexOf('T'));
                var commitReversedDate = commitDate.split('-').reverse().join('-');
                var commitTime = gitHubData.pushed_at.slice(gitHubData.pushed_at.indexOf('T') + 1, gitHubData.pushed_at.indexOf('Z'));
                var lastCommit_at = commitReversedDate + ", " + commitTime;
            }
            else {
                var created_at = "The date of last commit is not specified";
            }
            if (gitHubData.owner.login !== undefined && gitHubData.owner.login !== null) {
                var ownerLogin = gitHubData.owner.login;
                if (gitHubData.owner.html_url !== undefined && gitHubData.owner.html_url !== null) {
                    var ownerHtml = gitHubData.owner.html_url;
                }
                else {
                    var owner = ownerLogin;
                }
            }
            else {
                var owner = "The owner is not specified";
            }
            var owner = "<a href=\"" + ownerHtml + "\" target=\"_blank\">" + ownerLogin + "</a>";
            placeForData.innerHTML = "\n\t\t\t\t<div class=\"tab\">\n\t\t\t\t\t<div class=\"tab-wrapper\">\n\t\t\t\t\t\t<button data-name=\"github\" class=\"tablinks\" id=\"defaultOpen\">GitHub info</button>\n\t\t\t\t\t  \t<button data-name=\"general\" class=\"tablinks\">General info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row tabcontent\" id=\"githubInfo\">\n\t\t\t\t  \t<div class=\"col s12\">\n\t\t\t\t  \t  \t<div class=\"card\">\n\t\t\t\t  \t  \t  \t<div class=\"card-image\">\n\t\t\t\t  \t  \t  \t  \t<img src=\"../assets/images/github.png\">\n\t\t\t\t  \t  \t  \t  \t<span class=\"card-title\">GitHub info</span>\n\t\t\t\t  \t  \t  \t  \t<a class=\"btn-floating halfway-fab waves-effect waves-light red\" href=\"" + gitHubData.html_url + "\" target=\"_blank\" title=\"Visit this repo on a GitHub!\"><i class=\"material-icons\">link</i></a>\n\t\t\t\t  \t  \t  \t</div>\n\t\t\t\t  \t  \t  \t<div class=\"card-content\">\n\t\t\t\t  \t  \t  \t  \t<ul class=\"collection with-header github-collection\">\n\t\t\t\t  \t  \t  \t  \t\t<li class=\"collection-header\">\n\t\t\t\t  \t  \t  \t  \t\t\t<h5><span class=\"items\">" + name + "</span></h5>\n\t\t\t\t  \t  \t  \t  \t\t\t<div>\n\t\t\t\t  \t  \t  \t  \t\t\t\t<span class=\".views\"> <i class=\"material-icons\">remove_red_eye</i> " + gitHubData.watchers + "</span>\n\t\t\t\t\t  \t  \t  \t  \t\t\t<span class=\".stars\">  <i class=\"material-icons\">star</i>" + gitHubData.stargazers_count + "</span>\n\t\t\t\t\t  \t  \t  \t  \t\t\t<span class=\".forks\"> <i class=\"material-icons\">device_hub</i> " + gitHubData.forks + "</span>\n\t\t\t\t  \t  \t  \t  \t\t\t</div>\n\t\t\t\t  \t  \t  \t  \t\t</li>\n\t\t\t\t  \t  \t  \t  \t\t<li class=\"collection-item\"><b>GitHub description: </b><span class=\"items\">" + description + "</span></li>\n\t\t\t\t  \t  \t  \t  \t\t<li class=\"collection-item\"><b>Language: </b><span class=\"items\">" + language + "</span></li>\n\t\t\t\t  \t  \t  \t  \t\t<li class=\"collection-item\"><b>Created at: </b><span class=\"items\">" + created_at + "</span></li>\n\t\t\t\t  \t  \t  \t  \t\t<li class=\"collection-item\"><b>Last commit: </b><span class=\"items\">" + lastCommit_at + "</span></li>\n\t\t\t\t  \t  \t  \t  \t\t<li class=\"collection-item\"><b>Creator: </b><span class=\"items\">" + owner + "</span></li>\n\t\t\t\t  \t  \t  \t  \t</ul>\n\t\t\t\t  \t  \t  \t</div>\n\t\t\t\t  \t  \t</div>\n\t\t\t\t  \t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<ul class=\"collection tabcontent\" id=\"generalInfo\">\n\t\t\t\t\t<li class=\"collection-item\"><b>Name:</b> " + data.name + "</li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Description:</b> <span class=\"items\">" + description + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Author:</b> <span class=\"items\">" + author + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Homepage:</b> <span class=\"items\">" + homepage + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>License:</b> <span class=\"items\">" + license + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Keywords:</b> <span class=\"items\">" + keywords + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Version:</b> <span class=\"items\">" + version + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Repository:</b> <span class=\"items\">" + repository + "</span></li>\n\t\t\t\t\t<li class=\"collection-item\"><b>Versions list:</b><span id=\"versionLink\"></span>\n\t\t\t\t\t\t<ul id=\"list\"></ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t";
        } /*------------------------------------End working with GitHub request data-----------------------------------*/
        //Manage tab buttons
        var tabLinks = document.getElementsByClassName("tablinks");
        for (var i = 0; i < tabLinks.length; i++) {
            if (tabLinks[i].attributes[0].value === 'github') {
                tabLinks[i].addEventListener('click', function (event) {
                    here.openInfo(event, 'githubInfo');
                });
            }
            else if (tabLinks[i].attributes[0].value === 'general') {
                tabLinks[i].addEventListener('click', function (event) {
                    here.openInfo(event, 'generalInfo');
                });
            }
        }
        //Open default tab
        document.getElementById("defaultOpen").click();
        //Stylization 'not-specified' items
        var items = document.getElementsByClassName("items");
        for (var i = 0; i < items.length; i++) {
            var text = items[i].innerHTML;
            if (text.indexOf("is not specified") !== -1) {
                items[i].classList.add("not-specified");
            }
        }
        //Insert assets (versions)
        var placeForAssets = document.getElementById("list");
        for (var i = 0; i < data.assets.length; i++) {
            placeForAssets.innerHTML += "\n\t\t\t\t<button class='chip grey darken-2' data-id=\"" + versionLinkPrimary + data.name + "/" + data.assets[i].version + "/\" \n\t\t\t\tid=\"modalTrigger\">" + data.assets[i].version + "</button>\n\t\t\t";
        }
        /*----------Start working with modal popup----------*/
        var chips = document.getElementsByClassName('chip');
        for (var i = 0; i < chips.length; i++) {
            chips[i].addEventListener('click', function () {
                var version = this.textContent;
                var baseUri = this.attributes[1].value;
                __WEBPACK_IMPORTED_MODULE_3_jquery__('body').css('overflow-y', 'hidden');
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.the-modal-header h3').text('Version: ' + version);
                for (var j = 0; j < data.assets.length; j++) {
                    if (data.assets[j].version === version) {
                        __WEBPACK_IMPORTED_MODULE_3_jquery__('.the-modal-body ul').empty();
                        __WEBPACK_IMPORTED_MODULE_3_jquery__("<li class=\"collection-header\"><h5>Links:</h5>\n\t\t\t\t\t\t\t\t<span class=\"question bounce quest-768px\"></span>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span class=\"tooltip-question\">CLICK for the link copying or DBLCLICK for the script tag copying.</span>\n\t\t\t\t\t\t\t\t\t<span class=\"question bounce\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class=\"tooltip-quest-768px\">CLICK for the link copying or DBLCLICK for the script tag copying.</p>\n\t\t\t\t\t\t\t</li>").appendTo('.the-modal-body ul');
                        for (var k = 0; k < data.assets[j].files.length; k++) {
                            __WEBPACK_IMPORTED_MODULE_3_jquery__("<li class=\"collection-item modal-collection\">\n\t\t\t\t\t\t\t\t\t<span class=\"link\">" + (baseUri + data.assets[j].files[k]) + "</span>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"tooltiptext\" data-tooltip=\"tooltip" + k + "\">Copied!</span>\n\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-floating btn-copy green darken-2\" data-link=\"" + (baseUri + data.assets[j].files[k]) + "\" data-tooltip=\"tooltip" + k + "\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">content_copy</i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>").appendTo('.the-modal-body ul');
                        }
                    }
                }
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.question').hover(function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.tooltip-question').fadeTo('fast', 1);
                }, function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.tooltip-question').fadeTo('fast', 0);
                });
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.quest-768px').hover(function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.tooltip-quest-768px').slideDown("slow");
                }, function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.tooltip-quest-768px').slideUp("slow");
                });
                /*-----Add events for a copy buttons-----*/
                var copyButtons = document.getElementsByClassName('btn-copy');
                for (var j = 0; j < copyButtons.length; j++) {
                    //Copy link:
                    copyButtons[j].addEventListener("click", function () {
                        var $temp = __WEBPACK_IMPORTED_MODULE_3_jquery__("<input>");
                        __WEBPACK_IMPORTED_MODULE_3_jquery__("body").append($temp);
                        $temp.val(this.attributes[1].value).select();
                        document.execCommand("copy");
                        $temp.remove();
                        var tooltips = __WEBPACK_IMPORTED_MODULE_3_jquery__('.tooltiptext');
                        for (var k = 0; k < tooltips.length; k++) {
                            if (tooltips[k].attributes[1].value === this.attributes[2].value) {
                                var selector = ".tooltiptext[data-tooltip='" + tooltips[k].attributes[1].value + "']";
                                __WEBPACK_IMPORTED_MODULE_3_jquery__(selector.toString()).fadeTo('slow', 1);
                                setTimeout(function () {
                                    __WEBPACK_IMPORTED_MODULE_3_jquery__(selector.toString()).fadeTo('slow', 0);
                                }, 1000);
                            }
                            ;
                        }
                        ;
                    });
                    //Copy script tag:
                    copyButtons[j].addEventListener("dblclick", function () {
                        var $temp = __WEBPACK_IMPORTED_MODULE_3_jquery__("<input>");
                        var value = "<script src=\"" + this.attributes[1].value + "\"></script>";
                        __WEBPACK_IMPORTED_MODULE_3_jquery__("body").append($temp);
                        $temp.val(value).select();
                        document.execCommand("copy");
                        $temp.remove();
                        var tooltips = __WEBPACK_IMPORTED_MODULE_3_jquery__('.tooltiptext');
                        for (var k = 0; k < tooltips.length; k++) {
                            if (tooltips[k].attributes[1].value === this.attributes[2].value) {
                                var selector = ".tooltiptext[data-tooltip='" + tooltips[k].attributes[1].value + "']";
                                __WEBPACK_IMPORTED_MODULE_3_jquery__(selector.toString()).fadeTo('slow', 1);
                                setTimeout(function () {
                                    __WEBPACK_IMPORTED_MODULE_3_jquery__(selector.toString()).fadeTo('slow', 0);
                                }, 2000);
                            }
                            ;
                        }
                        ;
                    });
                }
                ;
                //Add hover and pulse effects to modal:
                var collItems = document.getElementsByClassName('modal-collection');
                for (var j = 0; j < collItems.length; j++) {
                    collItems[j].addEventListener("mouseover", function () {
                        var buttonWrap = this.childNodes[3];
                        var button = buttonWrap.childNodes[3];
                        button.classList.add("pulse");
                    });
                    collItems[j].addEventListener("mouseout", function () {
                        var buttonWrap = this.childNodes[3];
                        var button = buttonWrap.childNodes[3];
                        button.classList.remove("pulse");
                    });
                    var buttonWrap = collItems[j].childNodes[3];
                    var button = buttonWrap.childNodes[3];
                    button.addEventListener("click", function () {
                        this.classList.remove("pulse");
                    });
                }
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#myModal').css('display', 'block');
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.bounce').css('-webkit-animation-name', 'bounce');
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.bounce').css('animation-name', 'bounce');
                }, 100);
            });
        } /*----------End working with modal popup----------*/
        here.data.setClickedFlag("false");
    };
    //Tab managing:
    NewpageComponent.prototype.openInfo = function (event, infoType) {
        var tabContent = document.getElementsByClassName("tabcontent");
        var tabLinks = document.getElementsByClassName("tablinks");
        for (var i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }
        document.getElementById(infoType).style.display = "block";
        event.currentTarget.className += " active";
    };
    NewpageComponent.prototype.animateFooter = function () {
        var here = this;
        var footerBrand = __WEBPACK_IMPORTED_MODULE_3_jquery__('#footerBrand');
        var footerLinks = __WEBPACK_IMPORTED_MODULE_3_jquery__('#footerLinks');
        var footerMotto = __WEBPACK_IMPORTED_MODULE_3_jquery__('#footerMotto');
        var scroll = __WEBPACK_IMPORTED_MODULE_3_jquery__(window).scrollTop() + __WEBPACK_IMPORTED_MODULE_3_jquery__(window).innerHeight();
        if (__WEBPACK_IMPORTED_MODULE_3_jquery__('body').height() > __WEBPACK_IMPORTED_MODULE_3_jquery__(window).height()) {
            //If content can't be fully placed in window:
            if (here.isBrandReady === false) {
                if (scroll >= footerBrand.offset().top + footerBrand.height()) {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('body').addClass('scroll-none');
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.brand-move').addClass('brand-move-animated');
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.brand-static').addClass('brand-static-animated');
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_3_jquery__('.brand-move').css('opacity', 1);
                    }, 200);
                    here.isBrandReady = true;
                }
            }
            if (here.areLinksReady === false) {
                if (scroll >= footerLinks.offset().top + footerLinks.height()) {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('body').addClass('scroll-none');
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.links-move').addClass('links-move-animated');
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.links-static').addClass('links-static-animated');
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_3_jquery__('.links-move').css('opacity', 1);
                    }, 200);
                    here.areLinksReady = true;
                }
            }
            if (here.isMottoReady === false) {
                if (scroll >= footerMotto.offset().top + footerMotto.height()) {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('body').addClass('scroll-none');
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.motto-move').addClass('motto-move-animated');
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('.motto-static').addClass('motto-static-animated');
                    setTimeout(function () {
                        __WEBPACK_IMPORTED_MODULE_3_jquery__('.motto-move').css('opacity', 1);
                    }, 200);
                    __WEBPACK_IMPORTED_MODULE_3_jquery__(document).unbind('scroll');
                    here.isMottoReady = true;
                }
            }
        }
        else {
            //If content can be placed in window:
            __WEBPACK_IMPORTED_MODULE_3_jquery__('body').addClass('scroll-none');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.brand-move').addClass('brand-move-animated');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.brand-static').addClass('brand-static-animated');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.brand-move').css('opacity', 1);
            }, 300);
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.links-move').addClass('links-move-animated');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.links-static').addClass('links-static-animated');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.links-move').css('opacity', 1);
            }, 300);
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.motto-move').addClass('motto-move-animated');
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.motto-static').addClass('motto-static-animated');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.motto-move').css('opacity', 1);
            }, 300);
            __WEBPACK_IMPORTED_MODULE_3_jquery__(document).unbind('scroll');
        }
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('body').removeClass('scroll-none');
        }, 500);
    };
    NewpageComponent.prototype.ngOnInit = function () {
        var here = this;
        var parameter;
        var modal = document.getElementById('myModal');
        var span = document.getElementById("close");
        //Manage navigation classes for adaptability adding
        __WEBPACK_IMPORTED_MODULE_3_jquery__('body').removeClass();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('body').addClass("newpage " + parameter);
        __WEBPACK_IMPORTED_MODULE_3_jquery__('nav').removeClass();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('nav').addClass("newpage");
        here.sub = here.route
            .params
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            parameter = params.name || 0;
        });
        here.showPage(parameter);
        // When user clicks on <span> (x), close the modal
        span.onclick = function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#myModal').fadeOut('slow', function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('body').css('overflow-y', 'auto');
            });
        };
        // When user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#myModal').fadeOut('slow', function () {
                    __WEBPACK_IMPORTED_MODULE_3_jquery__('body').css('overflow-y', 'auto');
                });
            }
        };
        window.onload = function () {
            /*-----Nav animation-----*/
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.main-nav').addClass('animated-main-nav');
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.main-nav').css('opacity', 1);
            }, 200);
            /*-----Footer animation-----*/
            __WEBPACK_IMPORTED_MODULE_3_jquery__(document).scroll(function () {
                here.animateFooter();
            });
            here.animateFooter();
        };
    };
    NewpageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return NewpageComponent;
}());
NewpageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-newpage',
        template: __webpack_require__("../../../../../src/app/newpage/newpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/newpage/newpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataoperations_service__["a" /* DataoperationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataoperations_service__["a" /* DataoperationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NewpageComponent);

var _a, _b, _c;
//# sourceMappingURL=newpage.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/error.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "error.c8e2170eb4888af9ab5a.png";

/***/ }),

/***/ "../../../../../src/assets/images/js-jumbo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "js-jumbo.344601e57ab1be2efc2f.png";

/***/ }),

/***/ "../../../../../src/assets/images/question.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "question.1be6f88cd80dac8af503.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map