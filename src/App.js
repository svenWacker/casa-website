import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Soon from "./components/Soon";
import Footer from "./components/Footer";
import Blumisch from "./components/Blumisch";
import Beweglisch from "./components/Beweglisch";
import Teschnisch from "./components/Teschnisch";
import Mitmachen from "./components/Mitmachen";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/casa-website" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blumisch" exact component={Blumisch} />
          <Route path="/beweglisch" exact component={Beweglisch} />
          <Route path="/teschnisch" exact component={Teschnisch} />
          <Route path="/mitmachen" exact component={Mitmachen} />
          <Route path="/contact" exact component={Contact} />
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <Soon />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
