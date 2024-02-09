import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { POKEMONS } from '../../mocks/mock-pokemons-list';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  faSearch = faSearch;

  selectPokemonByName(pokemonName: string) {
    //Pour chaque élèment cad pokemon on regarde si son id est égal à l'id du pokemon séléctionné si c'est le cas on retourn un pokemon qui est de type pokemon sinon bein rien car il est undefined
    const pokemon: Pokemon | undefined = this.pokemonsList.find(
      (pokemon) => pokemon.name.toLowerCase() == pokemonName.toLowerCase()
    );
    if (Pokemon) {
      this.pokemonSelected = pokemon;
    } else {
      this.pokemonSelected = undefined;
    }
  }
}
