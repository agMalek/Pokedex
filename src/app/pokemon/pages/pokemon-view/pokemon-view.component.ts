import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../interfaces/interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit{

  pokemonCurrent!:Pokemon

  constructor(private pokemonService:PokemonService, private route:ActivatedRoute){
  }


  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id'])
    this.pokemonService.setPokemonCurrent(id)
    this.pokemonCurrent = this.pokemonService.getPokemonCurrent
  }
  
}
