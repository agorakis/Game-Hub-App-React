import { Flex, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      gap={6}
      padding={2}
    >
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Show above="md">
        <SearchInput />
      </Show>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
