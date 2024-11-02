const ButtonGroup = ({ setPokemonId, pokemonId }) => {
  //press next and pokemonData goes to the next object
  const handleNext = () => {
    setPokemonId((currentId) => currentId + 1);
  };
  const handlePrevious = () => {
    if (pokemonId !== 1) {
      setPokemonId((currentId) => currentId - 1);
    }
  };
  return (
    <div className="flex  gap-5">
      <button
        className=" rounded-xl h-12 w-52 bg-red-400"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button className="rounded-xl w-52 bg-teal-500" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ButtonGroup;
