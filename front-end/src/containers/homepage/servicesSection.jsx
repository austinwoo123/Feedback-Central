import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";
import { Input, Stack } from "@chakra-ui/react";
import NewEmployeeForm from "../../components/newEmployeeForm";
import EmployeeTable from "../../components/newEmployeeTable";

import Service1Img from "../../assets/illustrations/welcomeEmployee.jpg";
import Service2Img from "../../assets/illustrations/fancy-input.png";
// import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  color: black;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Add Your Employees</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Have a new employee?"
        description="Add your new associate to the form below.  Start keeping
        track from day one to help improve your engagement and onboarding!"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Mission Statement?"
        description="Add your new associate to the form below.  Start keeping
        track from day one to help improve your engagement and onboarding!"
        imgUrl={Service2Img}
      />
      <OurSerivce
        title="Have a new employee?"
        description="Add your new associate to the form below.  Start keeping
        track from day one to help improve your engagement and onboarding!"
        imgUrl={Service1Img}
      />
      {/* <NewEmployeeForm />
      <EmployeeTable /> */}
    </ServicesContainer>

    /* <OurSerivce
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          compnay needs"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Mobile optimized"
        description="We build and deliver fully integrated webapps
          with customized control panels that fit your 
          compnay needs"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Quality is our priority"
        description="We have teams of professional developers, designers
        and managers that ensures delivering the best 
        software quality for your company"
        imgUrl={Service3Img}
      /> */
  );
}
