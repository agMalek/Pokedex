import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../interfaces/interfaces';
import { PokemonService } from '../../services/pokemon.service';
import { UsersService } from '../../../users/service/users.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit{

  pokemonCurrent!:Pokemon
  currentUserId:number = 0

  constructor(private pokemonService:PokemonService, private usersService:UsersService, private route:ActivatedRoute){
    this.currentUserId = this.usersService.getCurrentUser.userID
  }


  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id'])
    console.log(id)
    this.pokemonService.setPokemonCurrent(id)
    this.pokemonCurrent = this.pokemonService.getPokemonCurrent
  }
  
}
