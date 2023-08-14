import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "./../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (error) throw error;
  if (!data) return null;

  return (
    <>
      {isLoading && (
        <VStack paddingX={8} paddingY={4}>
          <Spinner />
        </VStack>
      )}

      <SimpleGrid
        paddingX={8}
        paddingY={4}
        columns={{ sm: 1, md: 2 }}
        spacing={4}
      >
        <Flex flexDirection="column" rowGap={4}>
          <Heading>{data?.name}</Heading>
          <ExpandableText limit={300}>{data?.description_raw}</ExpandableText>
          <GameAttributes game={data} />
        </Flex>
        <Flex flexDirection="column" rowGap={4}>
          <GameTrailer gameId={data?.id} />
          <GameScreenshots gameId={data?.id} />
        </Flex>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
