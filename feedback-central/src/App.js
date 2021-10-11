<<<<<<< HEAD

import Navbar from './components/Navbar';
=======
import { VStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import Login from "./components/Login";


// import { Button } from '@chakra-ui/button';


>>>>>>> e5db9d1d2e5713469fc7b5296904f3a0a402a88c

function App() {


  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar />
    </div>
=======
    <VStack p={5}>
      <Login />
      <DarkModeSwitch />
    </VStack>
>>>>>>> e5db9d1d2e5713469fc7b5296904f3a0a402a88c
  );
}

export default App;
