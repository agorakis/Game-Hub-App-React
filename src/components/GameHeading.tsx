import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${genre?.name || ""}  ${platform?.name || ""} Games`;

  return (
    <Heading paddingLeft={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
