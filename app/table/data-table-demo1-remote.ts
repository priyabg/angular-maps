import { Component } from '@angular/core';
import { RemoteService } from './data-table-demo1-remote-service';


@Component({
    selector: 'data-table-demo-1-remote',
    providers: [RemoteService],
    templateUrl: 'app/table/data-table-demo1.html',
    styleUrls: ['app/table/data-table-demo1.css']
})
export class DataTableDemo1Remote {

    items: any[];
    itemCount:number;

    constructor(private remoteService: RemoteService) {}

    reloadItems(params:any) { this.itemCount = 0;
        this.remoteService.query(params).then(result => {
            this.items = result.items;
            this.itemCount = result.count;
        });
    }
}
