import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <DefinitionItem term="Plattforms">
        {game?.parent_platforms?.map((item) => (
          <Text key={item.platform.id}>{item.platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game?.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game?.genres?.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game?.publishers?.map((item) => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
