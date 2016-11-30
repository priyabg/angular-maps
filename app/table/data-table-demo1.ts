import { Component } from '@angular/core';
import { DataTableResource } from 'angular-2-data-table';
import persons from './data-table-demo1-data';


@Component({
    selector: 'data-table-demo-1',
    providers: [],
    templateUrl: 'app/table/data-table-demo1.html',
    styleUrls: ['app/table/data-table-demo1.css']
})
export class DataTableDemo1 {

    itemResource = new DataTableResource(persons);
    items: any[];
    itemCount: number;

    constructor() {
      console.log("here=========>" + this.itemResource.count())
      this.itemCount = 0;
      this.itemResource.count().then(count => this.itemCount = count);
      console.log("finish=========>" + this.itemCount )
    }

    reloadItems(params:any) {
        console.log("Params===>" + params);
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent:any) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent:any) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item:any) { return item.jobTitle; }
}
