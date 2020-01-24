import { Injectable } from '@angular/core';
import { URL_EMOTIONIES } from '../../config/config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Partida } from '../../models/partida.model';

@Injectable({
  providedIn: 'root'
})
export class EmotioniesService {

  game: Partida;
  position: number = Math.floor((Math.random() * (100 - 1)));

  constructor(
    public http: HttpClient
  ) { }

  loadAllEmotionies() {
    const url = URL_EMOTIONIES + '/Emotionies';
    return this.http.get(url);
  }

  savePartida(partida: any) {
    // convertir las emociones en una matriz
    let emotions: number[][] = [];

    for (let i = 0; i < 18; i++) {
        emotions[i] = new Array(6);
    }

    let clave;
    for (let j = 1; j <= 18; j++) {
      for (let i = 1; i <= 6; i++) {
          clave =  'EMO' + j + '_' + i;
          // console.log(clave, partida[clave]);
          emotions[j-1][i-1] = partida[clave];
         }
    }

    this.game =  new Partida(emotions, partida.Fecha, partida.IP, partida.id_Partida,
                partida.Correo, partida.Geoloc, partida.createdAt, partida.updatedAt, partida.id, partida._id);
 
    return this.game;

  }

  getGame(): Partida {
    return this.game;
  }

  getPosition(): number {
    return this.position;
  }

  setPosition(newPosition: number) {
    this.position = newPosition;
    console.log("new", this.position);
  }



}
