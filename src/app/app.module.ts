import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {
  DxButtonModule,
  DxDataGridModule,
  DxPopupModule,
} from 'devextreme-angular';

import { HttpClientModule } from '@angular/common/http';
import { HomepagelinkComponent } from './components/homepagelink/homepagelink.component';

@NgModule({
  declarations: [AppComponent, HomepagelinkComponent],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxDataGridModule,
    DxPopupModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
