import { useState, useEffect } from "react";

function App() {
  //store fetched data in useState
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  // fetch the data (vanilla fetch)
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      if (response.ok === false) {
        throw new Error("Error grabbing data");
      }
      const json = await response.json();
      setPokemonData(json);
      console.log(pokemonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //call fetched data on the component
  useEffect(() => {
    fetchData();
  }, [pokemonId]);

  return <></>;
}

export default App;
