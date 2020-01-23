import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import highchartsFunnel from 'highcharts/modules/funnel';

// import * as HighchartsMore from "highcharts/highcharts-more";
import { EmotioniesService } from '../../../services/emotionies/emotionies.service';
import { Partida } from '../../../models/partida.model';

import pareto from 'highcharts/modules/pareto';

highchartsMore(Highcharts);
highchartsFunnel(Highcharts);

pareto(Highcharts);

@Component({
  selector: 'app-pareto',
  templateUrl: './pareto.component.html',
  styleUrls: ['./pareto.component.css']
})
export class ParetoComponent implements OnInit {

  position: number = 0;
  partida: Partida;
  categories;
  series;

  title = 'emotions';
  subtitle = 'subtitulo';
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = 'chart';

  chartCallback;

  chartOptions;


  constructor(public emotioniesService: EmotioniesService) {
    this.chartOptions = {
      chart: {
        renderTo: 'container',
        type: 'column'
    },
    title: {
        text: 'Restaurants Complaints'
    },
    tooltip: {
        shared: true
    },
    xAxis: {
        categories: [
            'Overpriced',
            'Small portions',
            'Wait time',
            'Food is tasteless',
            'No atmosphere',
            'Not clean',
            'Too noisy',
            'Unfriendly staff'
        ],
        crosshair: true
    },
    yAxis: [{
        title: {
            text: ''
        }
    }, {
        title: {
            text: ''
        },
        minPadding: 0,
        maxPadding: 0,
        max: 100,
        min: 0,
        opposite: true,
        labels: {
            format: "{value}%"
        }
    }],
    series: [{
        type: 'pareto',
        name: 'Pareto',
        yAxis: 1,
        zIndex: 10,
        baseSeries: 1
    }, {
        name: 'Complaints',
        type: 'column',
        zIndex: 2,
        data: [755, 222, 151, 86, 72, 51, 36, 10]
    }]
};
   }

  ngOnInit() {
  }

}
