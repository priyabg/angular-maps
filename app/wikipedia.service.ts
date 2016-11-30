import { Injectable,  } from '@angular/core';
import { Http, Jsonp, URLSearchParams, Response } from '@angular/http';
import { ResultBasket } from './wiki-smart.component';
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';

@Injectable()
export class WikipediaService {
  constructor(private http: Http) {}

  search (term: string) {


    let wikiUrl = 'http://localhost:8181/geolocation/rest/service/details';

    var params = new URLSearchParams();
    params.set('address', term); // the user's search value
    params.set('format', 'json');
    params.set('callback', 'JSON_CALLBACK');




    // TODO: Add error handling
     var rsstr= this.http
      .get(wikiUrl, { search: params });
    console.log('It works here' + rsstr);
   return rsstr.map(res => <ResultBasket[]>res.json().locations).catch(this.handleError);

  }

  public handleError(error: Response) {
    console.error(error);
    //return Observable.throw('Server error');
  }

  private basket: ResultBasket[];

}



/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
