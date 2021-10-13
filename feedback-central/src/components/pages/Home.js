import React from "react";
import { Grid } from "@chakra-ui/react";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";
import AddDeleteBox from "../AddDeleteBox";
import EmployeeTable from "../EmployeeTable";
import UserComponent from "../UserComponent";

function Home() {
  return (
    <>
      <DarkModeSwitch />

      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={10}
      >
        <AddDeleteBox />
        <EmployeeTable />
        <UserComponent />
      </Grid>
    </>
  );
}
export default Home;
