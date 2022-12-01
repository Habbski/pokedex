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
    <>
      <div className="main-font-image">
        <img src="https://camo.githubusercontent.com/418d92ecbe7cd1805153001a34147ab7c965103432ff4a68eaa2fc5d4e6c1b42/68747470733a2f2f696b2e696d6167656b69742e696f2f6877796b73766a3469762f706f6b656465785f4e5f576757724a4b30732e706e67"></img>
      </div>
      <div className="App">
        <PokemonList setPokemonDetail={setPokemonDetail} />
        <DetailPokemonView pokemonDetail={pokemonDetail} />
      </div>
    </>
  );
}

export default App;
