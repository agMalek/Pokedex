import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/arraysData';
import { User } from '../interfaces/intefaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  
  constructor(private router:Router){
    let localst = (JSON.parse(localStorage.getItem('users')!))
    if(localst){
      this._allUsers = localst
    }else{
      this._allUsers = users
      localStorage.setItem('users', JSON.stringify(users))
    }
  }
  
  private _allUsers:User[] = []
  private _currentUser!:User

  get allUsers():User[]{
    return [...this._allUsers]
  }

  get getCurrentUser():User{
    return {...this._currentUser}
  }

  setUsersLocalStorage(user:User):void{
    let i = this._allUsers.findIndex(u => u.userID === this._currentUser.userID)
    this._allUsers.splice(i,1,user)
    localStorage.setItem('users', JSON.stringify([...this._allUsers]))
  }

  setCurrentUser(user:User):void{
    this._currentUser = user
  }


  setUserCurrentFromLocalStorage():void{
    const userId:number | null = JSON.parse(localStorage.getItem('currentUserId')!) || null 
    
    if(userId){
      let user = this._allUsers.find(u=>u.userID === userId)
      this.setCurrentUser(user!)
      this.router.navigate(['/user-pokemons', userId]) 
    }else{
    }
  }



}
