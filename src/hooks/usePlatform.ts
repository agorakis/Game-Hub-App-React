import usePlatforms from "./usePlatforms";

const usePlatform = (id: number | undefined) => {
  const { data: platforms } = usePlatforms();

  return platforms?.results.find((item) => item.id === id);
};

export default usePlatform;
