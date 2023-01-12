import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/interfaces';
import {pokemons} from '../arraysData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemons:Pokemon[] = [];
  private _pokemonCurrent!:Pokemon;

  get getPokemons():Pokemon[]{
    return [...this._pokemons]
  };
  
  get getPokemonCurrent():Pokemon{
    return {...this._pokemonCurrent}
  }


  constructor() { 
    this._pokemons = pokemons
  };

  setPokemonCurrent(id:number){
    const pok = this._pokemons.find(p => p.id === id)
    if(pok){
      this._pokemonCurrent = pok
    }
    console.log(this._pokemonCurrent)
  };


}
