import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonListComponent {

  
  pokemonsArray:Pokemon[] = []

  constructor(private pokemonService:PokemonService){
    this.pokemonsArray = this.pokemonService.getPokemons
  }
    
}