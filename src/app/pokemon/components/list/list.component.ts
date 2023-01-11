import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  pokemonsArray:Pokemon[] = []

  constructor(private pokemonService:PokemonService){
    this.pokemonsArray = this.pokemonService.getPokemons
  }

}
