/* 

Seccion Classes / Data

import { Hero } from "./classes/Hero";
import powers from "./data/powers";


console.log('index started!');

const ironman = new Hero('Ironman', 2, 35);

console.log(ironman.power);




 */

import { genericFunctionArrow } from "../generics/generics"

/** Seccion Genericos */


// import { printObject, genericFunction } from "./generics/generics";

// console.log( genericFunction( 3.1416 ).toFixed(2) );
// console.log( genericFunction( 'hola mundo' ).toFixed(2) );
// console.log( genericFunction( new Date() ).toFixed(2) );


/** Ejercicio Genericos */
import { Villain, Hero } from "../interfaces";

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>( deadpool ).dangerLevel);