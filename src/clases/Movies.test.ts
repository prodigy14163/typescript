import type { Director } from "../interfaces/Director"
import { Movies } from "./Movies"

describe("Movies tests",()=>{

    const director: Director<string> = {
        name: "Lana Wachowski",
        age: 55,
        data: "buen director"
    }

    const movie:Movies = new Movies("The Matrix", 136, true,director)


    it("title should be The Matrix",()=>{
        expect(movie.title).toBe("The Matrix")
    });

})
