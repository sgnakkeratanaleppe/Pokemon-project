import Barplot from "./Barplot";

const pokemonImages = import.meta.glob("./assets/characters/*.png", {
    eager: true,
    import: "default"
});

export default function Card({pokemon}) {
    const image = pokemonImages[`./assets/characters/${pokemon.name}.png`];

    return (
        <article className="pokemon-card">
            <img className="pokemon-image" src={image} alt={pokemon.name} />
            <h2 style={{ textAlign: "center" }}>{pokemon.name}</h2>
            <p className="pokemon-type">{pokemon.type}</p>
            <Barplot hp={pokemon.hp} attack={pokemon.attack} />
        </article>
    );
}