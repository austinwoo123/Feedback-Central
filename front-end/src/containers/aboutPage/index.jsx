import { ReactElement } from 'react';
import {
  Box, SimpleGrid, Icon, Text, Stack, Flex,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Form,
  TextArea,
  Button,
  Heading,
  useColorModeValue,
  Wrap, WrapItem, Avatar,
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Footer from "../../components/Footer";
import { Navbar } from "../../components/navbar";

// interface FeatureProps {
//   title: string;
//   text: string;
//   icon: ReactElement;
// }

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (

    <Box p={4}>
      <Navbar />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <div>
          <Wrap mt="40px">
            <WrapItem>
              <Avatar size="2xl" name="Dan Abrahmov" src="https://avatars.githubusercontent.com/u/61285870?v=4" />
            </WrapItem>
            <WrapItem>
              <Avatar size="2xl" name="Kola Tioluwani" src="https://avatars.githubusercontent.com/u/75281688?v=4" />
            </WrapItem>
            <WrapItem>
              <Avatar size="2xl" name="Kent Dodds" src="https://avatars.githubusercontent.com/u/31683155?v=4" />
            </WrapItem>
            <WrapItem>
              <Avatar size="2xl" name="Ryan Florence" src="https://avatars.githubusercontent.com/u/71038018?v=4" />
            </WrapItem>
          </Wrap>
        </div>
        <div>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Lifetime Support'}
            text={
              'Our developers team consists of four hard working and dedicated individuals. We are are committed to making any and every feedback process better. Engagement begins with feedback. With that being said please give us YOUR feedback and let us know how we can further assist you!'
            }
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Unlimited Donations'}
            text={
              'Our developers team consists of four hard working and dedicated individuals. We are are committed to making any and every feedback process better. Engagement begins with feedback. With that being said please give us YOUR feedback and let us know how we can further assist you!'
            }
          />
        </div>

        <div>
          <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'2xlg'} py={12} px={6}>

              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'dark-lg'}
                p={8}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Name</FormLabel>
                    <Input type="name" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Message</FormLabel>
                    <Input type="name" />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox>Remember me</Checkbox>

                    </Stack>
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </div>
      </SimpleGrid>
      <Footer />
    </Box>

  );
}




























// import React from "react";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
// import "./aboutPage.css";
// import { Container, Image } from "@chakra-ui/react";
// import { Box, Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";
// import styled from "styled-componcdents";
// import BackgroundImg from "../../assets/pictures/contact-us-background.jpg";
// import { Navbar } from "../../components/navbar";
// import Footer from "../../components/Footer";

// const About = () => {
//   {
//     /* --- handleOnSubmit method --- */
//   }

//   const AboutContainer = styled.div`
//     width: 100%;
//     height: 100vh;
//     padding: 0;
//   `;

//   const ImageContainer = styled.div`
//     width: 100%;
//     display: flex;
//     flex-basis: 100px;
//     height: 200px;
//     grid-template-columns: 100px 100px;
//     grid-template-rows: 100px;
//     grid-column-gap: 75px;
//   `;

//   // const BackgroundFilter2 = styled.div`
//   //   width: 100%;
//   //   height: 100%;
//   //   background-color: lightgrey;
//   //   display: flex;
//   //   flex-direction: column;
//   //   align-items: center;
//   //   background-size: cover;
//   // `;

// const MainContainer = styled.div`
//       background-image: url(${BackgroundImg});
//       background-repeat: no-repeat;
//       background-size: cover;
//       background-attatchment: fixed;
//   `;

//   return (
//     <>
//       <MainContainer>
//         <Navbar />
//         <AboutContainer>

//           <Wrap mt="40px">
//             <WrapItem>
//               <Avatar size="2xl" name="Dan Abrahmov" src="https://avatars.githubusercontent.com/u/61285870?v=4" />
//             </WrapItem>
//             <WrapItem>
//               <Avatar size="2xl" name="Kola Tioluwani" src="https://avatars.githubusercontent.com/u/75281688?v=4" />
//             </WrapItem>
//             <WrapItem>
//               <Avatar size="2xl" name="Kent Dodds" src="https://avatars.githubusercontent.com/u/31683155?v=4" />
//             </WrapItem>
//             <WrapItem>
//               <Avatar size="2xl" name="Ryan Florence" src="https://avatars.githubusercontent.com/u/71038018?v=4" />
//             </WrapItem>
//           </Wrap>

//           {/* <ImageContainer className="Dev1" boxSize="200px">
//             <Image
//               src="https://avatars.githubusercontent.com/u/61285870?v=4"
//               alt="Marcus"
//               borderRadius="full"
//             />

//             <Image
//               src="https://avatars.githubusercontent.com/u/75281688?v=4"
//               alt="Austin"
//               borderRadius="full"
//             />

//             <Image
//               src="https://avatars.githubusercontent.com/u/31683155?v=4"
//               alt="Jose"
//               borderRadius="full"
//             />

//             <Image
//               src="https://avatars.githubusercontent.com/u/71038018?v=4"
//               alt="Mo"
//               borderRadius="full"
//             />
//           </ImageContainer> */}
//         </AboutContainer>

//         {/* <div className="Email">
//           <Form>
//             <Form.Field
//               id="form-input-control-email"
//               control={Input}
//               name="user_email"
//               placeholder="Email…"
//               required
//               icon="mail"
//               iconPosition="left"
//             />
//             <Form.Field
//               id="form-input-control-last-name"
//               control={Input}
//               name="user_name"
//               placeholder="Name…"
//               required
//               icon="user circle"
//               iconPosition="left"
//             />
// <Form.Field
//   id="form-textarea-control-opinion"
//   control={TextArea}
//   name="user_message"
//   placeholder="Message…"
//   required
// />
//             <Button type="submit" color="green">
//               Submit
//             </Button>
//           </Form>
//         </div>
//         <Container className="Developers">
//           <div className="DevHeader">From the Team</div>

//           Our developer team consists of four hard working and dedicated
//           individuals. We are are committed to making any and every feedback
//           process better. Engagement begins with feedback. With that being
//           said please give us YOUR feedback and let us know how we can
//           further assist you!

//         </Container>
//         <Container className="Developers2">
//           <div className="DevHeader2">On Another Note</div>
//           <Box>
// Our developer team consists of four hard working and dedicated
// individuals. We are are committed to making any and every feedback
// process better. Engagement begins with feedback. With that being
// said please give us YOUR feedback and let us know how we can
// further assist you!
//           </Box>
//         </Container> */}

//         <Grid
//           h="200px"
//           templateRows="repeat(2, 1fr)"
//           templateColumns="repeat(5, 1fr)"
//           gap={4}
//         >
//           {/* <GridItem rowSpan={2} colSpan={1} bg="tomato" /> */}
//           <GridItem colSpan={2} bg="papayawhip" />
//           <GridItem colSpan={2} bg="papayawhip" />
//           <GridItem colSpan={4} bg="tomato" />
//         </Grid>

//       </MainContainer>
//       <Footer />
//     </>
//   );
// };
// export default About;


