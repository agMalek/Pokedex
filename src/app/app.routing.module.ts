import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pages/pokemons-list/pokemons-list.component';
import { PokemonViewComponent } from './pokemon/pages/pokemon-view/pokemon-view.component';

const routes: Routes = [
    {path: '', component: PokemonListComponent},
    {path: 'pokemon/:id', component: PokemonViewComponent},
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
