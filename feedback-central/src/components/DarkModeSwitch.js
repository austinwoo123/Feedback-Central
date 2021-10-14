// import { useMediaQuery } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";
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
          <Button as="a" variant="ghost" my={5} w="100%">
            <Link to="/home" className="nav-link active" href="./pages/Home.js">
              Fcentral
            </Link>
          </Button>

          <Button as="a" variant="ghost" my={5} w="100%">
            <Link
              to="/about"
              className="nav-link active"
              href="./pages/About.js"
            >
              About
            </Link>
          </Button>

          <Button as="a" variant="ghost" my={5} w="100%">
            <Link
              to="/contact"
              className="nav-link active"
              href="./pages/Contact.js"
            >
              Contact
            </Link>
          </Button>

          <Button as="a" variant="ghost" my={5} w="100%">
            <Link
              to="/contact"
              className="nav-link active"
              href="./pages/LoginPage.js"
            >
              Login
            </Link>
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
