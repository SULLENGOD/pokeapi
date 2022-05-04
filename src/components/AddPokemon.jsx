import React, { useState } from "react";
import PropTypes from "prop-types";

const AddPokemon = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

export default AddPokemon;

AddPokemon.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
