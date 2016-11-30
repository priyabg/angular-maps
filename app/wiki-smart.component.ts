import { Component, ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import {JsonpModule} from '@angular/http';
import {Observable}       from 'rxjs/Observable';
import {Subject}          from 'rxjs/Subject';

import {WikipediaService} from './wikipedia.service';

@Component({
  selector: 'my-wiki-smart',
  templateUrl: 'app/app.component.html',
  providers:[ WikipediaService],
  styleUrls: ['app/app.component.css']
})
export class WikiSmartComponent {

  constructor (private _wikipediaService: WikipediaService) { }

  private _searchTermStream = new Subject<string>();

  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  clicked:boolean =false;

  selectedItem: Result;

  public radiusUnits = [
    { value: 'feet', display: 'feet' },
    { value: 'miles', display: 'miles' },
    { value: 'mt', display: 'meters' }
  ];

  search(term:string) {
    this.clicked = false;
    if(term)
    this._searchTermStream.next(term);
  }

  onSelect(item: Result): void {
    this.selectedItem = item;
    this.clicked = true;
  }

  items:Observable<ResultBasket[]> = this._searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term:string) => this._wikipediaService.search(term));




}



export interface ResultBasket {

  ResultList: Result[];

}


export interface Result {

  formattedAddress: string;
  location: Location;

}


export interface Location {

  lat: number;
  lng: number;

}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
