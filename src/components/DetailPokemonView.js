import "../css/DetailPokemonView.css";

function DetailPokemonView({pokemonDetail}) {
  return (
    <div className="detail-pokemon-view">
      <div className="image-container">
        <img className="image" src={pokemonDetail?.sprites?.front_default}></img>
      </div>
      <p>Name: {pokemonDetail?.name?.charAt(0).toUpperCase() + pokemonDetail?.name?.slice(1)}</p>
      <p>Type: {pokemonDetail?.types?.map((type, id) => {
        return <li key={id}>{type.type.name}</li>
      })}</p>
      <p>Height: {pokemonDetail?.height / 10 + " m"}</p>
      <p>Weight: {pokemonDetail?.weight / 10 + " kg"}</p>
      <p>Abilities: {pokemonDetail?.abilities?.map((ability, id) => {
        return <li key={id}>{ability.ability.name}</li>
      })}</p>
      <p>Gender: {}</p>
    </div>
  );
}

export default DetailPokemonView;
