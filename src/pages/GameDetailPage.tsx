import { Heading, Spinner, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (error) throw error;
  if (!data) return null;

  return (
    <>
      <VStack paddingX={8} paddingY={4} rowGap={2} textAlign="justify">
        {isLoading && <Spinner />}
        <Heading>{data?.name}</Heading>
        <ExpandableText limit={300}>{data?.description_raw}</ExpandableText>
      </VStack>
      <GameAttributes game={data} />
    </>
  );
};

export default GameDetailPage;
