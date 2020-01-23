
import { Component, OnInit } from '@angular/core';
import { EmotioniesService } from '../../../services/emotionies/emotionies.service';
import { Partida } from '../../../models/partida.model';

//import * as Highcharts from 'highcharts';
//import MapModule from 'highcharts/modules/map';
// const mapWorld = require('@highcharts/map-collection/custom/world.geo.json');

//import * as mapWorld from '@highcharts/map-collection';
// MapModule(Highcharts);


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // position: number = 0;
  // partida: Partida;
  // title = "app";
  // chart;
  // updateFromInput = false;
  // Highcharts = Highcharts;
  // chartConstructor = "mapChart";
  // chartCallback;
  // chartOptions;
  // series = [];

  constructor(public emotioniesService: EmotioniesService) {

    // console.log('map', mapWorld);

  }

  ngOnInit() {
  }

}
