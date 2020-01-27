import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import highchartsFunnel from 'highcharts/modules/funnel';

// import * as HighchartsMore from "highcharts/highcharts-more";
import { EmotioniesService } from '../../../services/emotionies/emotionies.service';
import { Partida } from '../../../models/partida.model';
import { PosValue } from '../../../interface/posValue.interface';

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
  seriePositive;
  serieNegative;

  title = 'emotions';
  subtitle = 'subtitulo';
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = 'chart';

  chartCallback;

  chartOptions;


  constructor(public emotioniesService: EmotioniesService) {
    this.showLoading();
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: []
      },
      credits: {
        enabled: false
      },
      series: []
    };
  }

  ngOnInit() {
    this.loadAreaChart();
  }

  loadAreaChart() {
    this.emotioniesService.loadAllEmotionies()
      .subscribe((resp: any) => {
        this.hideLoading();
        this.partida = this.emotioniesService.savePartida(resp[this.emotioniesService.getPosition()]);
        let mostValue: PosValue[] = this.partida.getArrayEmo();
        let positives: PosValue[] = mostValue.slice(0, 9);
        let negatives: PosValue[] = mostValue.slice(9, 18);
        negatives.map((a: PosValue) => a.value = a.value * -1);
        // console.log(negatives);
        this.seriePositive = this.getSerie(positives);
        this.serieNegative = this.getSerie(negatives);

        this.paintAreaChart();
      });

  }

  paintAreaChart() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: this.partida.correo
      },
      xAxis: {
        categories: ['EMO1/EMO10', 'EMO2/EMO11', 'EMO3/EMO12', 'EMO4/EMO13',
          'EMO5/EMO14', 'EMO6/EMO15', 'EMO7/EMO16', 'EMO8/EMO116', 'EMO9/EMO18']
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Positives',
        data: this.seriePositive
      }, {
        name: 'Negatives',
        data: this.serieNegative
      }]
    };
  }

  getSerie(serie: PosValue[]) {
    let seriePositive = [];
    for (let i = 0; i < serie.length; i++) {
      seriePositive.push(serie[i].value);
    }
    return seriePositive;
  }

  showLoading() {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
      self.chart.showLoading();
    };
  }

  hideLoading() {
    const self = this;
    this.chart.hideLoading();
  }

  showLoading2() {
    const self = this;
    this.chart.showLoading();
  }


}
