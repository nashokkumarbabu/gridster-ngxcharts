import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GridsterModule } from 'angular-gridster2';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'



@NgModule({
  imports:      [ 
    BrowserModule,BrowserAnimationsModule, FormsModule, GridsterModule, NgxChartsModule, NgbModule, MenubarModule
  ],
  declarations: [ AppComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
