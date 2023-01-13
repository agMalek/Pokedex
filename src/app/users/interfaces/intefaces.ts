import { Pokemon } from '../../pokemon/interfaces/interfaces';


export interface User {
    userID:number,
    username:string,
    password:string,
    pokemons:Pokemon[]
}






