import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && (
        <Text paddingTop={5} textAlign="center" fontSize="lg">
          {error.message}
        </Text>
      )}
      {isLoading && <Spinner marginY={4} />}
      <List marginY={12}>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={10}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text
                _hover={{
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => onSelectGenre(genre)}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                textDecoration={
                  selectedGenre?.id === genre.id ? "underline" : "none"
                }
              >
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
