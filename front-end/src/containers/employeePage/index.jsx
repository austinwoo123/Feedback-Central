import React from "react";
import styled from "styled-components";
import NewEmployeeForm from "../../components/newEmployeeForm";
import EmployeeTable from "../../components/newEmployeeTable";
import BackgroundImg from "../../assets/pictures/Fist-Bumps.jpg";
import NewEmployeePage from "../NewEmployeeAdd";
import { Navbar } from "../../components/navbar";

// import Footer from "../../components/footer";
// import { Marginer } from "../../components/marginer";
// import { MoreAboutSection } from "./moreAboutSection";
// import { ReviewsSection } from "./reviewsSection";
// import { ServicesSection } from "./servicesSection";
// import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BackgroundFilter2 = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function EmployeePage(props) {
  return (
    <PageContainer>
      <BackgroundFilter2>
        <Navbar />
        <NewEmployeePage />
        <EmployeeTable />

        {/* <Footer /> */}
      </BackgroundFilter2>
    </PageContainer>
  );
}
