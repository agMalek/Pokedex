import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../interfaces/intefaces';

import { PokemonService } from '../../../pokemon/services/pokemon.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  
  allUsers:User[] = []
  showWarning:boolean = false

  constructor(private usersService:UsersService, private router:Router, private pokemonService:PokemonService){
    this.allUsers = this.usersService.allUsers
  }

  ngOnInit(): void {
    this.usersService.setUserCurrentFromLocalStorage()
  }

  username:string=""
  password:string=""

  
  login():void{
    let user = this.allUsers.find( u => u.username === this.username)

    if(user && user.password === this.password){
      this.showWarning = false
      this.usersService.setCurrentUser({...user})
      this.router.navigate(['/user-pokemons', user.userID])
      localStorage.setItem('currentUserId', JSON.stringify(user.userID))
      this.pokemonService.setPokemons()

    }
    else{
      this.showWarning = true
    }
  }
  

}
