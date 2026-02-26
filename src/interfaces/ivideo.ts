import {type  Director } from "./Director";

export interface IVideo<T>{
    title: string;
    director:Director<T>
    duration: number;
    play(): void;
}