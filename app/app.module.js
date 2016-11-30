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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var wiki_smart_component_1 = require('./wiki-smart.component');
var http_1 = require('@angular/http');
var core_2 = require('angular2-google-maps/core');
var angular_2_data_table_1 = require('angular-2-data-table');
var data_table_demo1_1 = require('./table/data-table-demo1');
var data_table_demo1_remote_1 = require('./table/data-table-demo1-remote');
var tabs_component_1 = require('./tabs/tabs.component');
var tabs_component_2 = require('./tabs/tabs.component');
var button_app_component_1 = require('./button-app.component');
var button_modal_component_1 = require('./button-modal.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.JsonpModule,
                http_1.HttpModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCgmYjjkxYVkEn9b3UiL1dHn5vHIibIaCc'
                }),
                angular_2_data_table_1.DataTableModule
            ],
            declarations: [
                wiki_smart_component_1.WikiSmartComponent, data_table_demo1_1.DataTableDemo1, data_table_demo1_remote_1.DataTableDemo1Remote, tabs_component_2.Tabs, tabs_component_1.Tab, button_modal_component_1.ModalComponent, button_app_component_1.ButtonAppComponent
            ],
            bootstrap: [wiki_smart_component_1.WikiSmartComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map