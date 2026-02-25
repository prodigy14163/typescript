import { type Director } from "./Director.js";
export interface IVideo<T> {
    title: string;
    director: Director<T>;
    duration: number;
    play(): void;
}
//# sourceMappingURL=ivideo.d.ts.map