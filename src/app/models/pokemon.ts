// pokemons.ts
export class Pokemon {
    id: string;
    set: string;
    name: string;
    supertype: string;
    subtypes: string[];
    types: string[];
    number: string;
    rarity: string;
    images: {
      small: string;
      large: string;
    };
  
    constructor(data: any) {
      this.id = data.id;
      this.set = data.set;
      this.name = data.name;
      this.supertype = data.supertype;
      this.subtypes = data.subtypes;
      this.types = data.types;
      this.number = data.number;
      this.rarity = data.rarity;
      this.images = data.images;
    }
  }
  