import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesRepsonse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const request = apiClient.get<FetchGamesRepsonse>("games", {
      signal: controller.signal,
    });

    setIsLoading(true);

    request
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
        setIsLoading(false);
      });

    return () => controller.abort;
  }, []);

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
