import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import SearchInput from "./components/SearchInput";

export interface GameQuery {
  genreId: number | undefined;
  platformId: number | undefined;
  sortOrder: string;
  searchText: string;
  page: number | null;
  page_size: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genreId: number | undefined) => {
    setGameQuery({ ...gameQuery, genreId });
  };

  const onSelectPlatform = (platformId: number | undefined) => {
    setGameQuery({ ...gameQuery, platformId });
  };

  const onSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const onSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearch={onSearch} />
        <Show breakpoint="(max-width: 767px)">
          <Box padding={4}>
            <SearchInput onSearch={onSearch} />
          </Box>
        </Show>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={3} textAlign="center">
          <GenreList
            onSelectGenre={onSelectGenre}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading gameQuery={gameQuery} />
        <Flex gap={3} paddingLeft={5} paddingTop={5}>
          <PlatformSelector
            onSelectPlatform={onSelectPlatform}
            selectedPlatformId={gameQuery.platformId}
          />
          <SortSelector
            onSelectSortOrder={onSelectSortOrder}
            selectedSortOrder={gameQuery.sortOrder}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
