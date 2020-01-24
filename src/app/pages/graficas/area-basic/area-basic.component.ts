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
  selector: 'app-area-basic',
  templateUrl: './area-basic.component.html',
  styleUrls: ['./area-basic.component.css']
})
export class AreaBasicComponent implements OnInit {

  position: number = 0;
  partida: Partida;
  games: number[];
  // array con numero de usuarios en cada fragmento de tiempo
  usersGame:number[];
  // array de usuarios en string en cada fragmento de tiempo
  users: string[][];
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
    this.categories = this.getCategories(17,20,15);
    
    this.chartOptions = {
      chart: {
        type: 'area'
    },
    accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
    },
    title: {
        text: 'Emotionies Stats'
    },
    subtitle: {
        text: '(Users & Games)'
    },
    xAxis: {
        // minute: '%H:%M',
        allowDecimals: true,
        categories: this.categories,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        },
        // accessibility: {
        //     rangeDescription: 'Range: 17:28 to 19:45.'
        // }
    },
    yAxis: {
        title: {
            text: 'Emotionies Stats'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 0,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'users',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 23
        ]
    }, {
        name: 'games',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12,13
        ]
    }]
    };
   }

  ngOnInit() {
    this.loadChart();
  }

  getCategories(horaInicial, horaFinal, timeMinutes){
      let minutes = 0;
      let categories=['17:00'];
      let i =horaInicial;
      while(i<horaFinal){
        minutes = minutes + 15;
        if(minutes>=60){
            minutes= minutes- 60;
            i++;
        }
        if(minutes === 0){
            categories.push(i.toString() + ':00');
        }else {
            categories.push(i.toString() + ':' + minutes.toString());
        }
      }
      return categories;
 }

    incrGameDate(d: Date) {
        let hora  = d.getHours();
        let minuto = d.getMinutes();
        let encontrado = false;

        let horaCategories;
        let minutoCategories;
        for(let i = 0; i < this.categories.length && !encontrado; i++) {
            horaCategories = this.categories[i].charAt(0) + this.categories[i].charAt(1);
            minutoCategories = this.categories[i].charAt(3) + this.categories[i].charAt(4);
            if (hora === parseInt(horaCategories) && minuto <= parseInt(minutoCategories)){
                this.games[i] ++;
                encontrado = true;
            }
 
        }
    }

    incUserDate(d: Date, email: string){
        let hora  = d.getHours();
        let minuto = d.getMinutes();
        let encontrado = false;

        let horaCategories;
        let minutoCategories;
        for(let i = 0; i < this.categories.length && !encontrado; i++) {
            horaCategories = this.categories[i].charAt(0) + this.categories[i].charAt(1);
            minutoCategories = this.categories[i].charAt(3) + this.categories[i].charAt(4);
            if (hora === parseInt(horaCategories) && minuto <= parseInt(minutoCategories)){
                if (this.users[i].includes(email) === false) {
                    this.users[i].push(email);
                }else{
                    console.log("repetido");
                }
                encontrado = true;
            }
 
        }
    }

    loadChart() {
        
        this.emotioniesService.loadAllEmotionies()
        .subscribe((resp: any) => {
            this.games = new Array(this.categories.length);
            this.usersGame = new Array(this.categories.length);
            for( let i = 0; i < this.games.length; i++){
                this.games[i] = 0;
                this.usersGame[i] = 0;
            }
            this.users = new Array(this.categories.length);
            for(let i=0; i< this.users.length; i++){
                this.users[i] = [];
            }
            let d;
            let fechaString;
            for(let a=0; a< resp.length; a++){
                fechaString=resp[a].Fecha;
                if(fechaString.charAt(0) + fechaString.charAt(1) > 12){
                    // console.log('fecha', fechaString);
                    fechaString = resp[a].Fecha.charAt(3).concat(resp[a].Fecha.charAt(4)).concat('/')
                                    .concat(resp[a].Fecha.charAt(0)).concat(resp[a].Fecha.charAt(1))
                                    .concat(resp[a].Fecha.substr(5, resp[a].Fecha.length - 1));
                }
    
                d = new Date(fechaString);
                this.incrGameDate(d);
                this.incUserDate(d,resp[a].Correo);
                // console.log('d valida',d);
            }
            for(let j=0; j<this.users.length; j++){
                this.usersGame[j]= this.users[j].length;
            }
         
            this.paintChart();
    
        });
    }

    paintChart() {
        this.chartOptions = {
            chart: {
              type: 'area'
          },
          accessibility: {
              description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
          },
          title: {
              text: 'Emotionies Stats'
          },
          subtitle: {
              text: '(Users & Games)'
          },
          xAxis: {
              // minute: '%H:%M',
              allowDecimals: true,
              categories: this.categories,
              labels: {
                  formatter: function () {
                      return this.value; // clean, unformatted number for year
                  }
              },
              // accessibility: {
              //     rangeDescription: 'Range: 17:28 to 19:45.'
              // }
          },
          yAxis: {
              title: {
                  text: 'Emotionies Stats'
              },
              labels: {
                  formatter: function () {
                      return this.value ;
                  }
              }
          },
          tooltip: {
              pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
          },
          plotOptions: {
              area: {
                  pointStart: 0,
                  marker: {
                      enabled: false,
                      symbol: 'circle',
                      radius: 2,
                      states: {
                          hover: {
                              enabled: true
                          }
                      }
                  }
              }
          },
          series: [{
              name: 'users',
              data: this.usersGame
          }, {
              name: 'games',
              data: this.games
          }]
          };
        }





}
