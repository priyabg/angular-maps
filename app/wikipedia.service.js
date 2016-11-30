"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
var WikipediaService = (function () {
    function WikipediaService(http) {
        this.http = http;
    }
    WikipediaService.prototype.search = function (term) {
        var wikiUrl = 'http://localhost:8181/geolocation/rest/service/details';
        var params = new http_1.URLSearchParams();
        params.set('address', term); // the user's search value
        params.set('format', 'json');
        params.set('callback', 'JSON_CALLBACK');
        // TODO: Add error handling
        var rsstr = this.http
            .get(wikiUrl, { search: params });
        console.log('It works here' + rsstr);
        return rsstr.map(function (res) { return res.json().locations; }).catch(this.handleError);
    };
    WikipediaService.prototype.handleError = function (error) {
        console.error(error);
        //return Observable.throw('Server error');
    };
    WikipediaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WikipediaService);
    return WikipediaService;
}());
exports.WikipediaService = WikipediaService;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=wikipedia.service.js.map