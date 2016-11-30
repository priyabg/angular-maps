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
var Tabs = (function () {
    function Tabs() {
        this.tabs = [];
    }
    Tabs.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
    };
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    Tabs = __decorate([
        core_1.Component({
            selector: 'tabs',
            template: "\n    <ul class=\"menu\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\" class=\"sub\" >\n        {{tab.tabTitle}}\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  ",
            styleUrls: ['app/tabs/tabs.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
}());
exports.Tabs = Tabs;
var Tab = (function () {
    function Tab(tabs) {
        tabs.addTab(this);
    }
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], Tab.prototype, "tabTitle", void 0);
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            template: "\n    <div class=\"data\" [hidden]=\"!active\">\n      <ng-content></ng-content>\n    </div>\n  ",
            styleUrls: ['app/tabs/tabs.css']
        }), 
        __metadata('design:paramtypes', [Tabs])
    ], Tab);
    return Tab;
}());
exports.Tab = Tab;
//# sourceMappingURL=tabs.component.js.map