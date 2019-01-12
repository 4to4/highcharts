import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import More from 'highcharts/highcharts-more';
More(Highcharts);

import Tree from 'highcharts/modules/treemap';
Tree(Highcharts);

import Heatmap from 'highcharts/modules/heatmap';
Heatmap(Highcharts);

import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css']
})
export class TreemapComponent implements OnInit {
  // name = `Angular! v${VERSION.full}`;
  // @ViewChild("container", { read: ElementRef }) container: ElementRef;

  constructor() {
  }
  ngOnInit() {
    Highcharts.chart('container', {
          colorAxis: {
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },
    series: [{
        type: 'treemap',
        //layoutAlgorithm: 'squarified',
        data: [{
            name: 'A',
            value: 6,
            colorValue: 1
        }, {
            name: 'B',
            value: 6,
            colorValue: 2
        }, {
            name: 'C',
            value: 4,
            colorValue: 3
        }, {
            name: 'D',
            value: 3,
            colorValue: 4
        }, {
            name: 'E',
            value: 2,
            colorValue: 5
        }, {
            name: 'F',
            value: 2,
            colorValue: 6
        }, {
            name: 'G',
            value: 1,
            colorValue: 7
        }]
    }],
    title: {
        text: 'Highcharts Treemap'
    }
    })
  }
}
