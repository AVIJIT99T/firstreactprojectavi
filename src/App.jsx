import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Main1 from "./Main1";
import Episode from "./Episode";
import Main2 from "./Main2";
import Episode1 from "./Episode1";
import Character from "./Character";
import Location from "./Location";
import Location1 from "./Location1";
import Error from "./Error";
import Submit from "./Submit";

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact1" component={Submit} />
          <Route path="/main" component={Main2} />
          <Route path="/character/:eId" component={Episode1} />
          <Route exact path="/episode/:id" component={Character} />
          <Route exact path="/location/:lc" component={Location} />
          <Route exact path="/location/:lc1" component={Location1} />
          {/* <Route component={Error} /> */}
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
