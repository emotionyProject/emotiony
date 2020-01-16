import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import highchartsFunnel from 'highcharts/modules/funnel';

// import * as HighchartsMore from "highcharts/highcharts-more";
import { EmotioniesService } from '../../services/emotionies/emotionies.service';
import { Partida } from '../../models/partida.model';

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

categories =  ['EMO1', 'EMO2', 'EMO3', 'EMO4', 'EMO5', 'EMO6', 'EMO7', 'EMO8', 'EMO9', 'EMO10', 'EMO11', 'EMO12',
                'EMO13', 'EMO14', 'EMO15', 'EMO16', 'EMO17', 'EMO18'];

series = [{
    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    name: 'Pos 1',
    pointPlacement: 'on'
},{
    data: [1,4,8,14,5,16,5,8,7,5,4,2,7,9,11,12,3,18],
    name: 'Pos 2',
},
{
    data: [1,2,3,4,5,5,4,7,3,21,10,11,12,13,15,3,16,17],
    name: 'Pos 3',
},
{
    data: [18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
    name: 'Pos 4',
},
{
    data: [3,2,1,6,7,8,3,2,10,19,7,17,14,12,5,4,3,2],
    name: 'Pos 5',
},
{
    data: [6,4,7,6,7,1,2,7,8,9,17,15,1,12,18,6,13,12],
    name: 'Pos 6',
}
]


  title = "emotions";
  subtitle = "subtitulo"
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";

  chartCallback;
  
  chartOptions; 


constructor(
    public emotioniesService: EmotioniesService
) {


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

          series:  this.series

          };
 }

    ngOnInit() {
        this.loadChart();
    }


    loadChart() {
        this.emotioniesService.loadAllEmotionies()
        .subscribe((resp: any) => {

          if (resp.length > this.position) {
            this.partida = this.emotioniesService.savePartida(resp[this.position]);
            console.log(this.partida);

            console.log('emotion1', this.partida.getEmotions(0));

            this.series = [{
                data: this.partida.getEmotions(0),
                name: 'Pos 1',
                pointPlacement: 'on'
            },{
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
    
              series:  this.series
    
              };



          }









        });


    }

}


