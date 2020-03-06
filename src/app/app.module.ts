import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GMapModule} from 'primeng/gmap';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {GrowlModule} from 'primeng/growl';
import {CheckboxModule} from 'primeng/checkbox';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MapComponent } from './map/map.component';

import { LoadingPageModule } from 'angular-loading-page';         //Loading directive
import { MaterialBarModule } from 'angular-loading-page';         //Loading animation component


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    GMapModule,
    DialogModule,
    InputTextModule,
    TabViewModule,
    ButtonModule,
    CodeHighlighterModule,
    GrowlModule,
    CommonModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoadingPageModule,
    MaterialBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
