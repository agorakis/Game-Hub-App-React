import { Flex, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      gap={6}
      padding={2}
    >
      <Image src={logo} boxSize="60px"></Image>
      <Show above="md">
        <SearchInput onSearch={onSearch} />
      </Show>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
