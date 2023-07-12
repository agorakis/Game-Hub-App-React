import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "./../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && (
        <Text padding={5} textAlign="center" fontSize="lg">
          {error.message}
        </Text>
      )}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={3} padding={5}>
          {isLoading ? (
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          ) : (
            <>
              {data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page?.results.map((game) => (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game} />
                    </GameCardContainer>
                  ))}
                </React.Fragment>
              ))}
            </>
          )}
        </SimpleGrid>
      </InfiniteScroll>

      {/* This is the button for Infinite Query implementation.  */}
      {/* {hasNextPage && (
        <Button
          margin={5}
          isDisabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </Button>
      )} */}
    </>
  );
};

export default GameGrid;
