import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "./index.css";
import { Container, Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/contact-us-background.jpg";
import Footer from "../../components/Footer";

const About = () => {
  {
    /* --- handleOnSubmit method --- */
  }

  const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
  `;

  const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-basis: 100px;
    height: 200px;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px;
    grid-column-gap: 25px;
  `;

  const MainContainer = styled.div`
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attatchment: fixed;
  `;

  return (
    <MainContainer>
      <AboutContainer>
        <ImageContainer className="Dev1" boxSize="200px">
          <Image
            src="https://avatars.githubusercontent.com/u/61285870?v=4"
            alt="Marcus"
            borderRadius="full"
          />

          <Image
            src="https://avatars.githubusercontent.com/u/75281688?v=4"
            alt="Austin"
            borderRadius="full"
          />

          <Image
            src="https://avatars.githubusercontent.com/u/31683155?v=4"
            alt="Jose"
            borderRadius="full"
          />

          <Image
            src="https://avatars.githubusercontent.com/u/71038018?v=4"
            alt="Mo"
            borderRadius="full"
          />
        </ImageContainer>
      </AboutContainer>
      <Footer />
    </MainContainer>
  );
};
export default About;
