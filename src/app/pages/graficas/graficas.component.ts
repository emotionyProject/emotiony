import { Component, OnInit } from '@angular/core';
import { EmotioniesService } from '../../services/service.index';
import { Partida } from '../../models/partida.model';



@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {


  constructor(
    public emotioniesService: EmotioniesService
  ) {
      document.body.style.background = 'white';
  }

  ngOnInit() {

  }





}
