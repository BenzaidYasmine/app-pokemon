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
        style = '#F2522E';
        break;

      case 'Water':
        style = '#65C4EE';
        break;

      case 'Grass':
        style = '#9FC83B';
        break;

      case 'Metal':
        style = '#838289';
        break;

      case 'Psychic':
        style = '#8C3B87';
        break;

      case 'Darkness':
        style = '#8C7B74';
        break;

      case 'Lightning':
        style = '#FFE923';
        break;

      case 'Colorless':
        style = '#8FD9B6';
        break;

      case 'Dragon':
        style = '#AA3A26';
        break;
        case 'Fighting':
          style = '#3E5677';
          break; 
      default:
        style = '';
    }
    console.log("test : ",style)
    return style;
  }
}
