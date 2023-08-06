import { Box, Heading, Show, Text, VStack } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchInput from "../components/SearchInput";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Show breakpoint="(max-width: 767px)">
        <Box padding={4}>
          <SearchInput />
        </Box>
      </Show>
      <VStack paddingX={8} paddingY={4} rowGap={2} textAlign="justify">
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Sorry, this page doesn't exist."
            : "Sorry, an unexpected error occured."}
        </Text>
      </VStack>
    </>
  );
};

export default ErrorPage;
