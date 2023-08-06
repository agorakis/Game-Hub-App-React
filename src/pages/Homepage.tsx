import { Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
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
};

export default Homepage;
