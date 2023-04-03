import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import Navbar from './components/NavBar'
import React, { useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);


  return (
    <div>
      <PokemonCard pokemon={pokemonList[index]} />
      <Navbar index={index} setIndex={setIndex} pokemonList={pokemonList} />
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