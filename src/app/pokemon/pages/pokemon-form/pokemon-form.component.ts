import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { abilities as allAbilities } from '../../../arraysData';

import { Pokemon, Pokemon_abilities } from '../../interfaces/interfaces';

import { PokemonService } from '../../services/pokemon.service';
import { UsersService } from '../../../users/service/users.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {
  
  abilities:Pokemon_abilities[]
  pokemonCurrent:Pokemon
  primerIntento:boolean
  pokemonToUpdateEvolution:Pokemon
  hiddenRadioInEditPokemon:boolean = false 

  nameValue:string = ""
  typeValue:string = ''
  lvlValue:number = 1
  imgValue:string = ''
  selectedAbilities:string[] = []
  evolutionRadioValue:boolean = false
  

  
  constructor( 
    private pokemonService:PokemonService, 
    private usersService:UsersService,
    private router:Router,
  ){
    this.abilities = allAbilities
    this.pokemonCurrent = this.pokemonService.getPokemonCurrent
    this.pokemonToUpdateEvolution = this.pokemonService.getPokemons[this.pokemonService.getPokemons.length-1]

    if(this.pokemonService.getIsToCreate){
      this.primerIntento =  true 
      this.nameValue =  '' 
      this.typeValue =  '' 
      this.lvlValue =  1 
      this.imgValue = "assets/images/bulbasaur.png"
      this.selectedAbilities = []
      this.hiddenRadioInEditPokemon = false
    }
    else{
      this.primerIntento =  false 
      this.nameValue = this.pokemonCurrent.name 
      this.typeValue = this.pokemonCurrent.type[0] 
      this.lvlValue = this.pokemonCurrent.lvl
      this.imgValue =  this.pokemonCurrent.image 
      this.selectedAbilities = this.convertToStringsArray()
      this.hiddenRadioInEditPokemon = true
    }


  }
  

  cancelForm():void{
    if(this.pokemonService.getIsToCreate){
      this.pokemonService.setIsToCreate(false)
      this.router.navigate(['/user-pokemons', this.usersService.getCurrentUser.userID ])
    }else{
      this.router.navigate(['/pokemon', this.pokemonCurrent.id])
    }
  }
  
  saveChanges():void{

    this.primerIntento = false
    if(this.notError()){
      let obj:Pokemon = this.getPokemonWithNewValues()

      if(this.pokemonService.getIsToCreate){   // if will create
        this.createNewPokemon(obj)
      }else{                                   // will to edit
        this.editPokemon(obj)
      }
    }
    
  }

  
  // ---------------------- PRIVATES FUNCTIONS --------------------


  private notError():boolean {
    return (this.nameValue !== '' && this.typeValue !== '' && this.imgValue !== '' && this.lvlValue > 0)
  }



  private getPokemonWithNewValues():Pokemon{
    return {
      id: 0,
      evolutionId: null,
      name: this.nameValue,
      type: [this.typeValue],
      lvl: this.lvlValue,
      image: this.imgValue,
      abilities: this.convertToAbilitiesArray()
    }
  }

  private createNewPokemon(obj:Pokemon){
    obj.id =  this.pokemonService.getAvailablePokemonID()
    
    if(this.evolutionRadioValue) this.pokemonService.updatePokemonForEvolution(obj.id)

    this.pokemonService.addPokemon(obj)
    this.pokemonService.setIsToCreate(false)
    this.router.navigate(['/pokemon', obj.id])
}

  private editPokemon(obj:Pokemon):void{
    obj.evolutionId = this.pokemonCurrent.evolutionId
    obj.id =  this.pokemonCurrent.id,
    this.pokemonService.updatePokemon(obj)
    this.router.navigate(['/pokemon', obj.id])
  }

  private convertToStringsArray():string[]{
    let resp:string[] = []
    this.pokemonCurrent.abilities.forEach(a => resp.push(a.name))
    return resp
  }

  private convertToAbilitiesArray():Pokemon_abilities[]{
    let resp:Pokemon_abilities[]|any = []
    this.selectedAbilities.forEach(a =>{
      const aux = this.abilities.find(abi => abi.name === a )
      resp.push(aux)
    })
    return resp
  }
  
}
