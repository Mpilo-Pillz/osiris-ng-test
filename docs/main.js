(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-card></app-user-card>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-card/user-card.component */ "./src/app/user-card/user-card.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_card_user_card_component__WEBPACK_IMPORTED_MODULE_5__["UserCardComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/user-card/user-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-card/user-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".u-card-custom {\r\n  position: absolute;\r\n  left: 30%;\r\n  width: 40%;\r\n  height: 40%;\r\n  top: 300px;\r\n  border-radius: 1%;\r\n  box-shadow: 1px 4px 10px rgba(0, 0, 0, .3);\r\n}\r\n\r\n.u-container-custom {\r\n  margin: 0px 0px 0px 0px;\r\n  height: 50%;\r\n  padding: 150px 150px 150px 150px;\r\n  background-color: #2C2E31;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .u-card-custom {\r\n    width: 90%;\r\n    box-shadow: 1px 4px 10px rgba(0, 0, 0, .3);\r\n    margin-left: -90px;\r\n\r\n  }\r\n\r\n  .u-container-custom {\r\n    margin: 0px 0px 0px 0px;\r\n    height: 50%;\r\n    background-color: #2C2E31;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jYXJkL3VzZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUlBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMENBQTBDO0lBQzFDLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY2FyZC91c2VyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51LWNhcmQtY3VzdG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzAlO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgdG9wOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxJTtcclxuICBib3gtc2hhZG93OiAxcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbn1cclxuXHJcbi51LWNvbnRhaW5lci1jdXN0b20ge1xyXG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHBhZGRpbmc6IDE1MHB4IDE1MHB4IDE1MHB4IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQzJFMzE7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAudS1jYXJkLWN1c3RvbSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC05MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC51LWNvbnRhaW5lci1jdXN0b20ge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzJFMzE7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user-card/user-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-card/user-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"u-padding--none u-margin--tp-sm u-container-custom \">\r\n  <div class=\"row \">\r\n    <div class=\"u-content--center \">\r\n      <div class=\"c-card u-text--centered u-card-custom\">\r\n        <app-user-details></app-user-details>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-card/user-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-card/user-card.component.ts ***!
  \**************************************************/
/*! exports provided: UserCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCardComponent", function() { return UserCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserCardComponent = /** @class */ (function () {
    function UserCardComponent() {
    }
    UserCardComponent.prototype.ngOnInit = function () { };
    UserCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-card',
            template: __webpack_require__(/*! ./user-card.component.html */ "./src/app/user-card/user-card.component.html"),
            styles: [__webpack_require__(/*! ./user-card.component.css */ "./src/app/user-card/user-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserCardComponent);
    return UserCardComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-details/user-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notconnected {\r\n  color: #DA3A00;\r\n}\r\n\r\n.u-image-custom {\r\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, .5);\r\n  border: 1px solid #D5D5D5;\r\n  padding: 4px;\r\n  height: 160px;\r\n  width: 160px;\r\n\r\n}\r\n\r\n#c-card__margin-custom {\r\n  margin-bottom: 80px;\r\n  background-color: #F9F9F9;\r\n  height: 120px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZOztBQUVkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90Y29ubmVjdGVkIHtcclxuICBjb2xvcjogI0RBM0EwMDtcclxufVxyXG5cclxuLnUtaW1hZ2UtY3VzdG9tIHtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDVENTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICB3aWR0aDogMTYwcHg7XHJcblxyXG59XHJcblxyXG4jYy1jYXJkX19tYXJnaW4tY3VzdG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-card__content u-padding--none u-border--none\">\r\n  <div class=\"c-card__header u-border--bottom\" id=\"c-card__margin-custom\">\r\n    <img class=\"u-image u-image--150 u-image--rounded u-image-custom\" src=\"{{ userDetails?.picture.large }}\"\r\n      alt=\"user Image\">\r\n  </div>\r\n</div>\r\n\r\n<div>\r\n  <h3 class=\"c-card__subtitle u-margin--none\" [ngClass]=\"{'notconnected': !connectionToApi}\">\r\n    {{ userDetailsIntro }}\r\n  </h3>\r\n\r\n  <h2 class=\"c-card__title u-text--lg\" [ngClass]=\"{'notconnected': !connectionToApi}\">\r\n    {{ userDetailsContentFromApi }}\r\n  </h2>\r\n</div>\r\n\r\n<ul class=\"c-tabs l-row u-grid-justify--center u-padding--md\" [hidden]=\"!connectionToApi\">\r\n\r\n  <li class=\"c-tabs__list\" (mouseenter)=\"onMouseIn('name')\">\r\n    <a class=\"c-tabs__link u-padding--sm\">\r\n      <input type=\"image\" class=\"u-image--24\" src=\"./assets/icons/svg/misc/user.svg\">\r\n    </a>\r\n  </li>\r\n  <li class=\"c-tabs__list\" (mouseenter)=\"onMouseIn('email')\">\r\n    <a class=\"c-tabs__link u-padding--sm\">\r\n      <input type=\"image\" class=\"u-image--24\" src=\"./assets/icons/svg/misc/email.svg\" alt=\"\">\r\n    </a>\r\n  </li>\r\n  <li (mouseenter)=\"onMouseIn('calendar')\" class=\"c-tabs__list\">\r\n    <a class=\"c-tabs__link u-padding--sm\">\r\n      <input type=\"image\" class=\"u-image--24\" src=\"./assets/icons/svg/misc/calendar.svg\" alt=\"\">\r\n    </a>\r\n  </li>\r\n  <li (mouseenter)=\"onMouseIn('location') \" class=\"c-tabs__list\">\r\n    <a class=\"c-tabs__link u-padding--sm\">\r\n      <input type=\"image\" class=\"u-image--24\" src=\"./assets/icons/svg/misc/map-location.svg\" alt=\"\">\r\n    </a>\r\n  </li>\r\n  <li (mouseenter)=\"onMouseIn('call') \" class=\"c-tabs__list\">\r\n    <a class=\"c-tabs__link u-padding--sm\">\r\n      <input type=\"image\" class=\"u-image--24\" src=\"./assets/icons/svg/misc/call.svg\" alt=\"\">\r\n    </a>\r\n  </li>\r\n  <li (mouseenter)=\"onMouseIn('locked') \" class=\"c-tabs__list\">\r\n    <a class=\"c-tabs__link u-padding--sm\">\r\n      <input type=\"image\" class=\"u-image--24\" src=\"./assets/icons/svg/misc/locked.svg\" alt=\"\">\r\n    </a>\r\n  </li>\r\n\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userService) {
        this.userService = userService;
        this.userDetailsIntro = 'to change the values';
        this.userDetailsContentFromApi = 'move mouse over the icons';
        this.connectionToApi = false;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getSpecificDataFromAPI();
    };
    UserDetailsComponent.prototype.getSpecificDataFromAPI = function () {
        var _this = this;
        return this.userService.getDataFromRandomAPI()
            .subscribe(function (apiData) {
            _this.connectionToApi = true;
            _this.userDetails = apiData['results'][0];
        }, function (err) {
            console.log('could not fetch data from the url');
            _this.connectionToApi = false;
            _this.userDetailsIntro = 'Connection Failed!!!';
            _this.userDetailsContentFromApi = 'Data could not be fetched!';
        });
    };
    UserDetailsComponent.prototype.onMouseIn = function (userPropertyName) {
        switch (userPropertyName) {
            case 'name':
                var titleOfUser = this.userDetails.name.title;
                var upperCaseFirstLetterOfTitle = titleOfUser.charAt(0).toUpperCase() + titleOfUser.slice(1);
                var firstName = this.userDetails.name.first;
                var lastName = this.userDetails.name.last;
                this.userDetailsIntro = 'Hi, My name is';
                this.userDetailsContentFromApi = upperCaseFirstLetterOfTitle + '. ' + firstName + ' ' + lastName;
                break;
            case 'email':
                this.userDetailsIntro = 'My email address is';
                this.userDetailsContentFromApi = this.userDetails.email;
                break;
            case 'calendar':
                var dateFromJSON = new Date(this.userDetails.dob.date);
                var dateAfterFormat = dateFromJSON.getDate() + '/' + (dateFromJSON.getMonth() + 1) + '/' + dateFromJSON.getFullYear();
                console.log(dateAfterFormat);
                this.userDetailsIntro = 'My birthday is';
                this.userDetailsContentFromApi = dateAfterFormat;
                break;
            case 'location':
                var address = this.userDetails.location.postcode + ' - ' + this.userDetails.location.street;
                this.userDetailsIntro = 'My address is';
                this.userDetailsContentFromApi = address;
                break;
            case 'call':
                this.userDetailsIntro = 'My phone number is';
                this.userDetailsContentFromApi = this.userDetails.phone;
                break;
            case 'locked':
                this.userDetailsIntro = 'My password is';
                this.userDetailsContentFromApi = this.userDetails.login.password;
                break;
            default:
                break;
        }
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user-details/user-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'https://randomuser.me/api/';
    }
    UserService.prototype.getDataFromRandomAPI = function () {
        return this.http.get(this.apiUrl);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tenacity\Documents\Projects\dla-mini-studio-web-projects\osiris-ng-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map