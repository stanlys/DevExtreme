import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxLoadIndicatorModule,
  DxMultiViewModule,
  DxPopupModule,
  DxTemplateModule,
} from 'devextreme-angular';

import { HttpClientModule } from '@angular/common/http';
import { IssuelistComponent } from './components/modal/issuelist/issuelist.component';
import { IssueComponent } from './components/modal/issue/issue.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuelistComponent,
    IssueComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxPopupModule,
    HttpClientModule,
    DxMultiViewModule,
    DxCheckBoxModule,
    DxTemplateModule,
    DxLoadIndicatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
