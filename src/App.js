import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState("");
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=40";

    axios.get(url).then((response) => {
      setPokemons(response.data.results);
    });
  }, []);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/1";

    axios.get(url).then((response) => {
      setPokemon(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>POKEDEX</h1>
      </div>
      <div>
        {pokemons
          ? pokemons.map((pokemon) => {
              return <p>{pokemon.name}</p>;
            })
          : null}
      </div>
    </>
  );
}

export default App;
