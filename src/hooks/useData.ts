import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    const request = apiClient.get<FetchResponse<T>>(endpoint, {
      signal: controller.signal,
    });

    request
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, errors, isLoading };
};

export default useData;
