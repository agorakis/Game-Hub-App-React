import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesRepsonse {
  count: number;
  results: Game[];
}

const useGames = () => {
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

    return () => controller.abort();
  }, []);

  return { games, setGames, errors, setErrors, isLoading };
};

export default useGames;
