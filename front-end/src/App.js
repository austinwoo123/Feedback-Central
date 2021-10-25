import React from "react";
import "./App.css";
import { Homepage } from "./containers/homepage";
import { EmployeePage } from "./containers/employeePage";
import About from "./containers/aboutPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/employees" component={EmployeePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
