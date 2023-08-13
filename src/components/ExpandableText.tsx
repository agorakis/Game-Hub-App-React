import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  limit: number;
  children: string | undefined;
}

const ExpandableText = ({ limit, children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : `${children.substring(0, limit)}. . .`;

  return (
    <>
      <Text textAlign="justify">
        {summary}
        <Button
          marginX={2}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
