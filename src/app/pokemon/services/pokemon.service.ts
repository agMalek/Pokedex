import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/interfaces';
import {pokemons} from '../arraysData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemons:Pokemon[] = [];
  private _pokemonCurrent!:Pokemon;
  private _isToCreate:boolean = false;

  get getPokemons():Pokemon[]{
    return [...this._pokemons]
  };
  
  get getPokemonCurrent():Pokemon{
    return {...this._pokemonCurrent}
  }

  get getIsToCreate():boolean{
    return this._isToCreate
  }

  constructor(){
    this._pokemons = pokemons
  };

  setPokemonCurrent(id:number){
    const pok = this._pokemons.find(p => p.id === id)
    if(pok){
      this._pokemonCurrent = pok
    }
  };
  
  setIsToCreate(argument:boolean):void{
    this._isToCreate = argument
  }

  updatePokemon(pokemon:Pokemon):void{
    const i = this._pokemons.findIndex(p=>p.id === pokemon.id)
    console.log(pokemon, i)
    
    this._pokemons.splice(i,1,pokemon)
    console.log(this._pokemons)
  }

  addPokemon(pokemon:Pokemon):void{
    this._pokemons.push(pokemon)
  }

  getAvailablePokemonID():number{
    return this._pokemons[this._pokemons.length-1].id+1
  }


}
