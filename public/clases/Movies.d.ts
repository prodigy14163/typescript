import type { Director } from "../interfaces/Director";
import type { IVideo } from "../interfaces/ivideo";
export declare class Movies implements IVideo<string> {
    title: string;
    duration: number;
    hasOscars: boolean;
    director: Director<string>;
    constructor(title: string, duration: number, hasOscars: boolean, director: Director<string>);
    getinfo(): string;
    play(): void;
}
//# sourceMappingURL=Movies.d.ts.map