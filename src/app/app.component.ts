import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Pokemon } from './models/pokemon';
import { POKEMONS } from './mocks/mock-pokemons-list';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCoffee, faSquare,faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // imports: [FontAwesomeModule],
  // standalone: true,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Pokemons APP';
  jsonData: any;
  //Déclaration d'une liste de pokemons
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

  selectedPokemon: any;
  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
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
