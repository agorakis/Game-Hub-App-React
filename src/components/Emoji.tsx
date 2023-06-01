import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbsUp.webp";
import bullsEye from "../assets/bullsEye.webp";
import { ImageProps, Image } from "@chakra-ui/react";

const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
