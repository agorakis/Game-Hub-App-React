import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, errors, isLoading } = useGenres();
  return (
    <>
      {errors && (
        <Text paddingTop={5} textAlign="center" fontSize="lg">
          {errors}
        </Text>
      )}
      {isLoading && <Spinner marginY={4} />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={10}
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
