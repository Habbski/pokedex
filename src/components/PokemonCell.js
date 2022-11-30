import "../css/PokemonCell.css";

function PokemonCell({pokeclass}) {
  return (
    <button className="pokemon-cell">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokeclass + 1
        }.png`}
        alt={pokeclass}
      ></img>
    </button>
  );
}

export default PokemonCell;
