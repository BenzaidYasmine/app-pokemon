import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(types: string): string {
    let color: string;
    //on va recevoir le type du pokémon qui sera soit: feu, eau , ....
    switch (types) {
      case 'Fire':
        color = 'red ';
        break;

      case 'Water':
        color = 'blue';
        break;

      case 'Grass':
        color = 'green';
        break;

      case 'Metal':
        color = 'yellow';
        break;

      case 'Psychic':
        color = 'purple';
        break;

      case 'Darkness':
        color = 'black';
        break;

      case 'Lightning':
        color = 'yellow';
        break;

      case 'Colorless':
        color = 'cyan';
        break;

      case 'Dragon':
        color = 'orange';
        break;

      default:
        color = 'yellow';
    }
    console.log("test : ",color)
    return color;
  }
}
