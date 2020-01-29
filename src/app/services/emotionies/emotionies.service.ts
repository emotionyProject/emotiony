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

  savePartida(partida: any): Partida {
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

  saveManyPartidas(partidas: any[]): Partida {
    let partida;
    console.log(partidas.length);
    if(partidas.length === 1) {
      partida = this.savePartida(partidas[0]);
    } else if(partidas.length > 1) {
      partida = this.savePartida(partidas[0]);
      for (let i = 1; i<partidas.length; i++) {
        partida = this.addPartidas(this.savePartida(partidas[i]), partida);
      }
      partida = this.mediaPartidas(partida, partidas.length);
    }
    this.game = partida;
    console.log(this.game.emotions);
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
  }


  addPartidas(partida1: Partida, partida2: Partida): Partida{
    let emotions: number [][] = [];

    for (let i = 0; i < 18; i++) {
      emotions[i] = new Array(6);

    }

    for(let j=0; j<partida1.emotions.length; j++){
      for(let i=0; i<partida1.emotions[j].length; i++){
        emotions[j][i]=partida1.emotions[j][i] + partida2.emotions[j][i];
      }
    }
    return new Partida(emotions, partida1.Fecha, partida1.ip, partida1.idPartida,
      partida1.correo, partida1.geoLoc, partida1.createdAt, partida1.updatedAt, partida1.id, partida1._id);
  }

  mediaPartidas(partida: Partida, elements: number): Partida {
    let emotions: number [][] = [];

    for (let i = 0; i < 18; i++) {
      emotions[i] = new Array(6);

    }

    for(let j=0; j<partida.emotions.length; j++){
      for(let i=0; i<partida.emotions[j].length; i++){
        emotions[j][i]= partida.emotions[j][i]/ elements;
      }
    }

    return new Partida(emotions, partida.Fecha, partida.ip, partida.idPartida,
      partida.correo, partida.geoLoc, partida.createdAt, partida.updatedAt, partida.id, partida._id);
  }

}
