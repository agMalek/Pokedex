import { Component } from '@angular/core';
import { abilities as allAbilities } from '../../arraysData';
import { Pokemon, Pokemon_abilities } from '../../interfaces/interfaces';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {
  
  abilities!:Pokemon_abilities[]
  pokemonCurrent:Pokemon

  nameValue:string = ""
  typeValue:string = ''
  lvlValue:number = 1
  imgValue:string = ''
  selectedAbilities:string[] = []

  
  constructor( 
    private pokemonService:PokemonService, 
    private router:Router,
  ){
    this.abilities = allAbilities
    this.pokemonCurrent = this.pokemonService.getPokemonCurrent
    this.nameValue = this.pokemonService.getIsToCreate ? '' : this.pokemonCurrent.name
    this.typeValue = this.pokemonService.getIsToCreate ? '' : this.pokemonCurrent.type[0]
    this.lvlValue = this.pokemonService.getIsToCreate ? 1 : this.pokemonCurrent.lvl
    this.imgValue = this.pokemonService.getIsToCreate ? '' : this.pokemonCurrent.image
    this.selectedAbilities = this.pokemonService.getIsToCreate ? [] : this.convertToStringsArray()
  }
  

  cancelForm():void{
    if(this.pokemonService.getIsToCreate){
      this.router.navigate([''])
    }else{
      this.router.navigate(['/pokemon', this.pokemonCurrent.id])
    }
  }
  
  saveChanges():void{

    let obj:Pokemon = this.getPokemonWithNewValues()

    if(this.pokemonService.getIsToCreate){   // if will create
      this.createNewPokemon(obj)
    }else{                                   // will to edit
      this.editPokemon(obj)
    }
  }

  
  // ---------------------- PRIVATES FUNCTIONS --------------------

  private getPokemonWithNewValues():Pokemon{
    return {
      id: 0,
      name: this.nameValue,
      type: [this.typeValue],
      lvl: this.lvlValue,
      image: this.imgValue,
      abilities: this.convertToAbilitiesArray()
    }
  }

  private createNewPokemon(obj:Pokemon){
    obj.id =  this.pokemonService.getAvailablePokemonID(),
    this.pokemonService.addPokemon(obj)
    this.pokemonService.setIsToCreate(false)
    this.router.navigate(['/pokemon', obj.id])
}

  private editPokemon(obj:Pokemon):void{
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
