import React from "react";
import { Text } from "@chakra-ui/react";
import AddDeleteBox from "../AddDeleteBox";
import EmployeeTable from "../EmployeeTable";
import EmployeeInput from "../EmployeeInput";
import NewEmployeeForm from "../EmployeeInput";
import NewEmployeePage from "./NewEmployeeAdd";

function Landing() {
  return (
    <>
      <h1 className="mainHeader">WELCOME, ARE YOu READY FOR ENGAGEMENT?</h1>
      <Text fontSize="lg" width="70%" marginTop="150px" marginLeft="40">
        Here at Feedback Central we yadayada yada Here at Feedback Central we
        yadayada yada Here at Feedback Central we yadayada yada Here at Feedback
        Central we yadayada yada Here at Feedback Central we yadayada yada
      </Text>
      <NewEmployeePage />
      <EmployeeTable />
    </>
  );
}
export default Landing;
