import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(types: string): string {
    // let style: any = {'width': '200px', 'height': '100px', 'color':'white'};
    let style: any = {};
    //on va recevoir le type du pokémon qui sera soit: feu, eau , ....
    switch (types) {
      case 'Fire':
        style = 'red';
        break;

      case 'Water':
        style = '#5EC3FD';
        break;

      case 'Grass':
        style = '#BBBE64';
        break;

      case 'Metal':
        style = 'F2E2BA';
        break;

      case 'Psychic':
        style = 'purple';
        break;

      case 'Darkness':
        style += 'black';
        break;

      case 'Lightning':
        style += 'red';
        break;

      case 'Colorless':
        style += 'cyan';
        break;

      case 'Dragon':
        style += 'orange';
        break;

      default:
        style += 'F76F8E';
    }
    console.log("test : ",style)
    return style;
  }
}
