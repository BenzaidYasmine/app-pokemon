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
    // Mettez à jour la variable selectedPokemon lorsqu'un Pokémon est sélectionné
    this.selectedPokemon = pokemon;
    console.log('le pokemon séléctionné est : ', this.selectedPokemon)
  }
}
