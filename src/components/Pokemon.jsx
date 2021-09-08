import React from "react";
import initialState from "../hooks/useInitialState";
import "../assets/styles/components/Pokemon.css";
const API = "https://pokeapi.co/api/v2/pokemon/";

const Pokemon = () => {
  const initialSte = initialState(API);

  return (
    <section className="pokemon">
      <section className="pokemon__container">
        {initialSte.results.map((item, index) => (
          <article className="pokemon__card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={`${item.name}`}
            />
            <p>{`${item.name}`}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Pokemon;
