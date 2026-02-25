export class Movies {
    title;
    duration;
    hasOscars;
    director;
    constructor(title, duration, hasOscars, director) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
        this.director = director;
    }
    getinfo() {
        return `title: ${this.title}, duration: ${this.duration}, hasOscars: ${this.hasOscars}`;
    }
    play() {
        console.log(`Playing ${this.title}`);
    }
}
//# sourceMappingURL=Movies.js.map