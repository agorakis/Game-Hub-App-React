import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery?.genre?.name || ""}  ${
    gameQuery?.platform?.name || ""
  } Games`;

  return (
    <Heading paddingLeft={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
