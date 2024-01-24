import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Pokemon } from './models/pokemon';
import { POKEMONS } from './mocks/mock-pokemons-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Pokemons APP';
  jsonData: any;
  //Déclaration d'une liste de pokemons
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit() {
    this.printData();
    console.log('la liste des pokemons: ', this.pokemonsList);
    console.log('le pokemon 1: ', this.pokemonsList[0]);
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
    console.log('le type saisie est : ', pokemonName);
    if (Pokemon) {
      this.pokemonSelected = pokemon;
      console.log('le pokemon recherché est: ', pokemon);
    } else {
      this.pokemonSelected = undefined;
      console.log('le pokemon recherché est introuvable  ', undefined);
    }
  }
}
