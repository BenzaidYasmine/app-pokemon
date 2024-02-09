import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import { faCoffee, faSearch, faSquare } from '@fortawesome/free-solid-svg-icons';
import { POKEMONS } from './mocks/mock-pokemons-list';
import { Pokemon } from './models/pokemon';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Pokemons APP';
  jsonData: any;
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  faCoffee = faCoffee;
  faSearch = faSearch;

  constructor(
    private http: HttpClient,
    private dataService: DataService,
    library: FaIconLibrary
  ) {
    library.addIcons(faCoffee, faSquare);
  }

  ngOnInit() {
    this.printData();
  }

  printData() {
    //On utilisant les services
    this.dataService.getData().subscribe((data: any) => {
      this.jsonData = data;
    });
  }

  
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
