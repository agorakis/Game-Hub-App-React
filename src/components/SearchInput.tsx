import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={BsSearch} />
      </InputLeftElement>
      <Input
        type="search"
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
