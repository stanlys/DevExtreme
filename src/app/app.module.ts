import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxMultiViewModule,
  DxPopupModule,
  DxTemplateModule,
} from 'devextreme-angular';

import { HttpClientModule } from '@angular/common/http';
import { IssuelistComponent } from './components/modal/issuelist/issuelist.component';
import { IssueComponent } from './components/modal/issue/issue.component';

@NgModule({
  declarations: [AppComponent, IssuelistComponent, IssueComponent],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxPopupModule,
    HttpClientModule,
    DxMultiViewModule,
    DxCheckBoxModule,
    DxTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
