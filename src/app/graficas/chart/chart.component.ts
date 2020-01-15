// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
// import highchartsMore from 'highcharts/highcharts-more';
// import highchartsFunnel from 'highcharts/modules/funnel';

// highchartsMore(Highcharts);
// highchartsFunnel(Highcharts);

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import highchartsMore from 'highcharts/highcharts-more';
import highchartsFunnel from 'highcharts/modules/funnel';

// import * as HighchartsMore from "highcharts/highcharts-more";

highchartsMore(Highcharts);
highchartsFunnel(Highcharts);
// HighchartsMore(Highcharts);


@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html"
})


export class ChartComponent implements OnInit {
  
  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  
  chartOptions = {

    chart: {
    polar: true,
    type: 'column'
  },

  xAxis: {
    min: 0,
    max: 360,
    tickInterval: 22.5,
    tickmarkPlacement: 'on',
    labels: {
      formatter: function() {
        let categories = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        return categories[this.value / 22.5] + '°';
      }
    }
  },
  yAxis: {
    min: 0,
    endOnTick: false,
    reversedStacks: false
  },

  plotOptions: {
    series: {
      stacking: 'normal',
      shadow: false,
      groupPadding: 0,
      pointPlacement: 'on'
    }
  },

  series: [{
    data: [{
      x: 0,
      y: 5
    }, {
      x: 22.5,
      y: 3
    }, {
      x: 45,
      y: 4
    }, {
      x: 67.5,
      y: 2
    }, {
      x: 90,
      y: 9
    }, {
      x: 112.5,
      y: 2
    }, {
      x: 135,
      y: 8
    }, {
      x: 157.5,
      y: 9
    }, {
      x: 180,
      y: 2
    }]
  }, {
    data: [{
      x: 0,
      y: 2
    }, {
      x: 22.5,
      y: 6
    }, {
      x: 45,
      y: 1
    }, {
      x: 67.5,
      y: 9
    }, {
      x: 90,
      y: 9
    }, {
      x: 112.5,
      y: 3
    }, {
      x: 135,
      y: 5
    }, {
      x: 157.5,
      y: 3
    }, {
      x: 180,
      y: 7
    }]
  }, {
    data: [{
      x: 0,
      y: 5
    }, {
      x: 22.5,
      y: 3
    }, {
      x: 45,
      y: 4
    }, {
      x: 67.5,
      y: 2
    }, {
      x: 90,
      y: 9
    }, {
      x: 112.5,
      y: 2
    }, {
      x: 135,
      y: 8
    }, {
      x: 157.5,
      y: 9
    }, {
      x: 180,
      y: 2
    }]
  }]
  };


  constructor() { }

  ngOnInit() {
   
  }

}
