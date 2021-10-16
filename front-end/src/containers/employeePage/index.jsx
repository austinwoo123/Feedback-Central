import React from "react";
import styled from "styled-components";
import NewEmployeeForm from "../../components/newEmployeeForm";
import EmployeeTable from "../../components/newEmployeeTable";
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
`;

export function EmployeePage(props) {
  return (
    <PageContainer>
      <NewEmployeeForm />
      <EmployeeTable />

      {/* <Footer /> */}
    </PageContainer>
  );
}
