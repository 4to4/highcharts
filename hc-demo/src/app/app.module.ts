import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreemapComponent } from './treemap/treemap.component';
import * as Highcharts from "highcharts";
import More from 'highcharts/highcharts-more';
More(Highcharts);

import Tree from 'highcharts/modules/treemap';
Tree(Highcharts);

import Heatmap from 'highcharts/modules/heatmap';
Heatmap(Highcharts);

import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

@NgModule({
  declarations: [
    AppComponent,
    TreemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
