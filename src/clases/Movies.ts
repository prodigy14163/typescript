import type { Director } from "../interfaces/Director.js";
import type { IVideo } from "../interfaces/ivideo.js";

export class Movies implements IVideo<string> {
    constructor(
        public title: string, 
        public duration: number, 
        public hasOscars: boolean, 
        public director: Director<string>)
        {}
    getinfo(){
        return `title: ${this.title}, duration: ${this.duration}, hasOscars: ${this.hasOscars}`;

    }
    play(){
        console.log(`Playing ${this.title}`);
    }
}