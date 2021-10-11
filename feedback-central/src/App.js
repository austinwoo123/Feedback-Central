import { VStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import Login from "./components/Login";


// import { Button } from '@chakra-ui/button';



function App() {


  return (
    <VStack p={5}>
      <Login />
      <DarkModeSwitch />
    </VStack>
  );
}

export default App;
