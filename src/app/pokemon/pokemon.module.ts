import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pages/pokemons-list/pokemons-list.component';
import { ListComponent } from './components/list-item/list-item.component';
import { NewButtonComponent } from './components/new-button/new-button.component';
import { PokemonViewComponent } from './pages/pokemon-view/pokemon-view.component';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { PokemonFormComponent } from './pages/pokemon-form/pokemon-form.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    PokemonListComponent,
    ListComponent,
    NewButtonComponent,
    PokemonViewComponent,
    PokemonFormComponent
  ],
  exports:[
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    PrimeNGModule,
  ]
})
export class PokemonModule { }
