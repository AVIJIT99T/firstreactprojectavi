import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Main1 from "./Main1";
import Episode from "./Episode";
import Main2 from "./Main2";
import Episode1 from "./Episode1";
import Character from "./Character";
import Location from "./Location";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/main" component={Main2} />
        <Route path="/episode/:eId" component={Episode1} />
        <Route exact path="/charcter/:id" component={Character} />
        <Route exact path="/location/:lc" component={Location} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
