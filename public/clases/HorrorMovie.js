import { Movies } from "./Movies.js";
export class HorrorMovies extends Movies {
    director;
    hasjumpscares;
    constructor(title, duration, hasOscars, director, hasjumpscares) {
        super(title, duration, hasOscars, director);
        this.director = director;
        this.hasjumpscares = hasjumpscares;
    }
    displaayalert() {
        console.log("This is a horror movie!");
    }
}
//# sourceMappingURL=HorrorMovie.js.map