import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { POKEMONS } from '../../mocks/mock-pokemons-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss',
})
export class ListPokemonComponent {
  //Déclaration d'une liste de pokemons
  pokemonsList: Pokemon[] = POKEMONS;

  selectedPokemon: any;
  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
  }
}
