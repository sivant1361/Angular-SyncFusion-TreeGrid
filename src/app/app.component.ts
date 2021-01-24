import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import {
  PageSettingsModel,
  SortSettingsModel,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: Object[];
  public pageSettings: PageSettingsModel;
  public sortSettings: SortSettingsModel;
  title = 'Sync Fusion Grids';

  ngOnInit(): void {
    this.data = sampleData;
    this.pageSettings = { pageSize: 15 };
    this.sortSettings = {
      columns:[
        {field:'taskName', direction:'Ascending'},
        {field:'taskID', direction:'Descending'},
      ]
    }
  }
}
