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
var Subject_1 = require('rxjs/Subject');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiSmartComponent = (function () {
    function WikiSmartComponent(_wikipediaService) {
        var _this = this;
        this._wikipediaService = _wikipediaService;
        this._searchTermStream = new Subject_1.Subject();
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.clicked = false;
        this.radiusUnits = [
            { value: 'feet', display: 'feet' },
            { value: 'miles', display: 'miles' },
            { value: 'mt', display: 'meters' }
        ];
        this.items = this._searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this._wikipediaService.search(term); });
    }
    WikiSmartComponent.prototype.search = function (term) {
        this.clicked = false;
        if (term)
            this._searchTermStream.next(term);
    };
    WikiSmartComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        this.clicked = true;
    };
    WikiSmartComponent = __decorate([
        core_1.Component({
            selector: 'my-wiki-smart',
            templateUrl: 'app/app.component.html',
            providers: [wikipedia_service_1.WikipediaService],
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
    ], WikiSmartComponent);
    return WikiSmartComponent;
}());
exports.WikiSmartComponent = WikiSmartComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=wiki-smart.component.js.map