import { VStack } from "@chakra-ui/react";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import View from "./components/pages/View";
import Contact from "./components/pages/Contact";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/View" component={View} />
        </Switch>
        <VStack p={5}>
          <DarkModeSwitch />
        </VStack>
      </Router>
    </QueryClientProvider>
  );
}
export default App;
