import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pages/pokemons-list/pokemons-list.component';
import { ListComponent } from './components/list/list.component';
import { NewButtonComponent } from './components/new-button/new-button.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PokemonListComponent,
    ListComponent,
    NewButtonComponent
  ],
  exports:[
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PokemonModule { }
