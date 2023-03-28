import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
};



export default PokemonCard;