import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((item) => item.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (item) => item.id === gameQuery.platformId
  );

  const heading = `${genre?.name || ""}  ${platform?.name || ""} Games`;

  return (
    <Heading paddingLeft={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
