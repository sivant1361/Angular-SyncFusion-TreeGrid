import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import { CommandModel } from '@syncfusion/ej2-grids';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: Object[];
  public editSettings: EditSettingsModel;
  public toolBar: string[];
  public numericParams: Object;
  public commands: CommandModel[];

  title = 'Sync Fusion Grids';

  ngOnInit(): void {
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      // modes available = Row , Cell, Dialog
      mode: 'Dialog',
    };
    this.toolBar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.numericParams = { params: { format: 'n' } };
    this.commands = [
      {
        type: 'Edit',
        buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' },
      },
      {
        type: 'Delete',
        buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' },
      },
      {
        type: 'Save',
        buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' },
      },
      {
        type: 'Cancel',
        buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' },
      },
    ];
    this.data = sampleData;
  }
}
