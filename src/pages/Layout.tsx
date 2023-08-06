import { Box, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchInput from "../components/SearchInput";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Show breakpoint="(max-width: 767px)">
        <Box padding={4}>
          <SearchInput />
        </Box>
      </Show>
      <Outlet />
    </>
  );
};

export default Layout;
