import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, errors, isLoading, setGames, setErrors } = useGames();

  return (
    <>
      {isLoading && <h3>Loading....</h3>}
      {errors && <h3>{errors}</h3>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
