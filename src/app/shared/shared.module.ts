import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlePokedexComponent } from './title-pokedex/title-pokedex.component';



@NgModule({
  declarations: [
    TitlePokedexComponent
  ],
  exports:[
    TitlePokedexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
