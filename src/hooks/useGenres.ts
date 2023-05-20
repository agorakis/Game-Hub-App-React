import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresRepsonse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    const request = apiClient.get<FetchGenresRepsonse>("genres", {
      signal: controller.signal,
    });

    request
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, errors, isLoading };
};

export default useGenres;
