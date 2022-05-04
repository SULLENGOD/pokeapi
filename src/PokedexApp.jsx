import React, { useState } from "react";
import AddPokemon from "./components/AddPokemon";
import Navbar from "./components/Navbar";
import { PokemonGrid } from "./components/PokemonGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["gengar","haunter", "gastly", 41, 42, 169 ]);

  return (
    <>
      <Navbar />
      <h2>Pokedex App</h2>
      <AddPokemon setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <PokemonGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp; 
