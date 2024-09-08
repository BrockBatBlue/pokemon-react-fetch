const ButtonGroup = ({ setPokemonId }) => {
  //press next and pokemonData goes to the next object
  const handleNext = () => {
    setPokemonId((currentId) => currentId + 1);
  };
  const handlePrevious = () => {
    setPokemonId((currentId) => {
      if (currentId !== 1) {
        return currentId - 1;
      } else {
        return currentId;
      }
    });
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
