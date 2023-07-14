import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genreId: number | undefined) => void;
  selectedGenreId: number | undefined;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: GenreListProps) => {
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
                onClick={() => onSelectGenre(genre.id)}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                textDecoration={
                  selectedGenreId === genre.id ? "underline" : "none"
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
