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

    getEmotionsPositioned(pos: number): number[]{
        // 0-4 positivas
        // 5-13 negativas
        //14-17 positivas
        let emotion: number[] = [];
        let y = 0;
        for (let j = 0; j < this.emotions.length; j++) {
            y = j;
            if(y>= 5 && y<=13){
                y = y + 4;
            } else if(y >=14){
                y = y - 9;
            }
            emotion[j] = this.emotions[y][pos];
        }
        return emotion;
    }

    getEmotionName(pos:number): string {
        // let nameEmotion= 'EMO';
        if(pos>= 5 && pos<=13){
            pos = pos + 4;
        } else if(pos >=14){
            pos = pos - 9;
        }
        pos++;
        return 'EMO' + pos.toString();

    }

    getEmoTotal():number[]{
        let emotion:number[]=[];
        for (let j = 0; j < this.emotions.length; j++) {
            emotion[j] = 0;
            for ( let i=0; i<this.emotions[j].length; i++) {
                emotion[j] = emotion[j] + this.emotions[j][i];
            }
        }
        return emotion;
    }

    getEmoPositive(positivas: boolean): number[]{
        if (positivas) {
            return this.getEmoPositives();
        }
        else {
            return this.getEmoNegatives();
            // return [];
        }
 
    }

    getEmoPositives():number[]{
        let emotion:number[]=[];
        let y= 0;

        for(let j=0; j< 5 &&  j < this.emotions.length; j++){
            emotion[j] = 0;
            for ( let i=0; i<this.emotions[j].length; i++) {
                emotion[j] = emotion[j] + this.emotions[j][i];
            }
        }

        for(let j=5; j<14  &&  j < this.emotions.length; j++){
            emotion[j] = 0;
        }

        for(let j=14; j < this.emotions.length; j++) {
            y=j;
            emotion[j] = 0;
            y = y - 9;
            for ( let i=0; i<this.emotions[y].length; i++) {
                emotion[j] = emotion[j] + this.emotions[y][i];
            }
        }

        return emotion;
    }

    
    getEmoNegatives():number[]{
        let emotion:number[]=[];
        let y= 0;


        for(let j=0; j < this.emotions.length; j++){
            emotion[j] = 0;
        }

        for(let j=5; j < 14 && j < this.emotions.length; j++) {
            y=j;
            emotion[j] = 0;
            y = y + 4;
            for ( let i=0; i<this.emotions[y].length; i++) {
                if(j==5){
                    // console.log(j,y);
                    console.log(i, this.emotions[y][i]);
                }
                emotion[j] = emotion[j] + this.emotions[y][i];
            }
        }

        return emotion;
    }
}
