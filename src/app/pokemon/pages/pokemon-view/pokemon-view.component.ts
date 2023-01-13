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
  evoPokemon!:Pokemon
  hiddenEvolution:boolean = false
  currentUserId:number = 0

  constructor(private pokemonService:PokemonService, private usersService:UsersService, private route:ActivatedRoute){
    this.currentUserId = this.usersService.getCurrentUser.userID
  }


  ngOnInit(): void {
    this.hiddenEvolution = false
    const id = parseInt(this.route.snapshot.params['id'])
    console.log(id)
    this.pokemonService.setPokemonCurrent(id)
    this.pokemonCurrent = this.pokemonService.getPokemonCurrent
    
    this.findEvolution()
  }
  
  findEvolution(){
    const poks:Pokemon[] = this.pokemonService.getPokemons
    const aux = {
      lvl: 0,
      name: "",
      id: 0,
      evolutionId: 0,
      type: [""],
      image: "",
      abilities: []
    }


    let evolution:Pokemon = poks.find(p => p.id === this.pokemonCurrent.evolutionId!) || aux

    if(evolution.id === 0){
      this.hiddenEvolution = true
      this.evoPokemon = aux
    }else{
      this.evoPokemon = evolution
    }
  }
}
