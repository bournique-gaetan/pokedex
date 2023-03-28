function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        pokemon.imgSrc !== undefined ?
            (
                <figure>
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                    <figcaption>{pokemon.name}</figcaption>
                </figure>
            ) : (
                <figure>
                    <p>???</p>
                    <figcaption>{pokemon.name}</figcaption>
                </figure>
            )

    )
}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

export default PokemonCard;