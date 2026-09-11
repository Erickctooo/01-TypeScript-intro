//import { name, age } from './bases/01-types';
// import { pokemons, pokemosIds } from "./bases/02-objects";
import { charmander } from "./bases/03-classes";


const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
    <h1>Hello ${charmander.name}!</h1>
`;
