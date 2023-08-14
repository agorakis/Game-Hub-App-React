import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface GameScreenshotsProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={3}>
      {data?.results.map((item) => (
        <Image key={item.id} src={item?.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
