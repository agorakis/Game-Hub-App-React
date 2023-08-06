import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Game } from "./useGames";

const apiCLient = new APIClient<Game>("games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiCLient.get(slug),
  });

export default useGame;
