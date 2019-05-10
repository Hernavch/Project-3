import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Employer from "./pages/Employer";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={SignUp}/>
          <Route exact path="/user" component={Books}/>
          <Route exact path="/books" component={Books} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/employer" component={Employer}/>

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
