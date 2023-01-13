import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

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
