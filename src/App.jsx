import { useState, useEffect } from "react";
import Card from "./components/Card";
import ButtonGroup from "./components/ButtonGroup";

function App() {
  //store fetched data in useState
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState({});

  //loading state
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch the data (vanilla fetch)
  const fetchData = async () => {
    setPokemonData({});
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      if (response.ok === false) {
        throw new Error("Error grabbing data");
      }
      const json = await response.json();
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      // throw new Error("This is the best Error eVer!!!");
      setPokemonData({
        // sprite: json.sprites.front_default,
        sprite: json.sprites.other["official-artwork"].front_default,
        pokemonName: json.name,
        id: json.id,
      });
      console.log(pokemonData);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  //pokemonData.sprites.front_default
  //pokemonData.name
  //pokemonId

  //call fetched data on the component
  useEffect(() => {
    fetchData();
  }, [pokemonId]);

  return (
    <div className="flex flex-col gap-5 bg-slate-500 justify-center items-center h-screen w-screen  ">
      <Card pokemonData={pokemonData} isLoading={isLoading} error={error} />
      <ButtonGroup setPokemonId={setPokemonId} />
    </div>
  );
}

export default App;
