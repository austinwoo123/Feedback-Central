// import { useMediaQuery } from "@chakra-ui/media-query";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  // const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex>
      <Flex
        // mt={isNotSmallerScreen ? "0" : 16}
        position="fixed"
        top=".5rem"
        left=".5rem"
        align="center"
      >
        <Flex>
          <Button as="a" variant="ghost" aria-lable="Home" my={5} w="100%">
            Home
          </Button>

          <Button as="a" variant="ghost" aria-lable="Home" my={5} w="100%">
            About
          </Button>

          <Button as="a" variant="ghost" aria-lable="Home" my={5} w="100%">
            Contact
          </Button>
        </Flex>
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          margin="1rem"
        />
      </Flex>
    </Flex>
  );
};
