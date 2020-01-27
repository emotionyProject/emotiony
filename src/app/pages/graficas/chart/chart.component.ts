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
    selector: 'app-chart',
    templateUrl: './chart.component.html'
})


export class ChartComponent implements OnInit {

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


    constructor(
        public emotioniesService: EmotioniesService
    ) {

        this.showLoading();

        this.chartOptions = {

            title: {
                text: ''
            },


            subtitle: {
                text: ''
            },


            chart: {
                polar: true,
                type: 'column',
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: this.categories,
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'circle',
                lineWidth: 0,
                min: 0
            },

            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on'
                }
            },

            series: []

        };
    }

    ngOnInit() {
        this.loadChartByStatus();
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



                    this.series = [{
                        data: this.partida.getEmotionsPositioned(0),
                        name: 'Pos 1',
                        pointPlacement: 'on'
                    }, {
                        data: this.partida.getEmotionsPositioned(1),
                        name: 'Pos 2',
                    },
                    {
                        data: this.partida.getEmotionsPositioned(2),
                        name: 'Pos 3',
                    },
                    {
                        data: this.partida.getEmotionsPositioned(3),
                        name: 'Pos 4',
                    },
                    {
                        data: this.partida.getEmotionsPositioned(4),
                        name: 'Pos 5',
                    },
                    {
                        data: this.partida.getEmotionsPositioned(5),
                        name: 'Pos 6',
                    }
                    ];

                    this.categories = [this.partida.getEmotionName(0), this.partida.getEmotionName(1), this.partida.getEmotionName(2),
                    this.partida.getEmotionName(3), this.partida.getEmotionName(4), this.partida.getEmotionName(5),
                    this.partida.getEmotionName(6), this.partida.getEmotionName(7), this.partida.getEmotionName(8),
                    this.partida.getEmotionName(9), this.partida.getEmotionName(10), this.partida.getEmotionName(11),
                    this.partida.getEmotionName(12), this.partida.getEmotionName(13), this.partida.getEmotionName(14),
                    this.partida.getEmotionName(15), this.partida.getEmotionName(16), this.partida.getEmotionName(17)];

                    this.title = this.partida.correo;
                    this.subtitle = this.partida.idPartida;
                    this.paintChart();



                }

            });


    }

    loadChart2() {

        this.emotioniesService.loadAllEmotionies()
            .subscribe((resp: any) => {

                this.position = Math.floor((Math.random() * (resp.length - 1)));

                this.hideLoading();
                if (resp.length > this.position) {
                    this.partida = this.emotioniesService.savePartida(resp[this.position]);
                    // console.log(this.partida);

                    // console.log('emotion1', this.partida.getEmotions(0));

                    this.series = [{
                        data: this.partida.getEmotions(0),
                        name: 'Pos 1',
                        pointPlacement: 'on'
                    }, {
                        data: this.partida.getEmotions(1),
                        name: 'Pos 2',
                    },
                    {
                        data: this.partida.getEmotions(2),
                        name: 'Pos 3',
                    },
                    {
                        data: this.partida.getEmotions(3),
                        name: 'Pos 4',
                    },
                    {
                        data: this.partida.getEmotions(4),
                        name: 'Pos 5',
                    },
                    {
                        data: this.partida.getEmotions(5),
                        name: 'Pos 6',
                    }
                    ];

                    this.title = this.partida.correo;
                    this.subtitle = this.partida.idPartida;
                    this.paintChart();

                }

            });


    }


    loadChartByStatus() {


        this.emotioniesService.loadAllEmotionies()
            .subscribe((resp: any) => {

                // this.position = Math.floor((Math.random() * (resp.length - 1)));


                this.position = this.emotioniesService.getPosition();
                console.log('posicion', this.position);

                this.hideLoading();


                if (resp.length > this.position) {
                    this.partida = this.emotioniesService.savePartida(resp[this.position]);
                    
                    // console.log(this.partida);



                    this.series = [{
                        data: this.partida.getEmoPositive(true),
                        name: 'Positivas',
                        pointPlacement: 'on'
                    }, {
                        data: this.partida.getEmoPositive(false),
                        name: 'Negativas',
                        pointPlacement: 'on'
                    }];

                    this.categories = [this.partida.getEmotionName(0), this.partida.getEmotionName(1), this.partida.getEmotionName(2),
                    this.partida.getEmotionName(3), this.partida.getEmotionName(4), this.partida.getEmotionName(5),
                    this.partida.getEmotionName(6), this.partida.getEmotionName(7), this.partida.getEmotionName(8),
                    this.partida.getEmotionName(9), this.partida.getEmotionName(10), this.partida.getEmotionName(11),
                    this.partida.getEmotionName(12), this.partida.getEmotionName(13), this.partida.getEmotionName(14),
                    this.partida.getEmotionName(15), this.partida.getEmotionName(16), this.partida.getEmotionName(17)];

                    this.title = this.partida.correo;
                    this.subtitle = this.partida.idPartida;

                    this.paintChart();

                }

            });


    }



    cargar() {
        this.loadChart();
        this.showLoading2();
    }

    cargar2() {
        this.loadChartByStatus();
        this.showLoading2();
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

    paintChart() {
        this.chartOptions = {

            title: {
                text: this.title,
                // style: {
                //     color: '#E0E0E3',
                //     textTransform: 'uppercase',
                //     fontSize: '20px'
                // }
            },


            subtitle: {
                text: this.subtitle,
                // style: {
                //     color: '#E0E0E3',
                //     textTransform: 'uppercase'
                // }
            },


            chart: {
                polar: true,
                type: 'column',
                // backgroundColor: {
                //     linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                //     stops: [
                //         [0, '#2a2a2b'],
                //         [1, '#3e3e40']
                //     ]
                // },
                // style: {
                //     fontFamily: '\'Unica One\', sans-serif'
                // },
                // plotBorderColor: '#606063'
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: this.categories,
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'circle',
                lineWidth: 0,
                min: 0
            },

            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on'
                }
            },

            credits: {
                enabled: false
            },

            loading: {
                labelStyle: {
                    fontStyle: 'italic'
                }
            },

            series: this.series

        };

    }

}
