import "../css/DetailPokemonView.css";

function DetailPokemonView({ pokemonDetail }) {
  const firstCharBig = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="detail-pokemon-view">
      <div className="image-container">
        <img
          className="image"
          src={
            pokemonDetail.sprites
              ? pokemonDetail.sprites.front_default
              : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
          }
        ></img>
      </div>
      <div>
        <div>
          {pokemonDetail.name ? (
            <h3>{firstCharBig(pokemonDetail.name)}</h3>
          ) : (
            <h4>Metapod</h4>
          )}
        </div>
        <div className="info-container">
          <p className="info-text">
            Type:
            {pokemonDetail.types ? (
              pokemonDetail.types.map((type, id) => {
                return <li key={id}>{firstCharBig(type.type.name)}</li>;
              })
            ) : (
              <li>Bug</li>
            )}
          </p>
        </div>
        <div className="info-container">
          <p className="info-text">
            Height: {pokemonDetail.height ? pokemonDetail.height / 10 : 0.7} m
          </p>
        </div>
        <div className="info-container">
          <p className="info-text">
            Weight: {pokemonDetail.weight ? pokemonDetail.weight / 10 : 9.9} kg
          </p>
        </div>
        <div className="info-container">
          <p className="info-text">
            Abilities:
            {pokemonDetail.abilities ? (
              pokemonDetail.abilities.map((ability, id) => {
                return <li key={id}>{firstCharBig(ability.ability.name)}</li>;
              })
            ) : (
              <li>Shed-skin</li>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPokemonView;
