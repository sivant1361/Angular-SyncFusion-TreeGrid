import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TreeGridModule,
  EditService,
  ToolbarService,
} from '@syncfusion/ej2-angular-treegrid';
import { FormsModule } from '@angular/forms';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    FormsModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    CheckBoxAllModule,
  ],
  providers: [EditService, ToolbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
