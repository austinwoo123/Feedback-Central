import { VStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <VStack p={5}>
          <DarkModeSwitch />
        </VStack>
      </Router>
    </QueryClientProvider>
  );
}
export default App;