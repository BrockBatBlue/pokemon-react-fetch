const Card = ({ pokemonData, isLoading, error }) => {
  return (
    <div className="flex flex-col justify-around gap-3 items-center border-2 border-pink-700 h-2/3 w-1/3 rounded-2xl bg-pink-300">
      {error ? (
        <p className="text-3xl">{error}</p>
      ) : isLoading ? (
        <div className="text-3xl">Loading</div>
      ) : (
        <>
          <img className="max-w-96  w-full" src={pokemonData.sprite} />
          <h3 className="text-xl font-semibold">
            {pokemonData?.pokemonName?.toUpperCase()}
          </h3>
          <p className="text-lg font-semibold">No. {pokemonData.id}</p>
        </>
      )}
    </div>
  );
};

export default Card;
