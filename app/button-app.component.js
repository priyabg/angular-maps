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
var button_modal_component_1 = require('./button-modal.component');
var ButtonAppComponent = (function () {
    function ButtonAppComponent() {
    }
    __decorate([
        core_1.ViewChild(button_modal_component_1.ModalComponent), 
        __metadata('design:type', button_modal_component_1.ModalComponent)
    ], ButtonAppComponent.prototype, "modal", void 0);
    ButtonAppComponent = __decorate([
        core_1.Component({
            selector: 'button-app-component',
            templateUrl: './app/HFCCalculator.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonAppComponent);
    return ButtonAppComponent;
}());
exports.ButtonAppComponent = ButtonAppComponent;
//# sourceMappingURL=button-app.component.js.map