import "./css/App.css";
import PokemonList from "./components/PokemonList";
import DetailPokemonView from "./components/DetailPokemonView";
import { useEffect, useState } from "react";

function App() {
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    console.log(pokemonDetail);
  });

  return (
    <div className="App">
      <PokemonList setPokemonDetail={setPokemonDetail} />
      <DetailPokemonView pokemonDetail={pokemonDetail} />
    </div>
  );
}

export default App;
