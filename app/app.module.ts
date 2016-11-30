import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { WikiSmartComponent } from './wiki-smart.component';
import {  JsonpModule , HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { DataTableModule } from 'angular-2-data-table';
import { DataTableDemo1 } from './table/data-table-demo1';
import { DataTableDemo1Remote } from './table/data-table-demo1-remote';
import { Tab } from './tabs/tabs.component';
import { Tabs } from './tabs/tabs.component';
import { ButtonAppComponent } from './button-app.component';
import { ModalComponent } from './button-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgmYjjkxYVkEn9b3UiL1dHn5vHIibIaCc'
    }),
    DataTableModule
  ],
  declarations: [

    WikiSmartComponent, DataTableDemo1, DataTableDemo1Remote, Tabs, Tab,ModalComponent,ButtonAppComponent
  ],
  bootstrap: [ WikiSmartComponent ]
})
export class AppModule { }
