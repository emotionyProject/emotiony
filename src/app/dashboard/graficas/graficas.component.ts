import { Component, OnInit } from '@angular/core';
import { EmotioniesService } from '../../services/service.index';
import { Partida } from '../../models/partida.model';



@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  // position: number = 0;
  

  constructor(
    public emotioniesService: EmotioniesService
  ) { }

  ngOnInit() {
    // this.loadAllEmotionies();
  }

  loadAllEmotionies() {
    // this.emotioniesService.loadAllEmotionies()
    //     .subscribe((resp: any) => {

    //       if (resp.length > this.position) {
    //         this.emotioniesService.savePartida(resp[this.position]);
    //       }
    //     });
  }



}
