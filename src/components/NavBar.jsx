
function Navbar({ index, setIndex, pokemonList }) {

    const handlePreviousPokemon = () => {
        setIndex(index - 1)
    }
    const handleNextPokemon = () => {
        setIndex(index + 1)
    }

    return (
        <nav>
            {index > 0 && <button onClick={handlePreviousPokemon}>Précédent</button>}
            {index < pokemonList.length - 1 && <button onClick={handleNextPokemon}>Suivant</button>}
        </nav>
    );
}

export default Navbar;



