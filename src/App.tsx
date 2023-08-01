import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SearchInput from "./components/SearchInput";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
        <Show breakpoint="(max-width: 767px)">
          <Box padding={4}>
            <SearchInput />
          </Box>
        </Show>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={3} textAlign="center">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading />
        <Flex gap={3} paddingLeft={5} paddingTop={5}>
          <PlatformSelector />
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
