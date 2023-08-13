import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient, { FetchResponse } from "../services/apiClient";

const useTrailer = (gameId: number) => {
  const apiCLient = new APIClient<Trailer>(`games/${gameId}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", gameId],
    queryFn: apiCLient.getAll,
  });
};

export default useTrailer;
