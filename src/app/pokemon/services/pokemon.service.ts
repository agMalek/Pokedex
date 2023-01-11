import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/interfaces';
import pokemons from '../pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _pokemons:Pokemon[] = []

  get getPokemons():Pokemon[]{
    return [...this._pokemons]
  }

  constructor() { 
    this._pokemons = pokemons
  }
}
