/* Import Card component which renders each Pokémon card */
import Card from "./Card"; 
/* Import CSS styling for the app*/
import "./App.css";
/* Import React library */
import {useState} from "react";
/*import pokemon logo*/
import pokemonLogo from './assets/pokemon-logo.png';

/* -------------------------------------------------------
   DATA: Pokémon dataset; Each object represents one Pokémon and his stats
------------------------------------------------------- */
const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];
/*extract types from the pokemons array*/
const types = [
  "All",
  "Grass",
  "Fire",
  "Water",
  "Electric",
  "Psychic",
  "Normal",
  "Ghost",
  "Dragon",
  "Fighting",
  "Rock",
];

/* -------------------------------------------------------
   export component: App; This is the main component that renders the Pokémon cards
------------------------------------------------------- */
export default function App() {
  const [selectedType, setSelectedType] = useState("All");

const visiblePokemons =
  selectedType === "All"  ? pokemons  :  pokemons.filter((pokemon) => pokemon.type === selectedType);

/* pokémon logo and introduction text, then type filters */
  return (
    <main>
      <img className="pokemon-logo" src={pokemonLogo} alt="Pokémon" />
      <p className="introtxt">20 of the most popular Pokémon cards ordered by hit points, attack power, and type</p>
      <div className="type-filters">
        {types.map((type) => (
          <button
          key={type}
          type="button"
          onClick={() => setSelectedType(type)}
          className={selectedType === type ? "active" : ""}
          >
            {type}
          </button>
  ))}
</div>

      <div className="pokemon-grid">
        {visiblePokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}

/* pills for filtering
  - add pills (nuovo file jsx)
  - add filtering based on the pills
  - add styling for the cards
  - add pictures
  - can we add some filters on attack and hp?
    picture? DONE
*/
  
  