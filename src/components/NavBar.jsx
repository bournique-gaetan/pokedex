
function NavBar(props) {
    const { pokemonList, index, setIndex } = props;


    return (
        <nav>
            {pokemonList[index].name === "pikachu" ? alert("pika pikachu") : ""}
            {pokemonList.map((pokemon, i) => (
                <button
                    key={pokemon.name}
                    onClick={() => setIndex(i)}
                    disabled={index === i}
                >
                    {pokemon.name}
                </button>
            ))}
        </nav>
    );
}

export default NavBar;

