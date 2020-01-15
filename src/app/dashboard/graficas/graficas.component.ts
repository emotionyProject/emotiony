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
  ) { }

  ngOnInit() {
    this.loadAllEmotionies();
  }

  loadAllEmotionies() {
    this.emotioniesService.loadAllEmotionies()
        .subscribe((resp: any) => {
          // console.log(resp[0]);
          // let valor= 'EMO1_1';
          // console.log(resp[0][valor]);
          this.emotioniesService.savePartida(resp[0]);
        });
  }



}
