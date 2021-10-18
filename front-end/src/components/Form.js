// import { Button, ButtonGroup } from "@chakra-ui/react";
// import { useColorMode } from "@chakra-ui/color-mode";
// import { Flex, Stack, Box, Text } from "@chakra-ui/layout";
// import { useMediaQuery } from "@chakra-ui/media-query";
// import React from "react";
// import {
//   Input,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
// } from "@chakra-ui/react";
// import Footer from "./Footer";

// export default function Login() {
//   const { colorMode } = useColorMode();
//   const isDark = colorMode === "dark";

//   const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

//   return (
//     <Stack>
//       {/* <Flex
//         direction={isNotSmallerScreen ? "row" : "column"}
//         spacing="200px"
//         p={isNotSmallerScreen ? "32" : "0"}
//         alignSelf="center"
//       ></Flex> */}
//       <Box mt={isNotSmallerScreen ? "100px" : 16} align="center">
//         <Text
//           color={isDark ? "gray.50" : "blue.700"}
//           fontSize="5xl"
//           fontWeight="semiBold"
//           padding="1rem"
//         >
//           Feedack Central
//         </Text>
//       </Box>

//       <FormControl align="center">
//         <Input width="25%" borderColor="blue.700" type="text" placeholder="Username" mb="10px" />
//       </FormControl>
//       <FormControl align="center">
//         <Input width="25%" borderColor="blue.700" type="password" placeholder="Password" mt="10px" />
//       </FormControl>

//       <FormControl align="center" top=".1rem" mb="200px" >
//         <Button
//           top="5rem"
//           width="100px"
//           right="10px"
//           colorScheme="teal"
//           variant="outline"
//           display="inline-block"
//         >
//           Login
//         </Button>
//         <Button
//           top="5rem"
//           width="100px"
//           left="10px"
//           colorScheme="teal"
//           variant="outline"
//           align="right"
//           display="inline-block"
//         >
//           Register
//         </Button>
//       </FormControl>

//     </Stack>
//   );
// }




import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>🖐Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'dark-lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}