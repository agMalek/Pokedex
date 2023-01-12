import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-button',
  templateUrl: './new-button.component.html',
  styleUrls: ['./new-button.component.css']
})
export class NewButtonComponent {


  constructor(private pokemonService:PokemonService, private router:Router){}

  newPokemon(){
    this.pokemonService.setIsToCreate(true)
    this.router.navigate(['/form'])
  }
}
