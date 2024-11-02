import { useState } from "react";
import Card from "./components/Card";
import ButtonGroup from "./components/ButtonGroup";
import { useFetch } from "./hooks/useFetch";

function App() {
  //store fetched data in useState
  const [pokemonId, setPokemonId] = useState(1);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  const {
    data,
    isLoading: pokemonLoading,
    error: pokemonError,
  } = useFetch(url);

  const pokemonData = {
    sprite: data?.sprites?.other["official-artwork"]?.front_default,
    pokemonName: data.name,
    id: data.id,
  };

  // const [pokemonData, setPokemonData] = useState({});

  //loading state
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  //pokemonData.sprites.front_default
  //pokemonData.name
  //pokemonId

  //call fetched data on the component
  // useEffect(() => {
  //   let ignore = false;
  //   // fetch the data (vanilla fetch)
  //   const fetchData = async () => {
  //     setPokemonData({});
  //     setError(null);
  //     setIsLoading(true);
  //     try {
  //       console.log(`Fetching: ${pokemonId}`);
  //       const response = await fetch(
  //         `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  //       );
  //       await new Promise((resolve) => {
  //         setTimeout(resolve, Math.random() * 2000);
  //       });
  //       if (ignore) {
  //         return;
  //       }
  //       if (response.ok === false) {
  //         throw new Error("Error grabbing data");
  //       }
  //       const json = await response.json();
  //       setPokemonData({
  //         sprite: json.sprites.other["official-artwork"].front_default,
  //         pokemonName: json.name,
  //         id: json.id,
  //       });
  //       console.log(pokemonData);
  //     } catch (error) {
  //       setError(error.message);
  //       console.error("Error fetching data: ", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //     ignore = true;
  //   };
  // }, [pokemonId]);

  return (
    <div className="flex flex-col gap-5 bg-slate-500 justify-center items-center h-screen w-screen  ">
      {pokemonData && (
        <Card
          pokemonData={pokemonData}
          isLoading={pokemonLoading}
          error={pokemonError}
        />
      )}
      <ButtonGroup setPokemonId={setPokemonId} pokemonId={pokemonId} />
    </div>
  );
}

export default App;
