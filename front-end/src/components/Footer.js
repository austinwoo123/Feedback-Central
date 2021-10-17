import React from "react";
import { Text } from '@chakra-ui/react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="../about" target="_blank">Team</FooterLink>
            <FooterLink href="https://github.com/austinwoo123/Feedback-Central" target="_blank">Codes (repo)</FooterLink>
            <FooterLink href="#" target="_blank">Vision</FooterLink>
            <FooterLink href="#" target="_blank">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Resources</Heading>
            <FooterLink href="https://2u.com/" target="_blank">2U</FooterLink>
            <FooterLink href="https://www.achievers.com/" target="_blank">achievers</FooterLink>
            <FooterLink href="https://www.w3schools.com/" target="_blank">Coding</FooterLink>
            <FooterLink href="https://www.themuse.com/" target="_blank">themuse</FooterLink>
          </Column>
          <Column>
            <Heading>GitHub</Heading>
            <FooterLink href="https://github.com/austinwoo123" target="_blank">Austin Woo</FooterLink>
            <FooterLink href="https://github.com/chavalk" target="_blank">Jose Garcia</FooterLink>
            <FooterLink href="https://github.com/marcuspramirez" target="_blank">Marcus Ramirez</FooterLink>
            <FooterLink href="https://github.com/karimi65" target="_blank">Mohammad Ali</FooterLink>
          </Column>
          <Column>
            <Heading>Linkedin</Heading>
            <FooterLink href="https://www.linkedin.com/in/awoo95" target="_blank">

              <span style={{ marginLeft: "10px" }}>Austin</span>

            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/jose-s-garcia/" target="_blank">

              <span style={{ marginLeft: "10px" }}>Jose</span>

            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/marcus-ramirez-43b523134/" target="_blank">

              <span style={{ marginLeft: "10px" }}>Marcus</span>

            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/mohammad-ali-karimi/" target="_blank">

              <span style={{ marginLeft: "10px" }}>Mohammad</span>

            </FooterLink>
          </Column>
        </Row>
        <footer className="container mx-auto py-2">
          <Text fontSize="md" align="center" color="white">{new Date().getFullYear()} Feedback Central</Text>
        </footer>
      </Container>

    </Box>
  );
};
export default Footer;
