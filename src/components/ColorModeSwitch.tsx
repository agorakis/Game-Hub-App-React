import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack whiteSpace="nowrap" paddingX={2}>
      <Text>Dark Mode</Text>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
