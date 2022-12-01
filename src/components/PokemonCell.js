import "../css/PokemonCell.css";
import axios from "axios";

function PokemonCell({ pokemon, setPokemonDetail }) {
  const handleBtnClick = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon + 1}/`;

    axios
      .get(url)
      .then((response) => {
        setPokemonDetail(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <button className="pokemon-cell" onClick={handleBtnClick}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemon + 1
        }.png`}
        alt={pokemon}
      ></img>
    </button>
  );
}

export default PokemonCell;
