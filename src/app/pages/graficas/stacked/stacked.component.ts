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
  selector: 'app-stacked',
  templateUrl: './stacked.component.html',
  styleUrls: ['./stacked.component.css']
})
export class StackedComponent implements OnInit {

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
    this.showLoading();
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: []
    };
  }

  ngOnInit() {
    this.loadChart();
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

  loadChart() {

    this.emotioniesService.loadAllEmotionies()
        .subscribe((resp: any) => {

            // this.position = Math.floor((Math.random() * (resp.length - 1)));

            this.position = 1;

            this.hideLoading();



            if (resp.length > this.position) {
                this.partida = this.emotioniesService.savePartida(resp[this.position]);

                // console.log(this.partida);

                let positions = this.partida.getMostValue();


                this.series = [{
                    data: this.partida.getPositionStacked(positions, 5),
                    name: 'POS6',

                  },{
                    data: this.partida.getPositionStacked(positions, 4),
                    name: 'POS5',
                  },{
                    data: this.partida.getPositionStacked(positions, 3),
                    name: 'POS4',
                  },{
                    data: this.partida.getPositionStacked(positions, 2),
                    name: 'POS3',
                  },{
                    data: this.partida.getPositionStacked(positions, 1),
                    name: 'POS2',
                  },
                  {
                    data: this.partida.getPositionStacked(positions, 0),
                    name: 'POS1',
                  }

                ];


                this.categories =  this.partida.getCategoriesStacked(positions);

                this.title = this.partida.correo;
                this.subtitle = this.partida.idPartida;
                this.paintChart();
            }

        });

}

paintChart() {
  this.chartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: this.title
    },
    xAxis: {
      categories: this.categories
    },
    yAxis: {
      min: 0,
      title: {
        text: '3 most value positive and negative emotions'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: this.series
  };
}



}
