import { VStack } from "@chakra-ui/react";
import Login from "./components/Login";
import { DarkModeSwitch } from "./components/DarkModeSwitch";

function App() {


  return (
    <VStack p={5}>
      <Login />
      <DarkModeSwitch />
    </VStack>
  );
}

export default App;
