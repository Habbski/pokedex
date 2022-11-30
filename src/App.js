import "./css/App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
