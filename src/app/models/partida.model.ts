import { Emotion } from './emotion.model';
import { numberFormat } from 'highcharts';
import { PosValue } from '../interface/posValue.interface';

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
                emotion[j] = emotion[j] + this.emotions[y][i];
            }
        }

        return emotion;
    }


    //------------------------------------- Stacked --------------------------------------

    getMostValue() {
        let positives = this.getMostPositiveValue(0, 8);
        let negatives = this.getMostPositiveValue(9, 17);
        return positives.concat(negatives);
    }


    getMostPositiveValue(posInicial, posFinal){
        let emotionValue: PosValue[] = [];
        let value = 0;
        for(let j = posInicial; j <= posFinal && j <= this.emotions.length; j++){
            value = 0;
            for ( let i=0; i<this.emotions[j].length; i++) {
                value = value + this.emotions[j][i];
            }
            emotionValue.push({'pos': j,'value': value});
            // console.log(value);
        }
        // console.log('emotionValue', emotionValue);
        emotionValue.sort((a: PosValue,b: PosValue) => b.value - a.value);
        return [emotionValue[0].pos, emotionValue[1].pos, emotionValue[2].pos];
    }

    getCategoriesStacked(positions: number[]): string[] {
        let categories = [];
        for( let i of positions){
            let pos= i +1;
            categories.push('EMO' + pos);
        }
        // console.log(categories);
        return categories;
    }

    // positions most positives and negatives values
    // position position in subemotion
    getPositionStacked(positions:number[], position:number ): number[]{
        return [this.emotions[positions[0]][position], this.emotions[positions[1]][position], this.emotions[positions[2]][position],
        this.emotions[positions[3]][position], this.emotions[positions[4]][position], this.emotions[positions[5]][position]];
    }


    // =================================== Pareto =================================

    // most values emotions
    getMostPrimaryEmotions(): PosValue[]{
        let emotionValue: PosValue[] = this.getArrayEmo();
        emotionValue.sort((a: PosValue, b: PosValue) => b.value - a.value);
        // console.log(emotionValue);
        return emotionValue;
    }

    getArrayEmo() {
        let emotionValue: PosValue[] = [];
        let count =0;
        for(let j = 0; j < this.emotions.length; j++) {
           count = this.sumEmo(j);
           emotionValue.push({'pos': j, 'value': count});
        }
        // console.log(emotionValue);
        return emotionValue;
    }

    sumEmo(pos: number): number{
        let count = 0;
        for(let i=0; i<this.emotions[pos].length; i++){
            count += this.emotions[pos][i];
        }
        return count;
    }


     // =================================== Semicercle =================================


    getEmotionPercentage(): PosValue[]{
        let emotionValue = this.getMostPrimaryEmotions();
        this.getTotalValue(emotionValue);
        return emotionValue;
    }

    getTotalValue(emotionValue: PosValue[]) {
        let total = 0;
        for(let j=0; j< emotionValue.length; j++){
            total += emotionValue[j].value;
        }
        for(let j= 0; j<emotionValue.length; j++){
            emotionValue[j].value = (emotionValue[j].value / total) * 100;
        }
    }
}
