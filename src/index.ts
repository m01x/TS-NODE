/* 

Seccion Genericos

import { getPokemon } from "./generics/get-pokemon";

getPokemon(106)
    .then( pokemon => console.log( pokemon.sprites.front_default ) )
    .catch( error => console.error( error ) )
    .finally( () => console.log('fin de getPokemon') ); */

    
    
    /** Seccion Decoradores */
    
import { Pokemon } from "./decorators/Pokemon-class";


const charmander = new Pokemon('Charmander');

//probaremos el bloqueo de prototipo :D 
(Pokemon.prototype as any).customName = 'Pikachu';

charmander.savePokemonToDB(3);