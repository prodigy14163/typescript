import type { Director } from "../interfaces/Director";
import { Movies } from "./Movies";

export class HorrorMovies extends Movies {
    constructor(
        title: string, 
        duration: number, 
        hasOscars: boolean,
        public director: Director<string>,
        public hasjumpscares: boolean
    ){
        super(title, duration, hasOscars,director);
    }

    displaayalert(){
        console.log("This is a horror movie!");

    }
}