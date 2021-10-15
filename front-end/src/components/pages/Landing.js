import React from "react";
import { Text } from "@chakra-ui/react";
import AddDeleteBox from "../AddDeleteBox";
import EmployeeTable from "../EmployeeTable";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import EmployeeInput from "../EmployeeInput";
=======
import NewEmployeeForm from "../EmployeeInput";
>>>>>>> d4027eedd8d21bdf6465d56ff5b9a566c5849b4b
import NewEmployeePage from "./NewEmployeeAdd";
>>>>>>> f38ab99963871bf68b7d1a9a7acd1b732b0a5b29

function Landing() {
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <Text fontSize="lg" width="70%" marginTop="150px" marginLeft="40">
=======
      {/* <Text fontSize="lg" width="70%" marginTop="150px" marginLeft="40">
>>>>>>> f38ab99963871bf68b7d1a9a7acd1b732b0a5b29
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales
        dolor arcu, et placerat urna sodales vitae. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean dictum
        dolor sed leo euismod, eget ultrices quam interdum. Proin vehicula
        efficitur lorem, et tincidunt arcu ultrices at. Aliquam vel purus
        commodo, consequat elit in, luctus nibh. Sed id mauris tellus. Ut
        euismod auctor odio a dictum. Morbi at massa orci. Ut fermentum dictum
        neque, vel posuere ipsum dignissim at. Etiam ultrices a neque eget
        cursus. Nam id neque sit amet lorem molestie sodales. Maecenas molestie
        venenatis lobortis. Nunc non orci sed lorem pulvinar mattis tempor non
        augue. Sed sem sapien, facilisis sed accumsan id, ornare et lectus.
        Etiam turpis dolor, placerat at nisi quis, sagittis eleifend lacus.
        Suspendisse vitae mi vel mauris ultricies ullamcorper. Suspendisse
        porttitor, lacus et viverra sagittis, velit nulla consequat neque, eu
        tincidunt nunc enim vitae augue. Nam scelerisque ac mauris a imperdiet.
        Sed nec neque enim. Sed nunc massa, bibendum non velit sit amet,
        hendrerit venenatis ante. Curabitur laoreet vitae lacus in tincidunt.
        Fusce sit amet lacinia arcu. Nulla semper libero elementum, rhoncus leo
        vel, vehicula dolor. Suspendisse at egestas massa. Nullam auctor
        eleifend urna. In hac habitasse platea dictumst. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Duis libero ligula, rhoncus mollis nisi tempus, vulputate imperdiet
        sapien. Morbi lobortis posuere turpis, at dignissim ipsum. Aliquam eu
        mattis ex.
<<<<<<< HEAD
      </Text>
      <AddDeleteBox />
      <EmployeeTable />
=======
      </Text> */}
      <EmployeeInput />
      <EmployeeTable />
      <NewEmployeePage />
>>>>>>> f38ab99963871bf68b7d1a9a7acd1b732b0a5b29
=======
      <h1 className="mainHeader">WELCOME, ARE YOu READY FOR ENGAGEMENT?</h1>
      <Text fontSize="lg" width="70%" marginTop="150px" marginLeft="40">
        Here at Feedback Central we yadayada yada Here at Feedback Central we
        yadayada yada Here at Feedback Central we yadayada yada Here at Feedback
        Central we yadayada yada Here at Feedback Central we yadayada yada
      </Text>

      <NewEmployeePage />
      <EmployeeTable />
>>>>>>> d4027eedd8d21bdf6465d56ff5b9a566c5849b4b
    </>
  );
}

export default Landing;
