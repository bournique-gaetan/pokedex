import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from './components/PokemonCard'

function App() {
  const [index, setprevIndex] = useState(0);


  const handlePreviousPokemon = () => {
    setprevIndex(index - 1)
  }
  const handleNextPokemon = () => {
    setprevIndex(index + 1)
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[index]} />
      {index > 0 &&
        <button onClick={() => handlePreviousPokemon(index - 1)}>Previous</button>
      }
      {index < pokemonList.length - 1 &&
        <button onClick={() => handleNextPokemon(index + 1)}>Next</button>
      }

    </div>
  );

}


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];



export default App

//**<button onClick={handlePreviousPokemon}>Precedent</button>
//<button onClick={handleNextPokemon}>Suivant</button> //