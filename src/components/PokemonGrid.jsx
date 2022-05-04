import React from "react";
import PropTypes from "prop-types";
import { useFetchPoke } from "../hooks/useFetchPoke";


const PokemonGrid = ({ category }) => {
  const { data, loading } = useFetchPoke(category);

  return (
    <>
      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card">
        <h1>{data.name}</h1>
        <h3>Pokemon No. {data.id}</h3>

        <div className="card-grid">
          <img src={data.img} alt={data.name} />
          
        </div>
      </div>
    </>
  );
};

PokemonGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export { PokemonGrid };
