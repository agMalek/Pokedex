import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pages/pokemons-list/pokemons-list.component';
import { PokemonViewComponent } from './pokemon/pages/pokemon-view/pokemon-view.component';
import { PokemonFormComponent } from './pokemon/pages/pokemon-form/pokemon-form.component';
import { LoginComponent } from './users/pages/login/login.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'user-pokemons/:id', component: PokemonListComponent},
    {path: 'pokemon/:id', component: PokemonViewComponent},
    {path: 'form', component: PokemonFormComponent},
    {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
