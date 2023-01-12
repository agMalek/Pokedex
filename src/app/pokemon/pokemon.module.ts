import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pages/pokemons-list/pokemons-list.component';
import { ListComponent } from './components/list-item/list-item.component';
import { NewButtonComponent } from './components/new-button/new-button.component';
import { PokemonViewComponent } from './pages/pokemon-view/pokemon-view.component';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    PokemonListComponent,
    ListComponent,
    NewButtonComponent,
    PokemonViewComponent
  ],
  exports:[
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNGModule
  ]
})
export class PokemonModule { }
