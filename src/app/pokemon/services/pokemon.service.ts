import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/interfaces';
import { UsersService } from '../../users/service/users.service';
import { User } from 'src/app/users/interfaces/intefaces';

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

  setPokemons(){
    this._pokemons = this.usersService.getCurrentUser.pokemons
  }

  constructor(private usersService:UsersService){
    this.usersService.setUserCurrentFromLocalStorage()
    this.setPokemons()
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
    this._pokemons.splice(i,1,pokemon)
    this.saveToLocalStorage()    


    let aux:Pokemon[] = JSON.parse(localStorage.getItem('pokemons')!)
    const idx = aux.findIndex(p => p.id === pokemon.id)
    aux.splice(idx,1,pokemon)
    localStorage.setItem('pokemons', JSON.stringify(aux))
  }
  
  addPokemon(pokemon:Pokemon):void{
    this._pokemons.push(pokemon)
    this.saveToLocalStorage()    

    let aux:Pokemon[] = JSON.parse(localStorage.getItem('pokemons')!)
    aux.push(pokemon)
    localStorage.setItem('pokemons', JSON.stringify(aux))
  }
  
  saveToLocalStorage():void{
    let user: User = {
      ...this.usersService.getCurrentUser,
      pokemons: [...this._pokemons]
    }
    this.usersService.setUsersLocalStorage(user)
  }

  updatePokemonForEvolution(id:number){
    let pokemonToUpdate:Pokemon = this._pokemons[this._pokemons.length-1]
    pokemonToUpdate.evolutionId = id
    this.updatePokemon(pokemonToUpdate)
  }


  getAvailablePokemonID():number{
    const aux:Pokemon[] = JSON.parse(localStorage.getItem('pokemons')!) 
    return aux[aux.length-1].id+1
  }
}
