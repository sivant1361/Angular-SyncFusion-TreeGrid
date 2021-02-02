import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { SaveEventArgs } from '@syncfusion/ej2-grids';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: Object[];
  public editSettings: EditSettingsModel;
  public toolBar: string[];
  public taskData: ITaskModel;

  title = 'Sync Fusion Grids';

  ngOnInit(): void {
    this.data = sampleData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      // modes available = Row , Cell, Dialog
      mode: 'Dialog',
    };
    this.toolBar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }

  actionBegin(args: SaveEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.taskData = Object.assign({}, args.rowData);
    }
  }
}
export interface ITaskModel {
  taskID?: Number;
  taskName?: String;
  startDate?: Date;
  duration?: Number;
  progress?: Number;
  priority?: String;
  approved?: Boolean;
}
