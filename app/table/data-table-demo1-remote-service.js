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
require('rxjs/add/operator/toPromise');
var BASE_URL = 'http://localhost:3000';
var RemoteService = (function () {
    function RemoteService(http) {
        this.http = http;
    }
    RemoteService.prototype.query = function (dparams) {
        var params = new http_1.URLSearchParams();
        params.set('_start', '1'); // the user's search value
        params.set('_limit', '10');
        params.set('_sort', dparams.sortBy);
        params.set('_order', dparams.sortAsc ? 'ASC' : 'DESC');
        return this.http.get(BASE_URL + '/people?', { search: params }).toPromise()
            .then(function (resp) { return ({
            items: resp.json(),
            count: Number(resp.headers.get('X-Total-Count'))
        }); }).catch(function (ex) {
            console.error('Error fetching users', ex);
        });
        ;
    };
    RemoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RemoteService);
    return RemoteService;
}());
exports.RemoteService = RemoteService;
//# sourceMappingURL=data-table-demo1-remote-service.js.map