import { HorrorMovies } from "./clases/HorrorMovie.js";
import { Movies } from "./clases/Movies.js";
console.log("hola desde typescript");
console.log("prueba ordenando proyecto");
console.log("prueba con watch");
let movie = "The Matrix";
let duration = 136;
let hasOscars = true;
console.log(movie);
console.log(duration);
console.log(hasOscars);
let myobject = {
    name: "Gerardo",
    age: 30,
    isStudent: false
};
myobject = {
    name: "Maria",
    age: 25,
    isStudent: true
};
let myarray = [1, 2, 3];
myarray = [4, 5, 6];
let data = 99999;
console.log(movie, duration, hasOscars, data);
//union:
let myid = 12345;
myid = "abcde";
let userId = 67890;
let myarr = [1, "two", 3, "four"];
myarr = [5, "six", 7, "eight", true];
let loading = "loading";
let error = "error";
let state = "loading";
const esdla = {
    title: "El Señor de los Anillos",
    duration: 178,
    hasOscars: true
};
const elhobbit = {
    title: "El Hobbit",
    duration: 169,
    hasOscars: false,
    pages: 310
};
console.log(elhobbit, esdla);
let a; // Esto no es posible, ya que number y string son tipos incompatibles
//funciones 
function sum(n1, n2) {
    return n1 + n2;
}
let result = sum(5, 10);
console.log(result);
const toupper = (str) => str.toUpperCase();
let str = toupper("hola mundo toupper");
console.log(str);
function sayhello() {
    console.log("hello!");
}
sayhello();
const h1 = document.querySelector("h1");
console.log(h1?.textContent);
const title = document.querySelector(".title");
console.log(title.textContent);
const username = document.querySelector("#username");
console.log(username.placeholder);
//genericos
//function getfirstelement(array: number[]){
//    return array[0];
//}
function getfirstelement(array) {
    return array[0];
}
const numarr = [10, 20, 30];
const firstnum = getfirstelement(numarr);
console.log(firstnum);
const strarr = ["a", "b", "c"];
const firststr = getfirstelement(strarr);
console.log(firststr);
const boolarr = [true, false, true];
const firstbool = getfirstelement(boolarr);
console.log(firstbool);
const username2 = document.querySelector("#username");
console.log(username2?.placeholder);
//interfaces
//interfaces son una forma de definir la estructura de un objeto, una clase o una función. Son similares a los tipos, pero tienen algunas diferencias importantes. Las interfaces pueden ser implementadas por clases, lo que permite definir un contrato que las clases deben cumplir. Además, las interfaces pueden extender otras interfaces, lo que permite crear jerarquías de tipos más complejas.
const director1 = {
    name: "Christopher Nolan",
    age: 50,
    data: "he is amazing"
};
console.log(director1);
const movie1 = new Movies("Inception", 148, true, director1);
const movie2 = new Movies("Interstellar", 169, true, director1);
console.log(movie1, movie2);
console.log(movie1.getinfo());
console.log(movie2.getinfo());
const scream = new HorrorMovies("Scream", 111, false, director1, true);
console.log(scream);
console.log(scream.getinfo());
scream.displaayalert();
const susto = new HorrorMovies("susto", 142, true, director1, false);
console.log(susto);
console.log(susto.getinfo());
const chucky = new HorrorMovies("chucky", 200, false, director1, true);
console.log(chucky);
console.log(chucky.getinfo());
//# sourceMappingURL=main.js.map