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

@Component({
    selector: 'app-semi-circle',
    templateUrl: './semi-circle.component.html',
    styleUrls: ['./semi-circle.component.css']
})
export class SemiCircleComponent implements OnInit {

    position: number = 0;
    partida: Partida;
    categories;
    series;
    emotionValue: PosValue[];

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
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                margin: [0, 0, 300, 0],
                plotShadow: false
            },
            title: {
                text: '',
                // text: '<p class="titleCircle">Browser<br>shares<br>2017</p>',
                align: 'center',
                fontSize: '3px',
                verticalAlign: 'middle',
                y: 0
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -100,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            credits: {
                position: {
                    y: -150
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    // ['Chrome', 58.9],
                    // ['Firefox', 13.29],
                    // ['Internet Explorer', 13],
                    // ['Edge', 3.78],
                    // ['Safari', 3.42],
                    {
                        name: 'Other',
                        y: 7.61,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        };
    }

    ngOnInit() {
        this.loadSemiCircle();
    }

    loadSemiCircle() {
        this.emotioniesService.loadAllEmotionies()
            .subscribe((resp: any) => {
                this.hideLoading();
                this.partida = this.emotioniesService.savePartida(resp[this.emotioniesService.getPosition()]);
                // this.partida = this.emotioniesService.savePartida(resp[1]);
                this.emotionValue = this.partida.getEmotionPercentage();
                console.log(this.emotionValue);
                this.paintParetoChart();

            });
    }

    paintParetoChart() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                margin: [0, 0, 175, 0],
                plotShadow: false
            },
            title: {
                text: this.partida.correo,
                align: 'center',
                style: {
                    fontSize: '1.2em'
                },
                verticalAlign: 'middle',
                y: 0
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    [this.getEmo(this.emotionValue[0].pos), this.emotionValue[0].value],
                    [this.getEmo(this.emotionValue[1].pos), this.emotionValue[1].value],
                    [this.getEmo(this.emotionValue[2].pos), this.emotionValue[2].value],
                    [this.getEmo(this.emotionValue[3].pos), this.emotionValue[3].value],
                    [this.getEmo(this.emotionValue[4].pos), this.emotionValue[4].value],
                    [this.getEmo(this.emotionValue[5].pos), this.emotionValue[5].value],
                    [this.getEmo(this.emotionValue[6].pos), this.emotionValue[6].value],
                    //   [this.getEmo(this.emotionValue[7].pos), this.emotionValue[7].value ],
                    //   [this.getEmo(this.emotionValue[8].pos), this.emotionValue[8].value ],
                    //   [this.getEmo(this.emotionValue[9].pos), this.emotionValue[9].value ],
                    //   [this.getEmo(this.emotionValue[10].pos), this.emotionValue[10].value ],
                    //   [this.getEmo(this.emotionValue[11].pos), this.emotionValue[11].value ],
                    //   [this.getEmo(this.emotionValue[12].pos), this.emotionValue[12].value ],
                    //   [this.getEmo(this.emotionValue[13].pos), this.emotionValue[13].value ],
                    //   [this.getEmo(this.emotionValue[14].pos), this.emotionValue[14].value ],
                    //   [this.getEmo(this.emotionValue[15].pos), this.emotionValue[15].value ],
                    //   [this.getEmo(this.emotionValue[16].pos), this.emotionValue[16].value ],
                    //   [this.getEmo(this.emotionValue[17].pos), this.emotionValue[17].value ],
                    {
                        name: 'Other',
                        y: 7.61,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        };
    }

    getEmo(pos: number) {
        pos = pos + 1;
        return 'EMO' + pos;
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
