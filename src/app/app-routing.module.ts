import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { PoubelleComponent } from './components/poubelle/poubelle.component';

const routes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/:id', component: DetailPokemonComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
