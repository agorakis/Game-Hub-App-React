import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, errors, isLoading } = useGenres();
  return (
    <>
      {errors && <Text>{errors}</Text>}
      {isLoading && <Text>Loading.....</Text>}

      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </>
  );
};

export default GenreList;
