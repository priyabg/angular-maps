import { Injectable }     from '@angular/core';
import { Component, ElementRef } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { DataTableParams } from 'angular-2-data-table';
import 'rxjs/add/operator/toPromise';
import {Observable}       from 'rxjs/Observable';
import {Subject}          from 'rxjs/Subject';


const BASE_URL = 'http://localhost:3000';

@Injectable()
export class RemoteService {

    constructor (private http: Http) {}

    query(dparams: DataTableParams) {

      var params = new URLSearchParams();
      params.set('_start', '1'); // the user's search value
      params.set('_limit', '10');
      params.set('_sort', dparams.sortBy);
      params.set('_order', dparams.sortAsc ? 'ASC' : 'DESC');

        return this.http.get(BASE_URL + '/people?', { search: params }).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            })).catch((ex) => {
            console.error('Error fetching users', ex);
          });;
    }
}
