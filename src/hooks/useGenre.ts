import useGenres from "./useGenres";

const useGenre = (id: number | undefined) => {
  const { data: genres } = useGenres();

  return genres?.results.find((item) => item.id === id);
};

export default useGenre;
