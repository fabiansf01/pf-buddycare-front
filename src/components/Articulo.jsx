import { Link } from "react-router-dom";
import style, {
  card,
  cover,
  img__back,
  description,
  idPokemon,
  typesContainer,
} from "../../styles/Pokblood.module.css";
import {deleteBtn} from "../../styles/Buttons.module.css"

function Pokemon(props) {
  const { name, types, urlImg, id, createInDb } = props.pokemons;
  const handleDelete  = props.handleDelete;

  return (
    <div className={card}>
      {createInDb && <button className={deleteBtn} onClick={() => handleDelete(id)}>X</button>}
      <div className={cover}>
        <img src={urlImg} alt="Pokemons" />
        <div className={img__back}></div>
      </div>
      <div className={description}>
        <h2>{name} </h2>
        {createInDb ? (
          <div className={idPokemon}>ID.POK:{id.slice(0, 5)}</div>
        ) : (
          <div className={idPokemon}>ID.POK:{id}</div>
        )}
        <div className={typesContainer}>
          {types?.map((type, i) => (
            <p className={style[type.toLowerCase()]} key={i}>
              {type}
            </p>
          ))}
        </div>
        <Link to={`/detail/${id}`}>
          <button>POKEMON INFO</button>
        </Link>
      </div>
    </div>
  );
}

export default Pokemon;
