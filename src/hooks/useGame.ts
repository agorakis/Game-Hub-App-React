import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Game } from "../entities/Game";

const apiCLient = new APIClient<Game>("games");

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiCLient.get(slug),
  });

export default useGame;
