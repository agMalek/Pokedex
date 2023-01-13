import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PokemonModule,
    SharedModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
