import { HorrorMovies } from "./clases/HorrorMovie.js";
import { Movies } from "./clases/Movies.js";
import type { Director } from "./interfaces/Director.js";

console.log("hola desde typescript")
console.log("prueba ordenando proyecto")
console.log("prueba con watch")



let movie: string = "The Matrix";
let duration: number = 136;
let hasOscars: boolean = true;

console.log(movie);
console.log(duration);
console.log(hasOscars);



let myobject: object = {
    name: "Gerardo",
    age: 30,
    isStudent: false
}

myobject = {
    name: "Maria",
    age: 25,
    isStudent: true
}

let myarray: number[] = [1, 2, 3];

myarray = [4, 5, 6];

let data: any =99999;

console.log(movie,duration,hasOscars,data);


//union:

let myid: number | string = 12345;

myid = "abcde";

type id = number | string;

let userId: id = 67890;


let myarr : (number | string | boolean )[] = [1, "two", 3, "four"];

myarr = [5, "six", 7, "eight", true];




// literal:

type stateloading = "loading";
type stateError = "error";


let loading: stateloading = "loading";
let error: stateError = "error";

type state = stateloading | stateError;

let state: state = "loading";


type movie = {
    title: string;
    duration: number;
    hasOscars: boolean;
}

const esdla: movie = {
    title: "El Señor de los Anillos",
    duration: 178,
    hasOscars: true
}

// interseccion



type book = {
    title: string;
    pages: number;
}

type bookadaptation = movie & book;

const elhobbit: bookadaptation = {
    title: "El Hobbit",
    duration: 169,
    hasOscars: false,
    pages: 310
}

console.log(elhobbit,esdla);


type numstr = number & string; 


let a: numstr; // Esto no es posible, ya que number y string son tipos incompatibles


//funciones 



function sum(n1:number,n2:number):number{
    return n1 + n2;
}



let result = sum(5, 10);

console.log(result);



const toupper =(str:string) => str.toUpperCase();

let str = toupper("hola mundo toupper");

console.log(str);


function sayhello() {
    console.log("hello!");
}


sayhello();

const h1 = document.querySelector("h1");
console.log(h1?.textContent);

const title = document.querySelector(".title")as HTMLHeadingElement;
console.log(title.textContent);

const username = document.querySelector("#username")as HTMLInputElement;
console.log(username.placeholder);



//genericos


//function getfirstelement(array: number[]){
//    return array[0];
//}

function getfirstelement<T>(array: T[]){
    return array[0];
}


const numarr = [10, 20, 30];
const firstnum = getfirstelement<number>(numarr);
console.log(firstnum);

const strarr = ["a", "b", "c"];
const firststr = getfirstelement<string>(strarr);
console.log(firststr);

const boolarr = [true, false, true];
const firstbool = getfirstelement<boolean>(boolarr);
console.log(firstbool);


const username2 = document.querySelector<HTMLInputElement>("#username");
console.log(username2?.placeholder);





//interfaces

//interfaces son una forma de definir la estructura de un objeto, una clase o una función. Son similares a los tipos, pero tienen algunas diferencias importantes. Las interfaces pueden ser implementadas por clases, lo que permite definir un contrato que las clases deben cumplir. Además, las interfaces pueden extender otras interfaces, lo que permite crear jerarquías de tipos más complejas.

const director1: Director<string> = {
    name: "Christopher Nolan",
    age: 50,
    data: "he is amazing"
}

console.log(director1);


const movie1 = new Movies("Inception", 148, true, director1);
const movie2 = new Movies("Interstellar", 169, true, director1);

console.log(movie1,movie2);
console.log(movie1.getinfo());
console.log(movie2.getinfo());


const scream = new HorrorMovies("Scream", 111, false,director1, true);
console.log(scream);
console.log(scream.getinfo());
scream.displaayalert();

const susto = new HorrorMovies("susto", 142, true ,director1, false);

console.log(susto);
console.log(susto.getinfo());


const chucky = new HorrorMovies("chucky", 200, false ,director1, true);

console.log(chucky);
console.log(chucky.getinfo());

namespace common {
    export interface user {
    id: number;
    username: string;
}
    export interface error{
        id: number;
        iscritical: boolean;
        message: string;
    }

}

interface user {
    id: number;
    username: string;
}

const user1: common.user = {
    id: 1,
    username: "gerardo"
}









