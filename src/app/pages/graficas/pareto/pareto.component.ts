import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import highchartsFunnel from 'highcharts/modules/funnel';

// import * as HighchartsMore from "highcharts/highcharts-more";
import { EmotioniesService } from '../../../services/emotionies/emotionies.service';
import { Partida } from '../../../models/partida.model';


import pareto from 'highcharts/modules/pareto';
import { PosValue } from '../../../interface/posValue.interface';
import { typeEmotion } from '../../../models/typeEmotion';


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
        
        this.showLoading();
        this.chartOptions = {
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: ''
            },
            tooltip: {
                shared: true
            },
            xAxis: {
                categories: [
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
                    format: '{value}%'
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
        this.loadParetoChart();
    }

    loadParetoChart() {
        this.emotioniesService.loadAllEmotionies()
            .subscribe((resp: any) => {
                this.hideLoading();
                this.partida = this.emotioniesService.savePartida(resp[this.emotioniesService.getPosition()]);
                let mostValue: PosValue[] = this.partida.getMostPrimaryEmotions();
                this.categories = this.getMostCategories(8, mostValue);
                this.series = this.getMostSeries(8, mostValue);
                this.paintParetoChart();
            });
    }

    paintParetoChart() {
        this.chartOptions = {
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                // text: this.partida.correo
                text: 'emotion by PARETO'
            },
            tooltip: {
                shared: true
            },
            xAxis: {
                categories: this.categories,
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
                    format: '{value}%'
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
                data: this.series
            }]
        };
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


    getMostCategories(posMax: number, emotionValue: PosValue[]) {
        let categories = [];
        let pos = 0;
        for (let i = 0; i < posMax; i++) {
            pos = emotionValue[i].pos + 1;
            //categories.push('EMO' + pos);
            categories.push(typeEmotion[pos-1]);
        }
        return categories;
    }

    getMostSeries(posMax: number, emotionValue: PosValue[]) {
        let series = [];
        for (let i = 0; i < posMax; i++) {
            series.push(emotionValue[i].value);
        }
        return series;
    }

}
