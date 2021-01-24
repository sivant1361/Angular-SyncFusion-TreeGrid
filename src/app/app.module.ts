import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TreeGridModule,
  PageService,
  SortService,
  FilterService,
} from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TreeGridModule],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
