import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (error) throw error;
  return (
    <>
      <VStack paddingX={8} paddingY={4} rowGap={2} textAlign="justify">
        {isLoading && <Spinner />}
        <Heading>{data?.name}</Heading>
        <Text>{data?.description_raw}</Text>
      </VStack>
    </>
  );
};

export default GameDetailPage;
