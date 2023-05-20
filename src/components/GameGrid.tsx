import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const { data, errors, isLoading } = useGames();

  return (
    <>
      {errors && (
        <Text paddingTop={5} textAlign="center" fontSize="lg">
          {errors}
        </Text>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={3} padding={5}>
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
