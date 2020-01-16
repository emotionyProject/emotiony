import { Emotion } from './emotion.model';

export class Partida {

    constructor(
        public emotions: number[][],
        public Fecha: Date,
        public ip: string,
        public idPartida: string,
        public correo: string,
        public geoLoc: string,
        public createdAt: Date,
        public updatedAt: Date,
        public id: string,
        public _id?: string
    ) {}

    getEmotions(pos: number): number[]{
        let emotion: number[] = [];
        for (let j = 0; j < this.emotions.length; j++) {
            emotion[j] = this.emotions[j][pos];
        }
        return emotion;
    }
}
