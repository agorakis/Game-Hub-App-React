import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (error) throw error;
  return (
    <>
      <VStack paddingX={8} paddingY={4} rowGap={2} textAlign="justify">
        {isLoading && <Spinner />}
        <Heading>{data?.name}</Heading>
        <ExpandableText limit={300}>{data?.description_raw}</ExpandableText>
      </VStack>
    </>
  );
};

export default GameDetailPage;
