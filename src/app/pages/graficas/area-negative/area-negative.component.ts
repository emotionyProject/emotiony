import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import highchartsFunnel from 'highcharts/modules/funnel';

// import * as HighchartsMore from "highcharts/highcharts-more";
import { EmotioniesService } from '../../../services/emotionies/emotionies.service';
import { Partida } from '../../../models/partida.model';

highchartsMore(Highcharts);
highchartsFunnel(Highcharts);
// HighchartsMore(Highcharts);


@Component({
  selector: 'app-area-negative',
  templateUrl: './area-negative.component.html',
  styleUrls: ['./area-negative.component.css']
})
export class AreaNegativeComponent implements OnInit {

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
          type: 'area'
      },
      title: {
          text: 'Area chart with negative values'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, -2, -3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
      }]
    };
  }

  ngOnInit() {
  }

}
