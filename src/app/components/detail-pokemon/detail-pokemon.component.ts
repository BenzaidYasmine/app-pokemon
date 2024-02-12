import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../../mocks/mock-pokemons-list';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss',
})
export class DetailPokemonComponent {
  constructor(private route: ActivatedRoute) {}
  pokemonList = POKEMONS;
  pokemon: Pokemon | undefined;

  ngOnInit() {
    // Déja récuperer le pokemon rechercher via son id
    const pokemonId = this.route.snapshot.paramMap.get('id');

    console.log('je cherche l\'ind : ', pokemonId);

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id === pokemonId
      );
    }
  }
}
