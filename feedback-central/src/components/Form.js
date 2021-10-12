import { Button, ButtonGroup } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Stack, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function Login() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="center"
      ></Flex>
      <Box mt={isNotSmallerScreen ? "0" : 16} align="center">
        <Text
          color={isDark ? "gray.50" : "blue.700"}
          fontSize="5xl"
          fontWeight="semiBold"
          padding="1rem"
        >
          Feedack Central
        </Text>
      </Box>
      {/* <Button mt={8} colorScheme="blue" onClick={() =>
           window.open("https://google.com")
           }>Google</Button> */}
      <FormControl color={isDark ? "gray.50" : "blue.700"} id="email">
        {/* <FormLabel textAlign="center">Password</FormLabel> */}
        <Input borderColor="blue.700" type="text" placeholder="Username" />
      </FormControl>
      <FormControl
        top=".1rem"
        color={isDark ? "gray.50" : "blue.700"}
        id="email"
      >
        {/* <FormLabel textAlign="center">Password</FormLabel> */}
        <Input borderColor="blue.700" type="password" placeholder="Password" />

        <Button
          top="1rem"
          width="100px"
          left="6rem"
          colorScheme="teal"
          variant="outline"
          display="inline-block"
        >
          Login
        </Button>
        <Button
          top="1rem"
          width="100px"
          left="7rem"
          colorScheme="teal"
          variant="outline"
          align="right"
          display="inline-block"
        >
          Register
        </Button>
      </FormControl>
    </Stack>
  );
}
