import type { Director } from "../interfaces/Director";
import { Movies } from "./Movies";
export declare class HorrorMovies extends Movies {
    director: Director<string>;
    hasjumpscares: boolean;
    constructor(title: string, duration: number, hasOscars: boolean, director: Director<string>, hasjumpscares: boolean);
    displaayalert(): void;
}
//# sourceMappingURL=HorrorMovie.d.ts.map