import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
    />
  );
};

export default GameTrailer;
