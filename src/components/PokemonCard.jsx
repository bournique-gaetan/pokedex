function PokemonCard({ pokemon }) {
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



export default PokemonCard;