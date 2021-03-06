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
var core_2 = require('@angular/core');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiComponent = (function () {
    function WikiComponent(_wikipediaService) {
        this._wikipediaService = _wikipediaService;
    }
    WikiComponent.prototype.search = function (term) {
        this.items = this._wikipediaService.search(term);
    };
    WikiComponent = __decorate([
        core_1.Component({
            selector: 'my-wiki',
            template: "\n    <h1>Wikipedia Demo</h1>\n    <p><i>Fetches after each keystroke</i></p>\n\n    <input #term (keyup)=\"search(term.value)\"/>\n    \n    <ul>\n      <li *ngFor=\"let item of items | async\">{{item}}</li>\n    </ul>\n  ",
            providers: [core_2.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService]
        }), 
        __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
    ], WikiComponent);
    return WikiComponent;
}());
exports.WikiComponent = WikiComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=wiki.component.js.map