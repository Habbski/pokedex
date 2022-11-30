import "../css/PokemonList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCell from "./PokemonCell";

function PokemonList({setPokemonDetail}) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

    axios.get(url).then((response) => {
      const pokemonList = response.data.results;

      setPokemon(pokemonList);
    });

    // const fetchData = async () => {
    //   const response = await fetch(
    //     "https://pokeapi.co/api/v2/pokemon?limit=151"
    //   );
    //   const data = await response.json();
    //   const pokemonList = data.results
    //     .slice(0, data.results.length)
    //     .map((item) => item)
    //     .flat();
    //   setPokemon(pokemonList);
    // };

    // fetchData();
    // console.log(pokemon);
  }, []);

  return (
    <div className="pokemon-list">
      {pokemon.map((pokemon, id) => {
        return (
          <PokemonCell key={id} pokemon={id} setPokemonDetail={setPokemonDetail} />
        );
      })}
    </div>
  );
}

export default PokemonList;
