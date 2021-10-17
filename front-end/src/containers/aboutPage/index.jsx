import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "./index.css";
import { Container, Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/contact-us-background.jpg";

const About = () => {
  {
    /* --- handleOnSubmit method --- */
  }

  const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-attatchment: fixed;
  `;

  return (
    <AboutContainer>
      <Box className="Dev1" boxSize="200px">
        <Image
          src="https://avatars.githubusercontent.com/u/61285870?v=4"
          alt="Marcus"
          borderRadius="full"
        />
      </Box>
      <Box className="Dev2" boxSize="200px">
        <Image
          src="https://avatars.githubusercontent.com/u/75281688?v=4"
          alt="Austin"
          borderRadius="full"
        />
      </Box>
      <Box className="Dev3" boxSize="200px">
        <Image
          src="https://avatars.githubusercontent.com/u/31683155?v=4"
          alt="Jose"
          borderRadius="full"
        />
      </Box>
      <Box className="Dev4" boxSize="200px">
        <Image
          src="https://avatars.githubusercontent.com/u/71038018?v=4"
          alt="Mo"
          borderRadius="full"
        />
      </Box>
      <div className="App">
        <Form>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Name…"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Message…"
            required
          />
          <Button type="submit" color="green">
            Submit
          </Button>
        </Form>
        <Container className="Developers">
          <div className="DevHeader">From the Team</div>
          <Box>
            Our developer team consists of four hard working and dedicated
            individuals. We are are committed to making any and every feedback
            process better. Engagement begins with feedback. With that being
            said please give us YOUR feedback and let us know how we can further
            assist you!
          </Box>
        </Container>
        <Container className="Developers2">
          <div className="DevHeader2">On Another Note</div>
          <Box>
            Our developer team consists of four hard working and dedicated
            individuals. We are are committed to making any and every feedback
            process better. Engagement begins with feedback. With that being
            said please give us YOUR feedback and let us know how we can further
            assist you!
          </Box>
        </Container>
      </div>
    </AboutContainer>
  );
};
export default About;
