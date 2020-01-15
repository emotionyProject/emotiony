import { Injectable } from '@angular/core';
import { URL_EMOTIONIES } from '../../config/config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Partida } from '../../models/partida.model';

@Injectable({
  providedIn: 'root'
})
export class EmotioniesService {

  constructor(
    public http: HttpClient
  ) { }

  loadAllEmotionies() {
    const url = URL_EMOTIONIES + '/Emotionies';
    return this.http.get(url);
  }

  savePartida(partida: any){
    // convertir las emociones en una matriz
    let emotions: number[][] = [];
    for(var i=0; i<18; i++) {
        emotions[i] = new Array(6);
    }

    for(let j = 1; j <= 18; j++) {
      for(let i = 1; i <= 6; i++) {
          let clave=  'EMO' + j + '_' + i;
          // console.log(clave, partida[clave]);
          emotions[j-1][i-1] = partida[clave];
         }
    }

    let game=new Partida(emotions,partida.Fecha,partida.IP,partida.id_Partida,partida.Correo,partida.Geoloc,partida.createdAt,partida.updatedAt,partida.id,partida._id);

  }

}
