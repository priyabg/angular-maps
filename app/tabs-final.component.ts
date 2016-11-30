import { Component, ElementRef } from '@angular/core';
import { Injectable, Input } from '@angular/core';
import {JsonpModule} from '@angular/http';
import {Observable}       from 'rxjs/Observable';
import {Subject}          from 'rxjs/Subject';

@Component({
  selector: 'tabs',
  template: `
    <ul class="menu">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active" class="sub" >
        {{tab.tabTitle}}
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styleUrls: ['app/tabs.css']
})
export class Tabs {
  tabs: Tab[] = [];

  selectTab(tab: Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}

@Component({
  selector: 'tab',
  template: `
    <div class="data" [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['app/tabs.css']
})
export class Tab {

  @Input() tabTitle: string;
  active: boolean;

  constructor(tabs:Tabs) {
    tabs.addTab(this);
  }
}
