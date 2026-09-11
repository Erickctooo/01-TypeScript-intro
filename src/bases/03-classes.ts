import axaios from "axios";


export class Pokemon {
  get imageUrl(): string {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${this.id}.png`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // public imageUrl: string
  ) {}

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  public speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  public async getMoves() {

    console.log(import.meta.env.VITE_API_URL);
    
    const { data } = await axaios.get (`${import.meta.env.VITE_API_URL}/${this.id}`);

    console.log(data);

    return data.moves;
    
  }

}
export const charmander = new Pokemon(4, "Charmander");

// console.log(charmander);
// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves()  );
charmander.getMoves()

